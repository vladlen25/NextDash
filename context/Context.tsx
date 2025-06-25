import React from "react";
import { TaskProvider } from "./TaskContext";
import { ExpenseProvider } from "./ExpenseContext";
import { BrowserProvider } from "./BrowserContext";
import { UserProvider } from "@/context/UserContext";
import { AuthProvider } from "@/context/AuthContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AuthProvider>
    <TaskProvider>
      <ExpenseProvider>
        <BrowserProvider>
          <UserProvider>{children}</UserProvider>
        </BrowserProvider>
      </ExpenseProvider>
    </TaskProvider>
  </AuthProvider>
);
