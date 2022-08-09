import {useState} from "react";
import Todo from "./todo";

import "./todosApp.css";

export default function TodoApp()
{
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] =  useState([]);

    function handleChange(e){
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [... todos];
        temp.unshift(newTodo);
        setTodos(temp);
        setTitle("");
        //console.log(todos)

    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find((item)=>item.id === id);
        item.title = value;
        setTodos(temp);

    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id != id);
        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input type="text" className="todoInput" onChange={handleChange} value={title}/>
                <button className="buttonCreate" onClick={handleSubmit}>Crear todo</button>
            </form>

            <div>
                {
                    todos.map((item) => (
                        <Todo item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    )
                    )
                }
            </div>
        </div>
    );
}