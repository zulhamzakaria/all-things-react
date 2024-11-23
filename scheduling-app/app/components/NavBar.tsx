import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex py-5 items-center justify-between">
      <Link href={"/"} className=" flex items-center gap-x-2">
        <Image
          src={"/jn6.png"}
          alt="logo"
          width={100}
          height={100}
          className=" object-contain rounded-md shadow-md"
        />
        <h4 className=" text-3xl font-semibold">
          schedule_yo_<span className=" text-primary">SHITS!</span>
        </h4>
      </Link>
      <button>Get scheduling!</button>
    </div>
  );
};

export default Navbar;
