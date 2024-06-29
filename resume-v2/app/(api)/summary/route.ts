import { NextApiRequest, NextApiResponse } from "next";
import { getHandler } from "./get";
import { useUser } from "@clerk/nextjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = useUser();
  if (req.method === "GET") {
    if(user){
      var result = getHandler(user!.id);
      return res.status(200).json(result);
    }
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
