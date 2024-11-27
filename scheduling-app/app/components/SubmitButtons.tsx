"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        <Button variant={"outline"} className=" w-full">
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}

interface SubmitButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
}

export function SubmitButton({ text, variant, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          variant={"outline"}
          className={cn(" w-fit", className)}
        >
          <Loader2 className="size-4 mr-2 animate-spin" />
          submitting...
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn(" w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}
