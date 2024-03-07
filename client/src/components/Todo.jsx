import { useEffect, useState } from "react";
import {
    AiOutlinePlusCircle,
    AiTwotoneDelete,
    AiFillEdit,
} from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { RiEditCircleLine } from "react-icons/ri";
import axios from "axios"

const Todo = () => {
    // Local State variables
    const [TodoList, setTodoList] = useState([]);
    const [InputTask, setInputTask] = useState("");
    const [ToggleBtn, setToggleBtn] = useState(true);
    const [ItemId, setItemId] = useState(null);
    const [Loading, setLoading] = useState(false)

    const BASE_URL = import.meta.env.VITE_BASE_URL

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/`)
            .then((res) => setTodoList(res.data))
            .catch((err) => console.log(err))
    }, [Loading])

    // Adds a Task
    const handleAdd = (e) => {
        e.preventDefault();
        if(InputTask){
            axios
            .post(`${BASE_URL}/api/create`, {todoItem: InputTask})
            .then((res) => {
                setLoading(!Loading)
                setInputTask("")
            })
            .catch((err) => console.log(err))
        }
        else{
            alert("Please Enter the Task")
        }
    };

    // Edit a Task
    const handleEdit = () => {
        if(InputTask && !ToggleBtn){
            axios
            .put(`${BASE_URL}/api/update/${ItemId}`, {todoItem: InputTask})
            .then((res) => {
                setLoading(!Loading)
                setInputTask("")
                setItemId(null)
                setToggleBtn(true)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    // Delete a Task
    const handleDelete = (id) => {
        axios
        .delete(`${BASE_URL}/api/delete/${id}`)
        .then((res) => {
            setLoading(!Loading)
        })
        .catch((err) => console.log(err))
    }

    // Clears all the Task
    const handleClear = () => {
        axios.delete(`${BASE_URL}/api/clear`)
        .then((res) => {
            setLoading(!Loading)
        })
        .catch((err) => {
            console.log(err)
        })
    };

    // Handle Edit Task
    const handleEnableEdit = (id) => {
        const findTodoItem = TodoList.find(todo => todo._id === id)
        setInputTask(findTodoItem?.todoItem)
        setToggleBtn(false)
        setItemId(id)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <h1>Todo List</h1>

                {/* Main TodoForm */}
                <div className="TodoForm">
                    <input
                        type="text"
                        placeholder="Enter the Task"
                        autoComplete="off"
                        title="Enter your Task"
                        value={InputTask}
                        onChange={(e) => setInputTask(e.target.value)}
                    />
                    {ToggleBtn === true ? (
                        <button type="submit" onClick={handleAdd} title="Add Task">
                            <AiOutlinePlusCircle />
                        </button>
                    ) : (
                        <button type="submit" onClick={handleEdit} title="Edit Task">
                            <RiEditCircleLine />
                        </button>
                    )}

                    <button onClick={handleClear} title="Reset">
                        <BsTrash3Fill />
                    </button>
                </div>

                {/* Todo List */}

                <ul className="TodoDisplay">
                    {TodoList?.map((item) => (
                        <li className="TodoItem" key={item?._id}>
                            <span>{item?.todoItem}</span>
                            <div className="buttons">
                                <button onClick={() => handleEnableEdit(item?._id)}>
                                    <AiFillEdit />
                                </button>
                                <button onClick={() => handleDelete(item?._id)}>
                                    <AiTwotoneDelete />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo