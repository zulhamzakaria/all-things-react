import React from "react";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple p-4 even:bg-lamaYellow">
      UserCard
    </div>
  );
};

export default UserCard;
