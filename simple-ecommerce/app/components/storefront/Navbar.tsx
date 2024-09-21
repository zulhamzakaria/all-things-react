import Link from "next/link";

export function Navbar() {
  return (
    <nav className=" w-full max-w-7xl mx-auto px-4 sm:px-6 justify-between flex items-center lg:px-8 py-5">
      <div className=" flex items-center">
        <Link href={"/"}>
          <h1 className=" text-black font-bold text-xl lg:text-3xl">
            Home<span className=" text-primary">Page</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
}
