import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export function GET() {
//   return NextResponse.json({ result: "hello" });
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, age, email } = req.body;

  if (!email || !name || !age) {
    return NextResponse.json(
      { error: "Incomplete data", ok: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: "record added" });
}
