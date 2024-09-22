import ProductCard from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function GetProducts(category: string) {
  switch (category) {
    case "all":
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
        where: {
          status: "published",
        },
      });
      return {
        title: "All Products",
        data: data,
      };

    case "men": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "man",
        },
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
      });
      return {
        title: "Men",
        data: data,
      };
    }

    case "women": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "woman",
        },
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
      });
      return {
        title: "Women",
        data: data,
      };
    }

    case "kids": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "kid",
        },
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
      });
      return {
        title: "Kids",
        data: data,
      };
    }

    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  const { data, title } = await GetProducts(params.name);
  return (
    <section>
      <h1 className=" font-semibold text-3xl my-5">{title}</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </section>
  );
}
