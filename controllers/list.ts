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
    
    return query
}