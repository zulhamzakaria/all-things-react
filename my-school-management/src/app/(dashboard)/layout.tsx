import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/6 text-black bg-green-50 ">LHS</div>
      <div className="w-5/6 text-black bg-slate-200">RHS</div>
      {/* {children} */}
    </div>
  );
}
