import React from "react";
import Sidebar from "./_components/sidebar";
import OrganizationSidebar from "./_components/org-sidebar";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationSidebar />
          <div className="h-full flex-1">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default LayoutPage;
