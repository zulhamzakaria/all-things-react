import { CheckOut, DeleteItem } from "@/app/actions";
import {
  CheckOutButton,
  DeleteItemButton,
} from "@/app/components/SubmitButton";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const ShoppingBagPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const cart: Cart | null = await redis.get(`car-${user.id}`);
  let totalPrice = 0;
  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className=" max-w-2xl mx-auto mt-10 max-h-[55vh]">
      {!cart || cart?.items ? (
        <div className=" flex min-h-[400px] rounded-lg border mt-20 text-center  p-8 border-dashed  flex-col items-center justify-center">
          <div className=" flex size-20 items-center rounded-full bg-primary/10  justify-center">
            <ShoppingBag className=" size-10 text-primary" />
          </div>
          <h1 className=" mt-6 text-xl font-semibold ">
            You 0 item in your Bag
          </h1>
          <Button asChild>
            <Link href="/">Shop now!</Link>
          </Button>
        </div>
      ) : (
        <div className=" flex flex-col gap-y-10">
          {cart?.items.map((item, idx) => (
            <div key={item.id} className="flex">
              <div className=" w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image
                  className=" rounded-md object-cover"
                  src={item.image}
                  alt="product-image"
                  fill
                />
              </div>
              <div className=" ml-5 flex justify-between w-full font-medium">
                <p>{item.name}</p>
                <div className=" flex flex-col h-full justify-between">
                  <div className=" flex items-center gap-x-2">
                    <p>{item.quantity}x</p>
                    <p>RM{item.price}</p>
                  </div>
                  <form action={DeleteItem}>
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteItemButton />
                  </form>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-10">
            <div className=" flex items-center justify-between font-medium">
              <p>Subtotal:</p>
              <p>${new Intl.NumberFormat("en-MY").format(totalPrice)}</p>
            </div>
            <form action={CheckOut}>
              <CheckOutButton />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagPage;
