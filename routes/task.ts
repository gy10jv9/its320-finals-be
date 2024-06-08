import { Router } from "express"
import { addtask, deleteTask } from "../controllers/task"

const taskRouter = Router()

taskRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

taskRouter.post("/add", async (req, res) => {
    let payload = req.body
    let addedtask = await addtask(payload)

    return res.json(addedtask)
})
taskRouter.delete("/delete/:task_id", async (req, res) => {
    let task_id = req.params.task_id
    deleteTask(task_id)
})

export default taskRouter