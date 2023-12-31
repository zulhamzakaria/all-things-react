"use client";
import Image from "next/image";
import Link from "next/link";
import Login from "./LoginMenu";
import useAuthStore from "@/stores/authstore";

const Nav = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flex-start gap-10 ">
        <Link href="/">
          <Image
            src="https://media.tenor.com/d13jPFfU24YAAAAi/maxwell-christmas.gif"
            alt="logo"
            width={50}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-center gap-4">
        <Login />
      </div>
    </nav>
  );
};

export default Nav;
