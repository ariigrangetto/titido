import React, {useState } from "react"
import "./ListOfTask.css"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import Filter from "./Filter";
import { useTask } from "../Hooks/useTask";

export default function ListOfTask ({tasks}) {
    const {deleteTask, editTask, toggleTaskCompleted} = useTask();

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");


    const startEdit = (task) =>{
        setEditId(task.id);
        setEditText(task.text);
    }

    const saveEdit = () =>{
        editTask({ id: editId, text: editText});
        setEditId(null);
        setEditText("")
    }

    return(
        <>
        <Filter tasks={tasks}/>
        <div className="taskSections">
            
            <ul >
            {tasks.map((task) =>
            <li key={task.id} className="listOfTask">
                {editId === task.id ? (
                    <>
                    <input type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="save" onClick={saveEdit}>Save</button>
                    <button className="cancel" onClick={() => setEditId(null)}>Cancel</button>
                    </>
                ) :(
                <>
                 <p className="taskText">{task.text}</p>
                <button className={task.completed ? "completed-green" : "not-completed"} name="complete task button" onClick={() => toggleTaskCompleted(task.id)}>{task.completed ? "completed" : "not completed"}</button>
                <button className="delete" name="delete button" onClick={() => deleteTask(task.id)}><Trash2/></button>
                <button className="edit" name="edit button" onClick={() => startEdit(task)}><Pencil/></button>
                </>
                )}
            </li> 
            )}
        </ul>
        </div>
        </>
    )

}