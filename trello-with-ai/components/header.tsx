import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="logo"
        width={150}
        height={50}
        className="w-44 md:w-56 pb-10 md:pd-0 object-contain"
      />
      <div>
        <form action="">
            <input type="text"/>
            <button hidden>Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
