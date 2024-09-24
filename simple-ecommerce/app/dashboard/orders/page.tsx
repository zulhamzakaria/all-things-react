import prisma from "@/app/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function GetOrders() {
  const result = await prisma.order.findMany({
    select: {
      amount: true,
      createAt: true,
      status: true,
      id: true,
      User: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return result;
}

export default async function OrdersPage() {
  const orders = await GetOrders();
  return (
    <Card>
      <CardHeader className=" px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className=" text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <p className=" font-medium">{order.User?.firstName}</p>
                  <p className=" hidden md:flex text-sm text-muted-foreground">
                    {order.User?.email}
                  </p>
                </TableCell>
                <TableCell>Order</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.createAt.toLocaleDateString()}</TableCell>
                <TableCell className=" text-right">
                  RM {new Intl.NumberFormat("en-MY").format(order.amount / 100)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
