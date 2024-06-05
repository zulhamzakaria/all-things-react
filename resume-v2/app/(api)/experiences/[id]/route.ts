import { experiences } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const experience = experiences.experiences.find(
    (exp) => exp.id === parseInt(params.id)
  );
  return Response.json(experience);
}
