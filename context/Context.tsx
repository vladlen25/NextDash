import React from "react";
import { TaskProvider } from "./TaskContext";
import { DeviceProvider } from "./DeviceContext";
import { BrowserProvider } from "./BrowserContext";
import { UserProvider } from "@/context/UserContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <TaskProvider>
    <DeviceProvider>
      <BrowserProvider>
        <UserProvider>{children}</UserProvider>
      </BrowserProvider>
    </DeviceProvider>
  </TaskProvider>
);
