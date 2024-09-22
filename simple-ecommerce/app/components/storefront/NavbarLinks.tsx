"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center ml-5 items-center gap-x-4">
      {navbarLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            location === link.href
              ? "bg-muted"
              : " hover:bg-muted hover:bg-opacity-75",
            "group p-2 rounded-md font-medium"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
];
