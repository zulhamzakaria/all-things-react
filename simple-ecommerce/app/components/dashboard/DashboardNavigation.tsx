"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

const DashboardNavigation = () => {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={cn(
            link.href === pathName
              ? "text-black"
              : " hover:text-foreground text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
