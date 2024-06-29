import { summary } from "@/data";

export async function getHandler(userId: string, url: string) {
  return Response.json(summary);
}
