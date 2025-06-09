import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

export default function useFilter() {
  const { filter, setFilter } = useContext(FilterContext);

  if (!filter || !setFilter) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  const filterTask = (tasks) => {
    if (filter.completed === "all") return tasks;
    return tasks.filter((task) => {
      if (filter.completed === "completed") return task.completed === true;
      if (filter.completed === "notcompleted") return task.completed === false;
    });
  };

  return { filter, setFilter, filterTask };
}
