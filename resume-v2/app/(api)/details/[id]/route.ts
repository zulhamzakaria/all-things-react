import { details } from "@/data";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  let user;
  user = details.find((user) => user.userId === params.id);
  if (!user) {
    user = {}
  }
  return Response.json(user);
}
