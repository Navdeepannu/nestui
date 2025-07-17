"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/docs/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpenAction] = useState(false);
  return (
    <>
      <Navbar setSidebarOpenAction={setSidebarOpenAction} />
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpenAction={setSidebarOpenAction}
        />
        <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
      </div>
    </>
  );
}
