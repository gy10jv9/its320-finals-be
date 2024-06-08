import { Router } from "express"
import { addlist } from "../controllers/list"

const listRouter = Router()

listRouter.get("/", (req, res) => {
    res.send("List route is working!")
})

listRouter.post("/add", async (req, res) => {
    let payload = req.body
    let addedList = await addlist(payload)
    
    return res.json(addedList)
})

export default listRouter