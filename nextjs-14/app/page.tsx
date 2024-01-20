"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleRouting = (page: string) => {
    router.push(page);
  };

  return (
    <section className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-justify inline-block">Use Router.</h1>
      <button
        className="mt-5 border px-5 py-1 bg-rose-950 w-32"
        onClick={() => handleRouting("about")}
      >
        About.
      </button>
      <button
        className="mt-1 border px-5 py-1 bg-green-950 w-32"
        onClick={() => handleRouting("portfolio")}
      >
        Portfolio.
      </button>
      <button
        className="mt-1 border px-5 py-1 bg-gradient-to-br from-purple-950 to-blue-950 w-32"
        onClick={() => handleRouting("users")}
      >
        Users.
      </button>
      <button
        className="mt-1 border px-5 py-1 bg-yellow-950 w-32"
        onClick={() => handleRouting("Project1")}
      >
        Project 1.
      </button>
      <button
        className="mt-1 border px-5 py-1 bg-blue-950 w-32"
        onClick={() => handleRouting("Project2")}
      >
        Project 2.
      </button>
    </section>
  );
};

export default Home;
