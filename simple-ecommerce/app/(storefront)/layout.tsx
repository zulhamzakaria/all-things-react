import { ReactNode } from "react";
import { Navbar } from "../components/storefront/Navbar";

export default function StorefrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
