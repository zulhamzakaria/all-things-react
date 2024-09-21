import Link from "next/link";

export function NavbarLinks() {
  return (
    <div className="hidden md:flex justify-center ml-5 items-center gap-x-2">
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
];
