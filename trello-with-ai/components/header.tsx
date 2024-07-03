"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className=" flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="p-1 flex-1 outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="avatar" round size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xlw-fit bg-white italic max-w-3xl ">
          <UserCircleIcon className="inline-block h-10 w-10 mr-1" />
          GPT is summarising...
        </p>
      </div>
    </header>
  );
};

export default Header;
