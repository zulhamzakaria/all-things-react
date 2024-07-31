import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher(["/some-link"]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL("/?user=user_2gzSBiNggGcNbE28mwhWxtaZyLC")
    );
  }
  return NextResponse.next();
}

// Stop Middleware running on static files
export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)", "/"],
};
