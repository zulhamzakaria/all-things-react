import { summary } from "@/data";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

const url = process.env.API_URL;

export async function GET(req: NextApiRequest) {
  const { userId } = getAuth(req);
  console.log(`${url}:${userId}`);
  return Response.json(summary);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
