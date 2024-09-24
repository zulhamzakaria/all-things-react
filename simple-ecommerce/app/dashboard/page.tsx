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

const DashboardPage = () => {
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
        </Card>
        <RecentSales />
      </div>
    </>
  );
};

export default DashboardPage;
