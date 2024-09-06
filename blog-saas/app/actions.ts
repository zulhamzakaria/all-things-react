import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { SiteSchema } from "./utils/zodSchemas";

export async function CreateSiteAction(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  const submission = parseWithZod(formData, {
    schema: SiteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
}
