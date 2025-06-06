import ListOfTask from "./ListOfTasks";
import React from "react";
import "./Task.css"

function WithoutTask(){
    return(
        <p>There are no pending tasks</p>
    )
}

export default function Task({tasks}){
    const hasTask = tasks.length > 0;

    return(
        hasTask
        ? <ListOfTask tasks={tasks}/>
        : <WithoutTask/>
    )
    

}