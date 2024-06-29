import { summary } from "@/data";

export async function getHandler(userId: string) {
  return Response.json(summary);
}
