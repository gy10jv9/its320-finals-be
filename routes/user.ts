import { Router } from "express"
import { adduser } from "../controllers/user"

const userRouter = Router()

userRouter.get("/", (req, res) => {
    res.send("User route is working!")
})
userRouter.post("/add", async (req, res) => {
    let payload = req.body
    let addedUser = await adduser(payload)

    console.log(`[server]: Successfully added ${JSON.stringify(addedUser)}`)
    return res.json(addedUser)
})

export default userRouter