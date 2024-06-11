import { Router } from "express"
import { saveList, deleteList, getLists } from "../controllers/list"

const listRouter = Router()

listRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

listRouter.post("/save", async (req, res) => {
    let payload = req.body
    let savedList = await saveList(payload)
    
    return res.json(savedList)
})
listRouter.delete("/delete/:list_id", async (req, res) => {
    let list_id = req.params.list_id
    deleteList(list_id)
})
listRouter.post("/all", async (req, res) => {
    let user_id = req.body
    let lists = await getLists(user_id)
    return res.json(lists)
})

export default listRouter