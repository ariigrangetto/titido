import { createContext} from "react";
import React from "react";
import { useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [filter, setFilter] = useState({
        completed: "all"
    })

    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}