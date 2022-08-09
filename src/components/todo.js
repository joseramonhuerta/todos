import { useState } from "react";

export default function TodoApp({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){
        const [newValue, setNewvalue] = useState(item.title);
        
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewvalue(value);
        }

        function handleClickUpdate(){
            onUpdate(item.id, newValue); 
            setIsEdit(false);
        }

        return (<form className="todoCreateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
            <button className="button" onClick={handleClickUpdate}>Editar</button>
        </form>);
    }

    function TodoItem(){
        return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
                <button className="buttonDelete" onClick={(e)=>onDelete(item.id)}>Eliminar</button>
            </div>
        );
    }
    

    return (
        <div className="todo">
            {
                isEdit ? <FormEdit /> : <TodoItem />
            }
        </div>
    );
}