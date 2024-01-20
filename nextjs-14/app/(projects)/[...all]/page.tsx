"use client";

interface pageProps {
  params: { all: string[] };
}

const Project = ({ params }: pageProps) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <br />
      <h1 className="underline uppercase">All routes</h1>
      <br />
      {params.all.map((p) => (
        <li key={p} className="text-left">
          {p}
        </li>
      ))}
    </div>
  );
};

export default Project;
