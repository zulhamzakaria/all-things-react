import { NextApiRequest, NextApiResponse } from "next";
import { getHandler } from "./get";
import { useUser } from "@clerk/nextjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = useUser();
  const url = process.env.API_URL;
  try {
    switch (req.method) {
      case "GET":
        var result = getHandler(user!.id, url!);
        return res.status(200).json(result);
    }
  } catch (e) {
    res.status(500).json("Error!");
  }
}

// export async function GET() {
//   return Response.json(summary);
// }

export async function PATCH(req: Request) {
  const body = await req.json();
  const { userId, summary } = body;
  const data = summary.find((summary.userId = userId));
  data.summary = summary;
  console.log(data.summary);
}
