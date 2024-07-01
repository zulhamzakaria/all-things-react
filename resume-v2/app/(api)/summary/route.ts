import { summary } from "@/data";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

const url = `${process.env.API_URL}/summaries`;

export async function GET(req: NextRequest) {
  const headersList = headers();

  const requestUrl = headersList.get("referer");

  const cock = req.nextUrl.searchParams.get("userId");
  console.log(requestUrl);
  const fullUrl = `${url}/user01`;

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
