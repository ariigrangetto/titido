import { createContext, useReducer } from "react";
import taskReducer, { initialState } from "../Reducer/taskReducer";
import React from "react";

export function useTask() {
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
      payload: { id } ,
    });

  return { tasks, addTask, deleteTask, editTask, toggleTaskCompleted };
}

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const { tasks, addTask, deleteTask, editTask, toggleTaskCompleted } = useTask();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, toggleTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}
