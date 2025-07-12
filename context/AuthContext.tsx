"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { initialUsers } from "@/utils/data";

type IUser = {
  id: number;
  email: string;
  username: string;
};

interface AuthContextProps {
  user: IUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const saved = localStorage.getItem("auth_user");
    if (saved) {
      // setTimeout(() => {
      setUser(JSON.parse(saved));
      // }, 3500)
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const found = initialUsers.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      const u = { id: found.id, email: found.email, username: found.username };
      setUser(u);
      localStorage.setItem("auth_user", JSON.stringify(u));

      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
