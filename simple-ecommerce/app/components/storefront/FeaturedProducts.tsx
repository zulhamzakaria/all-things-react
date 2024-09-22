import prisma from "@/app/lib/db";
import ProductCard from "./ProductCard";

async function GetProducts() {
  const results = await prisma.product.findMany({
    where: {
      status: "published",
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return results;
}

export async function FeaturedProducts() {
  const products = await GetProducts();
  return (
    <>
      <h2 className=" text-2xl font-extrabold tracking-tight">
        <div className=" mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </h2>
    </>
  );
}
