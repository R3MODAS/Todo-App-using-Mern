import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import app from "./app.js"

dotenv.config({
    path: './server/.env'
});

const PORT = process.env.PORT

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log(err)
        })
        app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))
    })
    .catch((err) => {
        console.log("MongoDB connection failed :", err)
    })