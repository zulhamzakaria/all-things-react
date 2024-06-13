import { educations } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const education = educations.find((edu) => edu.id === parseInt(params.id));
  return Response.json(education);
}
