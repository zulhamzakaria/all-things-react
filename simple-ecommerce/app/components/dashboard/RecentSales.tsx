import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecentSales = () => {
  return (
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
  );
};

export default RecentSales;
