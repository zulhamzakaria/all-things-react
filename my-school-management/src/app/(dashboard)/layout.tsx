import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4  ">
        <Link
          href="/"
          className=" p-4 lg:justify-start flex items-center justify-center gap-2 "
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School! School! School!</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] text-black bg-[#f7f8fa] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
