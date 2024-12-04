import Image from "next/image";
import Link from "next/link";
import jn6 from "@/assets/jn6.png";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href={"/resumes"} className="flex items-center gap-2">
          <Image
            src={jn6}
            alt="logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            AI Resume Builder
          </span>
        </Link>
      </div>
    </header>
  );
}
