import { users } from "../../util/db";
import { NextResponse } from "next/server";

//get specific user
export async function GET(_: any, res: any) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}

// login
export async function POST(req: any, res: any) {
  let { name, age } = await req.json();
  const { id } = await res.params;

  const user = users.find((u) => u.id === id);

//   const { name: Name = "Unknown", age: Age = "0" } = user;
}
