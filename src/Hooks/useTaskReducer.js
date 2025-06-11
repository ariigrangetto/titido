import { useReducer } from "react";
import taskReducer, { initialState } from "../Reducer/taskReducer";

export function useTaskReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) =>
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

  const deleteTask = (id) =>
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });

  const editTask = (task) =>
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });

  const toggleTaskCompleted = (id) =>
    dispatch({
      type: "TASK_COMPLETED",
      payload: { id },
    });

  return { tasks, addTask, deleteTask, editTask, toggleTaskCompleted };
}
