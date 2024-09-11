import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";
import empleadosRouter from "./routes/empleado.Routes.js";


const app = express();
dotenv.config();
const port = process.env.PORT



connectionMongo();

app.use(express.json())
app.use("/empleado",empleadosRouter)

app.listen(port,()=>{
    console.log(`puerto conectado en http://localhost:${port}`)
})
