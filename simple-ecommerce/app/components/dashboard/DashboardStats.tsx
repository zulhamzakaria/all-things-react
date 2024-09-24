import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import React from "react";

const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className=" flex flex-row pb-2 items-center justify-between">
          <CardTitle>Total Revenue</CardTitle>
          <DollarSign className=" h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className=" text-2xl font-bold">100.00</p>
          <p className=" text-xs text-muted-foreground ">
            Based on 100 charges
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className=" flex flex-row pb-2 items-center justify-between">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingBag className=" h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className=" text-2xl font-bold">+50</p>
          <p className=" text-xs text-muted-foreground ">Total Sales</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className=" flex flex-row pb-2 items-center justify-between">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className=" h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className=" text-2xl font-bold">37</p>
          <p className=" text-xs text-muted-foreground ">
            Total Products created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className=" flex flex-row pb-2 items-center justify-between">
          <CardTitle>Total Users</CardTitle>
          <User2 className=" h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className=" text-2xl font-bold">120</p>
          <p className=" text-xs text-muted-foreground ">Total Active Users</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
