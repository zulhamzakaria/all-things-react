import React from "react";
import Sidebar from "./_components/sidebar";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          Org sidebar...
          <div className="h-full flex-1">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default LayoutPage;
