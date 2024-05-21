import { details } from "@/data";

export async function GET() {
  return Response.json(details);
}
