import { Router } from "express"
import { adduser, deleteUser, login } from "../controllers/user"

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
userRouter.post("/login", async (req, res) => {
    let payload = req.body
    console.log(`[server]: Routing: ${JSON.stringify(payload)}...`)
    let loginStatus = await login(payload)

    console.log(`[server]: Login status: ${loginStatus}`)
    return res.json(loginStatus)
})
userRouter.delete("/delete/:user_id", (req, res) => {
    let user = req.params.user_id as string;
    deleteUser(user);
});

export default userRouter