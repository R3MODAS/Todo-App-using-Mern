import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: ['https://todo-app-frontend-remo.vercel.app'],
    credentials: true
}))
app.use(express.json())

export { app }