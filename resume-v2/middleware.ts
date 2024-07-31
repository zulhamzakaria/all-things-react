import {
  clerkMiddleware,
  createRouteMatcher,
  getAuth,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher(["/some-link"]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();

  const userId = auth().userId;

  if (userId) {
    return NextResponse.redirect(new URL(`/?user=${userId}`, req.url));
  }
  return NextResponse.next();
});

// // default user
// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname === "/" && !req.nextUrl.searchParams.has("user")) {
//     return NextResponse.redirect(
//       new URL("/?user=user_2gzSBiNggGcNbE28mwhWxtaZyLC", req.url)
//     );
//   }
//   return NextResponse.next();
// }

// Stop Middleware running on static files
export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)", "/"],
};
