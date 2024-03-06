import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import { app } from "./app.js"
import {router} from "./routes/index.js"

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 3000

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(err)
    })
    app.listen(PORT, () => console.log(`Server started at ${PORT}`))
})
.catch((err) => {
    console.log("MongoDB connection failed :",err)
})