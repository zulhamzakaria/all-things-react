import { users } from "../../util/db";
import { NextResponse } from "next/server";

//get specific user
export async function GET(_: any, res: any) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}
