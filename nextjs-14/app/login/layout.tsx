import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { Roboto, Monoton, IBM_Plex_Mono } from "next/font/google";

interface PageProps {
  children: ReactNode;
}

export const metadata = {
  title: "logins",
  description: "Main Login, Admin's and User's",
};

const roboto = Roboto({ weight: "900", subsets: ["latin"] });
const monoton = Monoton({ weight: "400", subsets: ["latin"] });
const ibmPlex = IBM_Plex_Mono({ weight: "600", subsets: ["latin"] });

const layout: FC<PageProps> = (params) => {
  return (
    <div>
      <ul className="bg-blue-950 h-10 items-center border">
        <li>
          <Link href="/login" className={roboto.className}>
            Login Main
          </Link>
        </li>
        <li>
          <Link href="/login/loginadmin" className={monoton.className}>
            Login Admin
          </Link>
        </li>
        <li>
          <Link href="/login/loginuser" className={ibmPlex.className}>
            Login User
          </Link>
        </li>
      </ul>
      {params.children}
    </div>
  );
};

export default layout;
