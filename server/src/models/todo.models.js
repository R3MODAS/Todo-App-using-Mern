import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        required: true
    }
})

export const Todo = mongoose.model("Todo", todoSchema)