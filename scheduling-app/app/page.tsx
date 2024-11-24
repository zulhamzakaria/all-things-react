import { redirect } from "next/navigation";
import Navbar from "./components/NavBar";
import { auth } from "./lib/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <Navbar />
    </div>
  );
}
