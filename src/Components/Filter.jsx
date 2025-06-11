import { useContext, useId } from "react";
import React from "react";
import { FilterContext } from "../Context/FilterContext";
import "./Filter.css"
import useFilter from "../Hooks/useFilter";

export default function Filter(){
    const {filter, setFilter} = useFilter();

    const selectId = useId();


    
    const handleChangeCompleted = (e) =>{
        setFilter (prev => ({
            ...prev,
            completed: e.target.value
        }))
    }

    return(
        <>
        <label htmlFor={selectId}>Seleccione categoría:</label>
        <select className="selectSection" id={selectId} onChange={handleChangeCompleted}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not completed</option>
        </select></>
    )

}