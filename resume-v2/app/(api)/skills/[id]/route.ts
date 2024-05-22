import { skills } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const skill = skills.find((skill) => skill.id === parseInt(params.id));
  return Response.json(skill);
}
