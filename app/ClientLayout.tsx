"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ContextProvider } from "@/context/Context";
import AppSidebar from "@/components/sidebar/AppSidebar";
import AppNavbar from "@/components/navbar/AppNavbar";

export default function ClientLayout({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
}) {
  return (
    <ContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme={"dark"}
        enableSystem={false}
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />

          <main className="w-full">
            <AppNavbar />
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </ContextProvider>
  );
}
