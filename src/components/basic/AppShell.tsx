"use client";
import { useState } from "react";
import { Navbar } from "./navbar";
import Sidebar from "@/components/docsLayout/Sidebar";
import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const showSidebar = pathname !== "/";
  return (
    <>
      <Navbar setSidebarOpenAction={setSidebarOpen} />
      <div className="min-h-screen pt-14">
        {showSidebar && (
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpenAction={setSidebarOpen}
          />
        )}
        <main
          className={`overflow-y-auto ${showSidebar ? "main-with-sidebar" : ""}`}
        >
          {children}
        </main>
      </div>
    </>
  );
}
