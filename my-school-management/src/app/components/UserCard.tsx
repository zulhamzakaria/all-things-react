import Image from "next/image";
import React from "react";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className="rounded-2xl flex-1 min-w-130px odd:bg-lamaPurple p-4 even:bg-lamaYellow">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/5
        </span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className=" capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
