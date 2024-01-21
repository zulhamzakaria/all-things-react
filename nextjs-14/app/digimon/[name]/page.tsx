import { redirect } from "next/navigation";

interface PageProps {
  params: { name: string };
}

const Page = ({ params }: PageProps) => {
  if (params.name === "pikachu") {
    redirect("/");
  }

  return (
    <div className="h-screen flex items-center justify-center text-5xl bg-gradient-to-b from-yellow-500 to-orange-500">
      <p className="border bg-gradient-to-tr from-cyan-500 to-blue-950 py-2 px-5">
        {params.name}
      </p>
    </div>
  );
};

export default Page;
