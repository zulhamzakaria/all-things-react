import { summary } from "@/data";

export async function GET() {
  return Response.json(summary);
}
