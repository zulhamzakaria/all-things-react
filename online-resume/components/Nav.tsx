"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

const Nav = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };
  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flex-start gap-10 ">
        <Link href="/">
          <Image
            src="https://media.tenor.com/d13jPFfU24YAAAAi/maxwell-christmas.gif"
            alt="logo"
            width={30}
            height={20}
          />
        </Link>
      </div>
      <div className="flex-center gap-4">
        <span onClick={handleLoginClick}>log in</span>
        {isLoginVisible && <Login />}
      </div>
    </nav>
  );
};

export default Nav;
