import { ReactNode } from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex-col flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <header className=" sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
        <nav className=" hidden font-medium md:flex md:flex-row lg:gap-6 md:text-sm md:items-center md:gap-5 ">
          <DashboardNavigation />
        </nav>

        <Sheet>
          <SheetTrigger asChild></SheetTrigger>
        </Sheet>
      </header>
      {/* {children} */}
    </div>
  );
}
