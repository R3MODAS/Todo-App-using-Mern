import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import { app } from "./app.js"
import { router } from "./routes/index.js"

dotenv.config()

const PORT = process.env.PORT

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(err)
    })
    app.use("/api", router)
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))
})
.catch((err) => {
    console.log("MongoDB connection failed :",err)
})