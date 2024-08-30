import Image from "next/image";
import React from "react";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className="rounded-2xl flex-1 min-w-130px odd:bg-lamaPurple p-4 even:bg-lamaYellow">
      <div>
        <span>2024/5</span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1>1,234</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default UserCard;
