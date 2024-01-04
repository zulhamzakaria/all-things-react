import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Balmond</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
