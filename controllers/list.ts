import prisma from "../library/prisma";

export const addlist = async (payload: any) => {
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
    return query
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