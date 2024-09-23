import prisma from "@/app/lib/db";
import ProductCard, { LoadingProductCard } from "./ProductCard";
import { Suspense } from "react";

async function GetProducts() {
  const results = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
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
    take: 3,
  });
  return results;
}

export function FeaturedProducts() {
  return (
    <>
      <h2 className=" text-2xl font-extrabold tracking-tight">
        <Suspense fallback={<LoadingRows />}>
          <LoadFeaturedProducts />
        </Suspense>
      </h2>
    </>
  );
}

async function LoadFeaturedProducts() {
  const products = await GetProducts();
  return (
    <div className=" mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className=" mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
}
