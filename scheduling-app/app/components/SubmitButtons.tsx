"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={"outline"} className=" w-full">
          <Loader2 className=" size-4 mr-2 animate-spin" />
          signing-in...
        </Button>
      ) : (
        <Button disabled variant={"outline"} className=" w-full">
          Sign in with Google
        </Button>
      )}
    </>
  );
}
export function GithubAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={"outline"} className=" w-full">
          <Loader2 className=" size-4 mr-2 animate-spin" />
          signing-in...
        </Button>
      ) : (
        <Button disabled variant={"outline"} className=" w-full">
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}
