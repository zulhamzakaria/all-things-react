import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <h1>Hello, World</h1>
      <ModeToggle />
      {session ? <p>{session.user.name}</p> : <Button>Sign in</Button>}
    </div>
  );
}
