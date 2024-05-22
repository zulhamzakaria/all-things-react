import { skills } from "@/data";

export async function GET() {
  return Response.json(skills);
}
