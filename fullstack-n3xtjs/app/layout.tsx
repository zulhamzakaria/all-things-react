import "./globals.css";

export const metadata = {
  title: "Galeria",
  description: "Projects gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
