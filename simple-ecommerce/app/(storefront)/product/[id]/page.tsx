import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import prisma from "@/app/lib/db";
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

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 py-6 lg:gap-x-24 gap-6 items-start">
        <ImageSlider images={product.images} />
      </div>
    </>
  );
};

export default ProductDetailsPage;
