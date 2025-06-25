"use client";
import React, { createContext, useState, useContext } from "react";
import { ExpenseInterface } from "@/types/types";
import { initialExpenses } from "@/utils/data";

interface ExpenseContextType {
  expenses: ExpenseInterface[];
  createExpense: (expense: ExpenseInterface) => void;
  updateExpense: (expense: ExpenseInterface) => void;
  deleteExpense: (id: number) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<ExpenseInterface[]>(initialExpenses);

  const createExpense = (expense: ExpenseInterface) =>
    setExpenses((prev) => [...prev, expense]);

  const updateExpense = (expense: ExpenseInterface) =>
    setExpenses((prev) => prev.map((e) => (e.id === expense.id ? expense : e)));

  const deleteExpense = (id: number) =>
    setExpenses((prev) => prev.filter((e) => e.id !== id));

  return (
    <ExpenseContext.Provider
      value={{ expenses, createExpense, updateExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context)
    throw new Error("useExpenseContext must be used within ExpenseProvider");
  return context;
};
