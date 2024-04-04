"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already taken." };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Account created!" };
};
