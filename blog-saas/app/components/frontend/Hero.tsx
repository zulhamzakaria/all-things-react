import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className=" relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className=" flex items-center gap-2">
            <Image
              src={"@/public/logo1.png"}
              alt="🖼️"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
