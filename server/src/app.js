import express from "express"
import cors from "cors"

const app = express()

app.use(cors({ credentials: true, origin: ["https://todo-app-frontend-remo.vercel.app"] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export { app }