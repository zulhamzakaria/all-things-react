import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { useReducer } from "react";
import { Button } from "@/components/ui/button";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className=" w-full max-w-7xl mx-auto px-4 sm:px-6 justify-between flex items-center lg:px-8 py-5">
      <div className=" flex items-center">
        <Link href={"/"}>
          <h1 className=" text-black font-bold text-xl lg:text-3xl">
            Home<span className=" text-primary">Page</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>
      <div>
        {user ? (
          <>
            <Link href={"/bag"} className=" group p-2 flex items-center mr-2">
              <ShoppingBagIcon className=" size-6 text-gray-400  group-hover:text-gray-500" />
              <span className=" ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 ">
                5
              </span>
            </Link>
            <UserDropdown
              email={user.email as string}
              name={user.given_name!}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className="hidden md:flex md:flex-1  md:space-x-2 md:items-center md:justify-end ">
            <Button asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <span className=" size-6 bg-gray-200"></span>
            <Button asChild variant={"secondary"}>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
