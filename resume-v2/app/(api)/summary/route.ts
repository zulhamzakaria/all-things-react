import { summary } from "@/data";

// https://online-resume-with-minimal-api.azurewebsites.net/api/summaries/user01
const url = `${process.env.API_URL}/summaries`;

export async function GET() {
  // get data from api
  const fullUrl = `${url}/user01`;

  const result = await fetch(fullUrl);
  console.log(result);

  return Response.json(summary);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
