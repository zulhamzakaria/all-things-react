import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-blue-900 text-white">
        This is a shared navebar between Dashboard segments.
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
