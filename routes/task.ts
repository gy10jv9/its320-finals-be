import { Router } from "express"
import { saveTask, deleteTask } from "../controllers/task"

const taskRouter = Router()

taskRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

taskRouter.post("/save", async (req, res) => {
    let payload = req.body
    let savedTask = await saveTask(payload)

    return res.json(savedTask)
})
taskRouter.delete("/delete/:task_id", async (req, res) => {
    let task_id = req.params.task_id
    deleteTask(task_id)
})

export default taskRouter