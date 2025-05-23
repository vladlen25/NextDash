'use client'
import React, { createContext, useState, useContext } from "react";
import { DeviceInterface } from "@/types/types";
import { initialDevices } from "@/utils/data";

interface DeviceContextType {
    devices: DeviceInterface[];
    createDevice: (device: DeviceInterface) => void;
    updateDevice: (device: DeviceInterface) => void;
    deleteDevice: (id: number) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [devices, setDevices] = useState<DeviceInterface[]>(initialDevices);

    const createDevice = (device: DeviceInterface) => setDevices([...devices, device]);
    const updateDevice = (device: DeviceInterface) =>
        setDevices(devices.map(u => (u.id === device.id ? device : u)));
    const deleteDevice = (id: number) =>
        setDevices(devices.filter(u => u.id !== id));

    return (
        <DeviceContext.Provider value={{ devices, createDevice, updateDevice, deleteDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDeviceContext = () => {
    const context = useContext(DeviceContext);
    if (!context) throw new Error("useDeviceContext must be used within DeviceProvider");
    return context;
};
