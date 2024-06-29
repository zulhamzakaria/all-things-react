import { summary } from "@/data";
import { NextApiResponse } from "next";

// https://online-resume-with-minimal-api.azurewebsites.net/api/summaries/user01
const url = `${process.env.API_URL}/summaries`;

export async function GET(res: NextApiResponse) {
  const fullUrl = `${url}/user01`;

  const response = await fetch(fullUrl);
  const result = await response.json();

  return res.status(200).json({ userId: "user01", description: "string" });

  // if (result) {
  //return Response.json(result);
  // } else {
  //   return Response.json(summary);
  // }
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
