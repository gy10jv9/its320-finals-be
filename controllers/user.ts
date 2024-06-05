import prisma from "../library/prisma";

export const adduser = async (payload: any) => {
    let query = await prisma.user.create({
        data: {
            username: payload.username,
            email: payload.email,
            password: payload.password
        }
    })
    
    return query
}