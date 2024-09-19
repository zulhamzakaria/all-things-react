import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createProduct() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "leonn.sameonn@gmail.com") {
    return redirect("/");
  }

  

}
