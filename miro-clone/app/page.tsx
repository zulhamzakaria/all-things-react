import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>u've been authenticated</p>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
