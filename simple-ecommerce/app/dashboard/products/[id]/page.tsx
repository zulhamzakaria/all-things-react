import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getProduct(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) return notFound();
  return data;
}

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  return <div>ProductEditPage</div>;
};

export default EditProductPage;
