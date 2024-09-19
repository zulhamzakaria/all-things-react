import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { ProductSchema } from "./lib/zodSchemas";

export async function createProduct(formData: FormData) {
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
}
