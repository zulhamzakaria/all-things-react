import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateProductPage = () => {
  return (
    <form action="">
      <div className=" flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeftIcon className=" w-4 h-4" />
          </Link>
        </Button>
        <h1 className=" text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <Card className=" mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add a new product here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col gap-6">
            <div className=" flex flex-col gap-3">
              
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default CreateProductPage;
