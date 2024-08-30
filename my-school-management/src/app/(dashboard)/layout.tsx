import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] text-black bg-green-50 ">
        LHS
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] text-black bg-slate-200">
        RHS
      </div>
      {/* {children} */}
    </div>
  );
}
