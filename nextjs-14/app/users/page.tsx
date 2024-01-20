"use client";

import { useRouter } from "next/navigation";

const Users = () => {
  const router = useRouter();
  const handleRouting = (page: string) => {
    router.push(page);
  };
  return (
    <div className="flex flex-col items-center justify-center pt-10 h-screen bg-gradient-to-br from-purple-950 to-blue-950">
      <p className="text-5xl underline">Users.</p>
      <button
        onClick={() => handleRouting("users/xia")}
        className="mt-6 border px-5 py-1 bg-gradient-to-br from-cyan-950 to-blue-950 w-32"
      >
        User
      </button>
    </div>
  );
};

export default Users;
