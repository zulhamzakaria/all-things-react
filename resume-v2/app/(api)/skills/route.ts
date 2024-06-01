import { skills } from "@/data";

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
