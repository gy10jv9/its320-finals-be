import prisma from "../library/prisma";
import { ObjectId } from 'mongodb';

export const adduser = async (payload: any) => {
    let query = await prisma.user.create({
        data: {
            username: payload.username,
            password: payload.password
        }
    })
    
    return query
}

export const login = async (payload: any) => {
    console.log(`[server]: Logging in ${JSON.stringify(payload)}...`)

    if (!payload.username || !payload.password) {
        return 0;
    }

    let query = await prisma.user.findFirst({
        where: {
            username: payload.username,
            password: payload.password
        }
    })

    return query ? 1 : 0;
}

export const deleteUser = async (user: string) => {
    let existingUser;
    
    if (ObjectId.isValid(user)) {
        existingUser = await prisma.user.findFirst({
            where: {
                id: user
            }
        });
    } else {
        existingUser = await prisma.user.findFirst({
            where: {
                username: user
            }
        });
    }

    if (existingUser) {
        const userLists = await prisma.list.findMany({
            where: {
                user_id: existingUser.id,
            },
        });
        
        //  para mag delete sng tasks nga related sa list
        for (const list of userLists) {
            await prisma.task.deleteMany({
                where: {
                    list_id: list.id,
                },
            });
        }
        
        // para mag delete sng list nga related sa user
        await prisma.list.deleteMany({
            where: {
                user_id: existingUser.id,
            },
        });
        
        await prisma.user.delete({
            where: {
                id: existingUser.id
            }
        })

        console.log(`[server]: User ${existingUser.username} has been deleted`)
    } else {
        console.log(`[server]: Did not find user ${user} in the database.`)
    }
}