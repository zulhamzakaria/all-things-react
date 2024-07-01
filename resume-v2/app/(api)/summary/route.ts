import { summary } from "@/data";
import { NextApiRequest } from "next";

const url = `${process.env.API_URL}/summaries`;

export async function GET(_req: NextApiRequest) {

  const fullUrl = `${url}/user01`;
  //const fullUrl = `${url}/${userId}`;

  const response = await fetch(fullUrl);
  const result = await response.json();

  if (result) {
    return Response.json(result);
  } else {
    return Response.json(summary);
  }
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
