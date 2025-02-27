import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { DashboardLinks } from "../components/DashboardLinks";
import { ThemeToggle } from "../components/ThemeToggle";
import { requireUser } from "../lib/hooks";
import { signOut } from "../lib/auth";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

async function getUserData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      username: true,
    },
  });

  if (!data?.username) return redirect("/onboarding");
  return data;
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireUser();
  const data = await getUserData(session.user?.id!);

  return (
    <>
      <div className=" min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className=" hidden md:block border-r bg-muted/40">
          <div className=" flex h-full max-h-screen flex-col gap-2">
            <div className=" flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href={"/"} className=" flex gap-x-2 items-center">
                <Image
                  src={"/jn4.png"}
                  alt="logo"
                  height={60}
                  width={60}
                  className=" object-cover rounded-md"
                />
                <span className=" font-extrabold text-xl text-primary">
                  scheduler!
                </span>
              </Link>
            </div>

            <div className=" flex-1">
              <nav className=" grid items-start px-2 lg:px-4">
                <DashboardLinks />
              </nav>
            </div>
          </div>
        </div>

        <div className=" flex flex-col">
          <header className=" flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className=" md:hidden shrink-0"
                  size={"icon"}
                  variant={"outline"}
                >
                  <MenuIcon className=" size-5" />
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent side={"left"} className=" flex flex-col">
                <nav className=" gap-2 grid mt-5">
                  <DashboardLinks />
                </nav>
              </SheetContent>
            </Sheet>

            <div className=" flex ml-auto items-center gap-x-4">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"secondary"}
                    size={"icon"}
                    className=" rounded-full"
                  >
                    <img
                      src={session.user?.image ?? "/jn7.png"}
                      alt="/jn7.png"
                      width={20}
                      height={20}
                      className=" h-full w-full rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={"/dashboard/settings"}>Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <form
                      action={async () => {
                        "use server";
                        await signOut();
                      }}
                    >
                      <Button className=" w-full bg-red-600 hover:bg-red-600 text-white">
                        Sign out
                      </Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className=" flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
