import React from "react";
import { TaskProvider } from "./TaskContext";
import { DeviceProvider } from "./DeviceContext";
import { BrowserProvider } from "./BrowserContext";
import { UserProvider } from "@/context/UserContext";
import { AuthProvider } from "@/context/AuthContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AuthProvider>
    <TaskProvider>
      <DeviceProvider>
        <BrowserProvider>
          <UserProvider>{children}</UserProvider>
        </BrowserProvider>
      </DeviceProvider>
    </TaskProvider>
  </AuthProvider>
);
