"use client";
import React, { createContext, useState, useContext } from "react";
import { BrowserInterface } from "@/types/types";
import { initialBrowsers } from "@/utils/data";

interface BrowserContextType {
  browsers: BrowserInterface[];
  createBrowser: (browser: BrowserInterface) => void;
  updateBrowser: (browser: BrowserInterface) => void;
  deleteBrowser: (id: number) => void;
}

const BrowserContext = createContext<BrowserContextType | undefined>(undefined);

export const BrowserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [browsers, setBrowsers] = useState<BrowserInterface[]>(initialBrowsers);

  const createBrowser = (browser: BrowserInterface) =>
    setBrowsers([...browsers, browser]);
  const updateBrowser = (browser: BrowserInterface) =>
    setBrowsers(browsers.map((u) => (u.id === browser.id ? browser : u)));
  const deleteBrowser = (id: number) =>
    setBrowsers(browsers.filter((u) => u.id !== id));

  return (
    <BrowserContext.Provider
      value={{ browsers, createBrowser, updateBrowser, deleteBrowser }}
    >
      {children}
    </BrowserContext.Provider>
  );
};

export const useBrowserContext = () => {
  const context = useContext(BrowserContext);
  if (!context)
    throw new Error("useBrowserContext must be used within BrowserProvider");
  return context;
};
