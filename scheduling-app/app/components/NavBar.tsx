import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex p-5 items-center justify-between">
      <Link href={"/"}>📅</Link>
    </div>
  );
};

export default Navbar;
