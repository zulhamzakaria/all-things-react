import { redirect } from "next/navigation";
import { auth } from "./auth";
import { Session } from "next-auth";

export async function requireUser(): Promise<Session> {
  const session = await auth();

  if (!session?.user) return redirect("/");
  return session;
}
