import React, { useContext, useState } from "react"
import { TaskContext } from "../Hooks/useTask"
import "./ListOfTask.css"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';


export default function ListOfTask ({tasks}) {
    const {deleteTask, editTask, toggleTaskCompleted} = useContext(TaskContext);

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
                <button className={task.completed ? "completed-green" : "not-completed"} onClick={() => toggleTaskCompleted(task.id)}>{task.completed ? "completed" : "not completed"}</button>
                <button className="delete" onClick={() => deleteTask(task.id)}><Trash2/></button>
                <button className="edit" onClick={() => startEdit(task)}><Pencil/></button>
                </>
                )}
            </li> 
            )}
        </ul>
        </div>
        
    )

}