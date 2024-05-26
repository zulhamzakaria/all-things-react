"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const routeTo = useRouter();
  return (
    <nav className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/resume-icon.png"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className=" text-[26px] font-extrabold text-white max-sm:hidden font-mono">
          Resume
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedOut>
          <div
            className=" text-white max-sm:hidden font-mono p-2 px-5 rounded-full bg-red-400 hover:cursor-pointer"
            onClick={() => routeTo.push("/sign-in")}
          >
            login
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
  //   clerk, about
};
