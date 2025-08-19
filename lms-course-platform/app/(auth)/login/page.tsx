import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" variant={"outline"}>
          <GithubIcon className="size-4" />
          Sign in with Github
        </Button>

        <div className="relative text-center text-sm after:absolute after:border-t after:border-border after:inset-0 after:z-0 after:items-center after:flex after:top-1/2 ">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
