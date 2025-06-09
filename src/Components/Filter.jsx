import { useContext, useId } from "react";
import React from "react";
import { FilterContext } from "../Context/FilterContext";
import "./Filter.css"

export default function Filter({tasks}){
    const {filter, setFilter} = useContext(FilterContext);

    const selectId = useId();

    
    const handleChangeCompleted = (e) =>{
        setFilter (prev => ({
            ...prev,
            completed: e.target.value
        }))
    }

    return(
        <>
        <select className="selectSection" id={selectId} onChange={handleChangeCompleted}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not completed</option>
        </select></>
    )

}