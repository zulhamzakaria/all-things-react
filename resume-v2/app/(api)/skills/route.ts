import { skills } from "@/data";
import { headers } from "next/headers";
import { json } from "stream/consumers";

export async function GET() {
  return Response.json(skills);
}

export async function POST(req: Request) {
  const { skill } = await req.json();
  const newSkill = {
    id: skills.skills.length + 1,
    skill: skill,
  };
  skills.skills.push(newSkill);

  return new Response(JSON.stringify(skills.skills), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
