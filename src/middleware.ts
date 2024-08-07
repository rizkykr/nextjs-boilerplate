import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { doesRoleHaveAccessToURL } from "./function/roles";

export default withAuth(function middleware(req) {
  // Redirect to login page if there is no accessible token
  if (!req.nextauth.token) {
    return NextResponse.redirect("/auth/login");
  }

  const role = req.nextauth.token.role as string;
  const chk = doesRoleHaveAccessToURL(role, req.nextUrl.pathname);

  if (!chk) return NextResponse.error();

  // Allow
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next|assets|manifest|auth/login|favicon.ico).*)",
  ],
};
