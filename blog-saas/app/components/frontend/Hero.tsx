import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <>
      <div className=" relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className=" flex items-center gap-2">
            <Image src={"/logo1.png"} alt="🖼️" width={20} height={20} />
            <h1 className="text-3xl font-semibold">
              Blog! <span className=" text-primary">Blog!</span>
            </h1>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <nav className=" hidden md:flex md:justify-end md:space-x-4">
          <ThemeToggle />
          <LoginLink>
            <Button variant={"secondary"}>Sign in</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Sign up</Button>
          </RegisterLink>
        </nav>
      </div>

      <section className=" relative flex items-center justify-center">
        <div className=" relative items-center w-full py-12 lg:py-20">
          <div className=" text-center">
            <span className=" bg-primary/10 px-4 py-2 text-sm text-primary font-medium tracking-tight">
              Ultimate Blogging SaaS for Startups
            </span>
            <h1 className=" font-medium leading-none mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl ">
              Setup your blog{" "}
              <span className=" block text-primary">in Minutes</span>
            </h1>
            // mx-auto centers the text
            <p className=" max-w-xl tracking-tighter text-muted-foreground mx-auto mt-4 text-base font-light lg:text-lg">
              Save ypur <span className=" text-primary">✨precious✨</span> time
              by setting up your blogs in minutes
            </p>
            <div className=" mt-5 flex items-center gap-x-4 w-full justify-center ">
              <LoginLink>
                <Button variant={"secondary"}>Sign in</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Try for Free</Button>
              </RegisterLink>
            </div>
          </div>

          <div className=" absolute items-center justify-center flex w-full py-12 mx-auto ">
            <Image
              src={"/logo1.png"}
              alt="🖼️"
              height={500}
              width={500}
              className=" relative -mt-24 blur-md -z-10"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};
