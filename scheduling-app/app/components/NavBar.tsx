import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex py-5 items-center justify-between">
      <Link href={"/"}>
        <div className=" size-10">📅</div>
      </Link>
    </div>
  );
};

export default Navbar;
