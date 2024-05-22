import { skills } from "@/data";

export async function GET() {
  Response.json(skills);
}
