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
    if (req.nextUrl.pathname === "/" && !req.nextUrl.searchParams.has("user"))
      return NextResponse.redirect(new URL(`/?user=${userId}`, req.url));
  } else {
    if (req.nextUrl.pathname === "/" && !req.nextUrl.searchParams.has("user")) {
      return NextResponse.redirect(
        // new URL("/?user=user_2gzSBiNggGcNbE28mwhWxtaZyLC", req.url)
        new URL(`/?user=${process.env.DEFAULT_USER}`, req.url)
      );
    }
  }

  // if (req.nextUrl.pathname === "/" && !req.nextUrl.searchParams.has("user")) {
  //   const userParam = userId ? userId : "user=user_2gzSBiNggGcNbE28mwhWxtaZyLC";
  //   return NextResponse.redirect(new URL(`/?user=${userParam}`, req.url));
  // }

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
