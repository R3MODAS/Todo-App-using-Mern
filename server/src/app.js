import express from "express"
import cors from "cors"

const app = express()

app.use(cors(
    { 
    origin: ["https://todo-app-frontend-remo.vercel.app"],
    credentials: true, 
    methods: ["POST", "GET", "PUT", "DELETE"]
}
))
app.use(express.json())

export { app }