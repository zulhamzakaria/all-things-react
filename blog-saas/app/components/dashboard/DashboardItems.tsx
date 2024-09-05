"use client";

import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardItems() {
  const pathName = usePathname();
  return (
    <>
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={cn(
            pathName == link.href
              ? "bg-muted text-blue-500"
              : " text-muted-foreground bg-none",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/90"
          )}
        >
          <link.icon className=" size-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}
