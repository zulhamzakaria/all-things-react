import { education } from "@/data";

export async function GET() {
  return Response.json(education);
}
