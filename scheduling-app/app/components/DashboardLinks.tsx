"use client";

import { cn } from "@/lib/utils";
import {
  CalendarCheck,
  HomeIcon,
  LucideProps,
  Settings,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface DashboardLinksProps {
  id: number;
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const dashboardLinks: Array<DashboardLinksProps> = [
  { id: 0, name: "Event Types", href: "/dashboard", icon: HomeIcon },
  { id: 1, name: "Meetings", href: "/dashboard/meetings", icon: Users2 },
  {
    id: 2,
    name: "Availibility",
    href: "/dashboard/availibility",
    icon: CalendarCheck,
  },
  {
    id: 3,
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardLinks() {
  const pathname = usePathname();

  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          className={cn(
            pathname === link.href
              ? "text-blue-900 bg-primary/70 "
              : "text-muted-foreground hover:text-muted-foreground",
            " flex items-center gap-3 rounded-lg p-3 transition-all text-gray-900 dark:text-gray-50"
          )}
          key={link.id}
          href={link.href}
        >
          <link.icon className="size-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}
