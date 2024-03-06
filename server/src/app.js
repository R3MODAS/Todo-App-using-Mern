import express from "express"
import cors from "cors"
import { router } from "./routes/index.js"

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)

export { app }