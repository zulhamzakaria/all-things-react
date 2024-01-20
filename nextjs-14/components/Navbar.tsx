import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div className="logo">Logo</div>
        <div className="link-container">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
}
