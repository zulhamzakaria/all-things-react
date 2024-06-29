import { summary } from "@/data";

const url = process.env.API_URL;

export async function GET() {
  // get data from api
  const fullUrl = `${url}/user01`;
  console.log(fullUrl);

  return Response.json(summary);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
