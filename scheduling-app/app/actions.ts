"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";
import { parseWithZod } from "@conform-to/zod";
import { OnboardingSchema } from "./lib/zod-schemas";

export async function OnboardingAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: OnboardingSchema,
  });

  if (submission.status !== "success") return submission.reply();

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      username: submission.value.username,
      name: submission.value.fullName,
    },
  });
}
