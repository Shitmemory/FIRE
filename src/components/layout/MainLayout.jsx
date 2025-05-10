import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/navigation/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--fire-background))]">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} FIRE Wholesale. All rights reserved.
      </footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
