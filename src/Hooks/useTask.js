import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTask must be in TaskProvider");

  return context;
}
