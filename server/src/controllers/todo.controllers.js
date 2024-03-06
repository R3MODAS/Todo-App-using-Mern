import { Todo } from "../models/todo.models.js";

const getTodos = async (req, res) => {
    try {
        const todoList = await Todo.find()
        res.status(201).send(todoList)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err
        })
    }
}

const createTodo = async (req, res) => {
    try {
        const { todoItem } = req.body
        const createTodo = await Todo.create({ todoItem: todoItem })
        res.status(201).send(createTodo)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err
        })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { todoItem } = req.body
        await Todo.findByIdAndUpdate({ _id: id }, { todoItem: todoItem })
        res.status(200).json({ message: "Updated successfully!!" })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err
        })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const deletedItem = await Todo.findByIdAndDelete({ _id: id })
        res.status(200).send(deletedItem)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err
        })
    }
}

const clearTodos = async (req, res) => {
    try {
        await Todo.deleteMany()
        res.status(200).send("Deleted Successfully!!")
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err
        })
    }
}

export { createTodo, getTodos, updateTodo, deleteTodo, clearTodos }