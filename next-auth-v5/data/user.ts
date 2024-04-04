import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({ where: { email } });
    return user;
  } catch {
    return null;
  }
};
