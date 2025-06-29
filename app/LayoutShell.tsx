"use client";
import { useAuth } from "@/context/AuthContext";
import { Spinner } from "@/components/ui/Spinner";
import AppSidebar from "@/components/sidebar/AppSidebar";
import AppNavbar from "@/components/navbar/AppNavbar";
import { useEffect, useState } from "react";

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useAuth();
  const [delayedLoading, setDelayedLoading] = useState(true);

  // useEffect(() => {
  //   if (!isLoading) {
  //     const timer = setTimeout(() => {
  //       setDelayedLoading(false);
  //     }, 1000); // 3 секунды показываем спиннер после загрузки
  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || delayedLoading) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        style={{ pointerEvents: "none" }}
      >
        <Spinner size="large" show />
      </div>
    );
  }
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <AppNavbar />
        {children}
      </main>
    </>
  );
};
