"use server";

import { currentUserRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { error } from "console";

export const admin = async () => {
  const role = await currentUserRole();
  if (role === UserRole.ADMIN) {
    return { error: "Halt" };
  }
  return { success: "Proceed" };
};
