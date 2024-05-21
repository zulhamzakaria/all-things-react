import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function MobileNav() {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon
            height={32}
            width={32}
            className=" text-white cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className=" border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/resume-icon.png"
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className=" text-[26px] font-extrabold text-white">Resume</p>
          </Link>
          <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {/* TODO: sidebar items */}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
