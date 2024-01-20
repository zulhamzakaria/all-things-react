"use client";

interface pageProps {
  params: { user: string };
}

const User = ({ params }: pageProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl underline uppercase">{params.user}.</p>
    </div>
  );
};

export default User;
