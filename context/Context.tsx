import React from "react";
import {TaskProvider} from "./TaskContext";
import {DeviceProvider} from "./DeviceContext";
import {BrowserProvider} from "./BrowserContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <TaskProvider>
        <DeviceProvider>
            <BrowserProvider>
                {children}
            </BrowserProvider>
        </DeviceProvider>
    </TaskProvider>
);
