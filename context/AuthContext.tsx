"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { initialUsers } from "@/utils/data";
import { UserInterface } from "@/types/types";

interface AuthContextProps {
  user: UserInterface | null;
  isLoading: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (newUser: UserInterface) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
  login: () => false,
  logout: () => {},
  register: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [users, setUsers] = useState<UserInterface[]>(initialUsers);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const savedAuthUser = localStorage.getItem("auth_user");
    const savedUsers = localStorage.getItem("auth_users");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    if (savedAuthUser) {
      setUser(JSON.parse(savedAuthUser));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("auth_users", JSON.stringify(users));
  }, [users]);

  const register = (newUser: UserInterface) => {
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    localStorage.setItem("auth_user", JSON.stringify(newUser));
  };

  const login = (email: string, password: string): boolean => {
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (found) {
      setUser(found);
      localStorage.setItem("auth_user", JSON.stringify(found));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");


  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
