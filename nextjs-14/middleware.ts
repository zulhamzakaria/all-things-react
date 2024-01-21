import { NextResponse } from "next/server";

export function middleware(request: any) {
  console.log("middleware run");
  return NextResponse.json({ success: "successfully run middleware" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
