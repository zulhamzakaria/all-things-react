import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentSales from "../components/dashboard/RecentSales";
import Chart from "../components/dashboard/Chart";
import prisma from "../lib/db";

async function GetOrders() {
  const now = new Date();
  const lastSevenDays = new Date();
  lastSevenDays.setDate(now.getDate() - 7);
  const orders = await prisma.order.findMany({
    where: {
      createAt: {
        gte: lastSevenDays,
      },
    },
    select: {
      amount: true,
      createAt: true,
    },
    orderBy: {
      createAt: "asc",
    },
  });

  const result = orders.map((order) => {
    date: new Intl.DateTimeFormat("en-MY").format(order.createAt);
    revenue: order.amount / 100;
  });
  return result;
}

const DashboardPage = async () => {
  const orders = GetOrders();
  return (
    <>
      <DashboardStats />
      <div className=" grid gap-4 md:gap-8 lg:grid-cols-2 mt-10 xl:grid-cols-3">
        <Card className=" xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions for your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </>
  );
};

export default DashboardPage;
