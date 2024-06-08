import { Router } from "express"
import { addlist, deleteList } from "../controllers/list"

const listRouter = Router()

listRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

listRouter.post("/add", async (req, res) => {
    let payload = req.body
    let addedList = await addlist(payload)
    
    return res.json(addedList)
})
listRouter.delete("/delete/:list_id", async (req, res) => {
    let list_id = req.params.list_id
    deleteList(list_id)
})

export default listRouter