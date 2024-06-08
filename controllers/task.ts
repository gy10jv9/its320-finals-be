import prisma from "../library/prisma";

export const addtask = async (payload: any) => {
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