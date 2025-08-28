"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  return (
    <div>
      <h1>Hello, World</h1>
      <ModeToggle />
      {session ? <p>{session.user.name}</p> : <Button>Sign in</Button>}
    </div>
  );
}
