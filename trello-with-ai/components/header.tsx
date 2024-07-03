import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pd-0 object-contain"
      />
    </div>
  );
};

export default Header;
