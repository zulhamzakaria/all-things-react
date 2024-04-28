import React from "react";
import Sidebar from "./_components/sidebar";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">{children}</div>
    </main>
  );
};

export default LayoutPage;
