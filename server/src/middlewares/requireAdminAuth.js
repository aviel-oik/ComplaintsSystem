import 'dotenv/config.js';
import jwt from "jsonwebtoken"

export default function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    console.log("flute")
    if (!authorization)
        return res.status(401).json({ message: "No token provided" });
    const token = authorization.split(" ")[1];
    console.log(token)
    try {
        console.log(process.env.SECRET_KEY)
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded)
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}
