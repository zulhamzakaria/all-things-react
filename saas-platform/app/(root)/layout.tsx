import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <div className="root">
        <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Root;
