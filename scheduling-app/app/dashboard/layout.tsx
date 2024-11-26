import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className=" hidden md:block border-r bg-muted/40">
          <div className=" flex h-full max-h-screen flex-col gap-2">
            <div className=" flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href={"/"} className=" flex gap-x-2 items-center">
                <Image
                  src={"/jn4.png"}
                  alt="logo"
                  height={60}
                  width={60}
                  className=" object-cover rounded-md"
                />
                <span className=" font-extrabold text-xl text-primary">
                  scheduler!
                </span>
              </Link>
            </div>

            <div className=" flex-1">
              <nav className=" grid items-start px-2 lg:px-4"></nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
