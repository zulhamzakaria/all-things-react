import { AddItem } from "@/app/actions";
import { FeaturedProducts } from "@/app/components/storefront/FeaturedProducts";
import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { ShoppingBag, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";

async function GetProduct(productId: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      images: true,
      description: true,
      name: true,
      id: true,
    },
  });
  if (!product) {
    return notFound();
  }
  return product;
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const product = await GetProduct(params.id);
  const addProductToCart = AddItem.bind(null, product.id);

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 py-6 lg:gap-x-24 gap-6 items-start">
        <ImageSlider images={product.images} />
        <div>
          <h1 className=" text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <p className=" text-xl mt-2 text-gray-700">RM{product.price}</p>
          <div className=" mt-3 flex items-center gap-1">
            <StarIcon className=" h-4 w-4 text-yellow-400 fill-yellow-500" />
            <StarIcon className=" h-4 w-4 text-yellow-400 fill-yellow-500" />
            <StarIcon className=" h-4 w-4 text-yellow-400 fill-yellow-500" />
            <StarIcon className=" h-4 w-4 text-yellow-400 fill-yellow-500" />
            <StarIcon className=" h-4 w-4 text-yellow-400 fill-yellow-500" />
          </div>
          <p className=" text-base text-gray-700 mt-6">{product.description}</p>
          <form action={addProductToCart}>
            <Button size={"lg"} className=" w-full mt-5">
              <ShoppingBag className=" mr-4 h-5 w-5" />
              Add to cart
            </Button>
          </form>
        </div>
      </div>
      <div className=" mt-16">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default ProductDetailsPage;
