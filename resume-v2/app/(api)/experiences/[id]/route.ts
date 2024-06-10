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
  return Response.json(exps.experiences);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const index = exps.experiences.findIndex(
    (exp) => exp.id === parseInt(params.id)
  );

  if (index === -1) {
    throw new Error(`Id ${params.id} not found`);
  }

  exps.experiences.splice(index, 1);
  return Response.json(exps.experiences);
}
