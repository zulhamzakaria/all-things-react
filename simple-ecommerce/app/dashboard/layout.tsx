import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      this is the DashboardLayout
      {children}
    </div>
  );
}
