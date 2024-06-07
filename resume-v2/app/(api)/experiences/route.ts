import { experiences as exps } from "@/data";

export async function GET() {
  return Response.json(exps);
}

export async function POST(req: Request) {
  const { exp } = await req.json();

  const newId = exps.experiences.length + 1;
  const newExp = { id: newId, ...exp };
  exps.experiences.push(newExp);

  return new Response(JSON.stringify(exps.experiences), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
