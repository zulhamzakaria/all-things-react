import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <div className=" flex flex-col gap-y-2">
        <div className=" flex items-center justify-end">
          <Button className=" gap-x-2 bg-blue-950" asChild>
            <Link href="/dashboard/products/create">
              <PlusCircle />
              <p>Add product</p>
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and the sales performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className=" text-end">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Image
                        alt="🖼️"
                        src={product.images[0]}
                        height={64}
                        width={64}
                        className=" size-16 rounded-md object-cover "
                      />
                    </TableCell>
                    <TableCell className=" capitalize">
                      {product.name}
                    </TableCell>
                    <TableCell className=" capitalize">
                      {product.status}
                    </TableCell>
                    <TableCell>RM {product.price}</TableCell>
                    <TableCell>
                      {product.createdAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell className=" text-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size={"icon"} variant={"ghost"}>
                            <MoreHorizontal className=" h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/products/${product.id}/`}>Edit</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductsPage;
