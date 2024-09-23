"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";

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
}

export default function SubmitButton({ text, variant }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className=" mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button type="submit" variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size={"lg"} className=" w-full mt-5">
          <Loader2 className=" mr-4 h-5 w-5 animate-spin" />
          Adding to cart
        </Button>
      ) : (
        <Button size={"lg"} className=" w-full mt-5" type="submit">
          <ShoppingBag className=" mr-4 h-5 w-5" />
          Add to cart
        </Button>
      )}
    </>
  );
}

export function DeleteItemButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="  font-medium text-primary">
          <Loader2 className=" mr-4 h-5 w-5 animate-spin" />
          Removing item
        </Button>
      ) : (
        <Button className=" font-medium text-primary" type="submit">
          Delete
        </Button>
      )}
    </>
  );
}

export function CheckOutButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className=" mr-2 size-5 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">Checkout</Button>
      )}
    </>
  );
}
