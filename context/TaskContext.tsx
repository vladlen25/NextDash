"use client";
import React, { createContext, useState, useContext } from "react";
import { TaskInterface } from "@/types/types";
import { initialTasks } from "@/utils/data";

interface TaskContextType {
  tasks: TaskInterface[];
  createTask: (task: TaskInterface) => void;
  updateTask: (task: TaskInterface) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskInterface[]>(initialTasks);

  const createTask = (task: TaskInterface) => setTasks([...tasks, task]);
  const updateTask = (task: TaskInterface) =>
    setTasks(tasks.map((u) => (u.id === task.id ? task : u)));
  const deleteTask = (id: number) => setTasks(tasks.filter((u) => u.id !== id));
  const toggleTask = (id: number) =>
    setTasks(
      tasks.map((u) => (u.id === id ? { ...u, completed: !u.completed } : u)),
    );
  return (
    <TaskContext.Provider
      value={{ tasks, createTask, updateTask, deleteTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTaskContext must be used within TaskProvider");
  return context;
};
