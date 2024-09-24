import prisma from "@/app/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function GetOrders() {
  const orders = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          firstName: true,
          profileImage: true,
          email: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
    take: 7,
  });
  return orders;
}

const RecentSales = async () => {
  const orders = await GetOrders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>Recent sales for your store</CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col gap-8">
        {orders.map((order) => (
          <div key={order.id} className=" flex items-center gap-4">
            <Avatar className="hidden sm:flex h-9 w-9">
              <AvatarImage src={order.User?.profileImage} alt="avatar-image" />
              <AvatarFallback>
                {order.User?.firstName.slice(0, 3)}
              </AvatarFallback>
            </Avatar>
            <div className=" grid gap-1">
              <p className=" text-sm font-medium">{order.User?.firstName}</p>
              <p className=" text-sm text-muted-foreground">
                {order.User?.email}
              </p>
            </div>
            <p className=" ml-auto">
              +RM{new Intl.NumberFormat("en-MY").format(order.amount / 100)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSales;
