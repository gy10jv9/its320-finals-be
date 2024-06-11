import prisma from "../library/prisma";

export const saveTask = async (payload: any) => {
    let query = await prisma.task.create({
        data: {
            description: payload.description,
            list: {
                connect: {
                    id: payload.list_id
                }
            }
        }
    })
    
    console.log(`[server]: Successfully added task: ${JSON.stringify(query)}`)
    return query
}

export const deleteTask = async (task_id: string) => {
    let query = await prisma.task.delete({
        where: {
            id: task_id
        }
    })

    console.log(`[server]: Successfully deleted task: ${JSON.stringify(query)}`)
    return query
}