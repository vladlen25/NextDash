'use client'
import React, { createContext, useContext, useState } from "react";
import { UserInterface } from "@/types/types";
import { initialUsers } from "@/utils/data";

interface UserContextType {
    users: UserInterface[];
    createUser: (user: UserInterface) => void;
    updateUser: (user: UserInterface) => void;
    deleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<UserInterface[]>(initialUsers);

    const createUser = (user: UserInterface) => setUsers([...users, user]);
    const updateUser = (user: UserInterface) =>
        setUsers(users.map(u => (u.id === user.id ? user : u)));
    const deleteUser = (id: number) =>
        setUsers(users.filter(u => u.id !== id));

    return (
        <UserContext.Provider value={{ users, createUser, updateUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be used within UserProvider");
    return context;
};
