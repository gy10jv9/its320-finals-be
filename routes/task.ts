import { Router } from "express"
import { addtask } from "../controllers/task"

const taskRouter = Router()

taskRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

taskRouter.post("/add", async (req, res) => {
    let payload = req.body
    let addedtask = await addtask(payload)

    return res.json(addedtask)
})

export default taskRouter