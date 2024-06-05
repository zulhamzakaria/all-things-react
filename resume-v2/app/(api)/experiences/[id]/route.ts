import { experiences as exps } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const experience = exps.experiences.find(
    (exp) => exp.id === parseInt(params.id)
  );
  return Response.json(experience);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { exp: updatedExp } = await req.json();
  const index = exps.experiences.findIndex(
    (exp) => exp.id === parseInt(params.id)
  );
  exps.experiences[index] = { ...exps.experiences[index], ...updatedExp };
  return Response.json(exps.experiences[index]);
}
