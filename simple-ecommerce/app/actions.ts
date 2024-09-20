"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { ProductSchema } from "./lib/zodSchemas";
import prisma from "./lib/db";

export async function createProduct(currentState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "leonn.sameonn@gmail.com") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: ProductSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect("/dashboard/products");
}

export async function editProduct(currentState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "leonn.sameonn@gmail.com") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: ProductSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  const productId = formData.get("productId") as string;
  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });
  redirect("/dashboard/products");
}

export async function deleteProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "leonn.sameonn@gmail.com") {
    return redirect("/");
  }
  const productId = formData.get("productId") as string;
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });

  redirect("/dashboard/products");
}
