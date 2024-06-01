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
  { params }: { params: { id: string } }
) {
  const { skill: newskill } = await req.json();
  const index = skills.skills.findIndex(
    (skill) => skill.id === parseInt(params.id)
  );
  skills.skills[index].skill = newskill;
  return Response.json(skills.skills);
}

export async function DELETE({ params }: { params: { id: string } }) {
  const index = skills.skills.findIndex(
    (skill) => skill.id === parseInt(params.id)
  );
  skills.skills.splice(index, 1);
  return Response.json(skills.skills);
}
