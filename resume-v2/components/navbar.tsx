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

      <div className=" flex-row gap-5">
        <SignedOut>
          <button
            className=" text-white font-light max-sm:hidden px-5 py-2 rounded-full font-mono bg-rose-600 opacity-95"
            onClick={() => routeTo.push("/sign-in")}
          >
            sign-in
          </button>
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
