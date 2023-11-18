import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flex-start gap-10 ">
        <Link href="/">
          <Image
            src="https://media.tenor.com/Jojpr9QgMLoAAAAd/maxwell-maxwell-spin.gif"
            alt="logo"
            width={20}
            height={20}
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7"></ul>
      </div>
    </nav>
  );
};

export default Nav;
