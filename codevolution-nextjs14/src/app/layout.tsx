"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import ThemeProvider from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

// export const metadata: Metadata = {
//   title: {
//     absolute: "",
//     default: "",
//     template: "",
//   },
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
            Root Layout Header
          </header>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? " font-bold mr-4" : " text-blue-500 mr-4"}
              >
                {link.name}
              </Link>
            );
          })}

          {children}
          <footer style={{ backgroundColor: "navajowhite" }}>
            Root Layout Footer
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
