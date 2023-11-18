import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Online Resume",
  description: "Built with .NetCore, React, nextJs, TS, Azure, ElephantDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
