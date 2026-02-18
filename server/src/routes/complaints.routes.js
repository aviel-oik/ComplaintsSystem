import { Router } from 'express';
import supabase from "../db/connect.js"
import authMiddleware from "../middlewares/requireAdminAuth.js"

const router = Router()

router.post("/", async (req, res) => {
    const { category, message } = req.body
    if (!category || !message)
        return res.status(400).json({ message: "Category and message required" })
    if (category != "אוכל" && category !== "ציוד" && category !== "פקודות" && category !== "אחר")
        return res.status(400).json({ message: "Invalid category" })
    const inserted = await supabase
        .from('complaints')
        .insert([{
            created_at: new Date().toLocaleString(),
            category: category,
            message: message
        }])
    res.status(200).json({ message: "inserted successfully" })
})

router.get("/", authMiddleware, async (req, res) => {
    const result = await supabase
        .from('complaints')
        .select('*')
        .order('created_at', { ascending: false })
    console.log(result.data)

    res.status(200).json({ message: "get complaints", data: result.data })
})

export default router;