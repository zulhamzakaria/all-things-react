import prisma from "@/app/lib/db";

async function GetData(category: string) {
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
        title: "Men Products",
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
        title: "Women Products",
        data: data,
      };
    }
  }
}

export default function CategoriesPage() {
  return (
    <div>
      <h1>CategoriesPage</h1>
    </div>
  );
}
