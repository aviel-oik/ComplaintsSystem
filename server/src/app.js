import express from "express";
import cors from "cors";
import complaintsRoute from "./routes/complaints.routes.js"
import adminLoginRoute from "./routes/adminLogin.routes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/complaints", complaintsRoute)
app.use("/api/admin/login", adminLoginRoute)


app.listen(8080, () => { console.log('http://localhost:8080') })