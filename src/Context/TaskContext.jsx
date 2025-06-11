import { createContext } from "react";
import { useTaskReducer } from "../Hooks/useTaskReducer";
import React from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const { tasks, addTask, deleteTask, editTask, toggleTaskCompleted } = useTaskReducer();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, toggleTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}