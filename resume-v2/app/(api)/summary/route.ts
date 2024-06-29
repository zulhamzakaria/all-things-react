import { summary } from "@/data";
import { useUser } from "@clerk/nextjs";

const url = process.env.API_URL;

export async function GET() {
  const { user } = useUser();

  if (user) {
    // get data from api
  }
  return Response.json(summary);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
