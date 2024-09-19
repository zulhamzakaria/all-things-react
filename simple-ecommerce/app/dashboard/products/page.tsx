import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <>
      <div className=" flex items-center justify-end">
        <Button className=" gap-x-2" asChild>
          <Link href="dashboard/products/create">
            <PlusCircle />
            <p>Add product</p>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ProductsPage;
