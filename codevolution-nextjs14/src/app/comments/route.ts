import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers, cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const queryString = req.nextUrl.searchParams;
  // search for the specific string 'query'
  const query = queryString.get("query");

  const filteredComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  const headerlist = headers();
  const authheader = headerlist.get("authorization");
  cookies().set("resultsPerPage", "20");

  // const requestHeaders = new Headers(req.headers);
  // return new Response(requestHeaders.get("Authorization"), {
  //   headers: {
  //     "Set-Cookie": "theme=dark",
  //   },
  // });

  return Response.json(filteredComment);
}

export async function POST(req: Request) {
  const comment = await req.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
