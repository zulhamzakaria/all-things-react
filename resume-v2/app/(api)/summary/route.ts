import { summary } from "@/data";
import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { getAuth } from "@clerk/nextjs/server";

const url = `${process.env.API_URL}/summaries`;

export async function GET(req: NextRequest) {
  const headersList = headers();
  const requestUrl = headersList.get("referer");

  const { userId } = getAuth(req);

  const cock = req.nextUrl.searchParams.get("userId");
  console.log(userId);
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
