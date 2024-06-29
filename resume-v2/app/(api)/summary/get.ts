import { summary } from "@/data";

export async function getHandler() {
  return Response.json(summary);
}
