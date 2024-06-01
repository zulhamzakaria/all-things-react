import { skills } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const skill = skills.skills.find((skill) => skill.id === parseInt(params.id));
  return Response.json(skill);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { skill: newSkill } = await req.json();
  const index = skills.skills.findIndex((skill) => skill.id === params.id);
  skills.skills[index].skill = newSkill;
  return Response.json(skills.skills[index]);
}
