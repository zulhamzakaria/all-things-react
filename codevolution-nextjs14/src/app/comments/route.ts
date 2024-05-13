import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(req: NextRequest) {
  const queryString = req.nextUrl.searchParams;
  // search for the specific string 'query'
  const query = queryString.get("query");

  const filteredComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

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
