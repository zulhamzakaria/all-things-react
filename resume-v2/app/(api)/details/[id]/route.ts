import { details } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const result = details.find((user) => user.userId === id);
  if (result) {
    res.status(200).json(result);
  }
}
