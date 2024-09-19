import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  if (!user || user === null) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        firstName: user.given_name ?? "",
        lastName: user.family_name!,
        profileImage:
          user.picture ??
          "https://vignette.wikia.nocookie.net/meme/images/5/52/Polite_Cat-0.jpg/revision/latest?cb=20200611120017",
      },
    });
  }

  NextResponse.redirect(process.env.INDEX_PAGE ?? "https://google.com");
}
