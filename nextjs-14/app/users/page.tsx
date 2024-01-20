"use client";

import { useRouter } from "next/navigation";

const Users = () => {
  const router = useRouter();

  //mname array
  const names = ["gabbie-carter", "skye-blue", "melody-marks"];

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const handleRouting = () => {
    const randomName = getRandomName();
    router.push(`users/${randomName}`);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 h-screen bg-gradient-to-br from-purple-950 to-blue-950">
      <p className="text-5xl underline">Users.</p>
      <button
        onClick={() => handleRouting()}
        className="mt-6 border px-5 py-1 bg-gradient-to-br from-cyan-950 to-blue-950 w-32"
      >
        User
      </button>
    </div>
  );
};

export default Users;
