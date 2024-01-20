"use client";

interface pageProps {
  params: { user: string };
}

const User = ({ params }: pageProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl uppercase border py-1 px-2 bg-gradient-to-r from-rose-300 to-cyan-800">
        {params.user.toString().replace("-", " ")}
      </p>
    </div>
  );
};

export default User;
