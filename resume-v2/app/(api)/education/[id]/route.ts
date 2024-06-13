import { educations } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const education = educations.find((edu) => edu.id === parseInt(params.id));
  return Response.json(education);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const index = educations.findIndex((edu) => edu.id === parseInt(params.id));
  if (index !== -1) {
    educations.splice(index, 1);
  }
  return Response.json(educations);
}
