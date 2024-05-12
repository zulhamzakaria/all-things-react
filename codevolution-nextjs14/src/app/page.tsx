import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Homepage!</h2>
      <Link href="/about" className=" p-4">
        About
      </Link>{" "}
      {" | "}
      <Link href="/blog" className=" p-4">
        Blog
      </Link>
    </div>
  );
}
