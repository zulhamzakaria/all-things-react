import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardStats from "../components/dashboard/DashboardStats";

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
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Recent sales for your store</CardDescription>
          </CardHeader>
          <CardContent className=" flex flex-col gap-8">
            <div className=" flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className=" grid gap-1">
                <p className=" text-sm font-medium">Jonnie Jonnie</p>
                <p className=" text-sm text-muted-foreground">
                  jonnie.jonnie@mail.com
                </p>
              </div>
              <p className=" ml-auto">+$199.00</p>
            </div>
            <div className=" flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className=" grid gap-1">
                <p className=" text-sm font-medium">Jonnie Jonnie</p>
                <p className=" text-sm text-muted-foreground">
                  jonnie.jonnie@mail.com
                </p>
              </div>
              <p className=" ml-auto">+$199.00</p>
            </div>
            <div className=" flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className=" grid gap-1">
                <p className=" text-sm font-medium">Jonnie Jonnie</p>
                <p className=" text-sm text-muted-foreground">
                  jonnie.jonnie@mail.com
                </p>
              </div>
              <p className=" ml-auto">+$199.00</p>
            </div>
            <div className=" flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className=" grid gap-1">
                <p className=" text-sm font-medium">Jonnie Jonnie</p>
                <p className=" text-sm text-muted-foreground">
                  jonnie.jonnie@mail.com
                </p>
              </div>
              <p className=" ml-auto">+$199.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;
