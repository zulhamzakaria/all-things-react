import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex p-5 items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/jn6.png"}
          alt="logo"
          width={100}
          height={100}
          className=" object-contain rounded-md"
        />
      </Link>
    </div>
  );
};

export default Navbar;
