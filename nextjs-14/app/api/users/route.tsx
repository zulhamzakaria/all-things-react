import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ result: "hello" });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  let { email, password } = await req.body.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  return NextResponse.json({ success: "record added" });
}
