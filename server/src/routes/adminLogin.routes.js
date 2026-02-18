import { Router } from 'express';
import 'dotenv/config.js';
import jwt from "jsonwebtoken"

const router = Router()

router.post("/", (req, res) => {
    const password = req.body.password;
    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(
            {},
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );
        return res.json({ message: "Login successfully", token });
    }
    res.status(400).json({ message: "Unauthorized" })
})

export default router;