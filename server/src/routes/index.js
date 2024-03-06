import express from "express"
import { clearTodos, createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controllers.js"

const router = express.Router()

router.get("/get", getTodos)
router.post("/create", createTodo)
router.put("/update/:id", updateTodo)
router.delete("/delete/:id", deleteTodo)
router.delete("/clear", clearTodos)

export {router}