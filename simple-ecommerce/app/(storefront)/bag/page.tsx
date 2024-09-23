import { DeleteItem } from "@/app/actions";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
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
      {cart?.items.length === 0 ? (
        <div>
          <h1>Shopping bag is empty</h1>
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
                    <button className=" font-medium text-primary text-end">
                      Delete
                    </button>
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
            <Button>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagPage;
