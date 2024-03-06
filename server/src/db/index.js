import mongoose from "mongoose"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("\nMongoDB connection err: ",err)
        process.exit(1)
    }
}

export {connectDB}