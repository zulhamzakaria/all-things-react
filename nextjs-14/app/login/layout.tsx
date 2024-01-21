import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const metadata = {
  title: "logins",
  description: "Main Login, Admin's and User's",
};

const layout: FC<PageProps> = (params) => {
  return (
    <div>
      <ul className="bg-blue-950 h-10 items-center border">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login User</Link>
        </li>
      </ul>
      {params.children}
    </div>
  );
};

export default layout;
