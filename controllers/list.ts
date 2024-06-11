import prisma from "../library/prisma";

export const saveList = async (payload: any) => {
    let query = await prisma.list.create({
        data: {
            title: payload.title,
            user: {
                connect: {
                    id: payload.user_id
                }
            }
        }
    })
    
    console.log(`[server]: Successfully added list: ${JSON.stringify(query)}`)
    return query.id
}

export const deleteList = async (list_id: string) => {
    //  para mag delete tasks nga related sa list
    await prisma.task.deleteMany({
        where: {
            list_id: list_id
        }
    })

    let query = await prisma.list.delete({
        where: {
            id: list_id
        }
    })

    console.log(`[server]: Successfully deleted list: ${JSON.stringify(query)}`)
}

export const getLists = async (user_id: string) => {
    let query = await prisma.list.findMany({
        where: {
            user_id: user_id
        },
        include: {
            tasks: {
                select: {
                    description: true,
                }
            }
        }
    })

    console.log(`[server]: Successfully fetched lists: ${JSON.stringify(query)}`)
    return query
}