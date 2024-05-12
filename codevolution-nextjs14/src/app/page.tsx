import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Homepage!</h2>
      <Link href="/about">About</Link> {" | "}
      <Link href="/blog">Blog</Link>
    </div>
  );
}
