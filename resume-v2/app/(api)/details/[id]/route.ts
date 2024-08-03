import { details } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const user = details.find((user) => user.userId === params.id);
  return Response.json(user);
}
