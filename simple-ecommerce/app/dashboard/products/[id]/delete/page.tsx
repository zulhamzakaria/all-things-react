import { deleteProduct } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteProduct({ params }: { params: { id: string } }) {
  return (
    <div className=" h-[80vh] w-full flex items-center justify-center">
      <Card className=" max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>
            This action will delete the product and irrecoverable
          </CardDescription>
        </CardHeader>
        <CardFooter className=" w-full flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input name="productId" value={params.id} type="hidden" />
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
