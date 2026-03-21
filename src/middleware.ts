import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedAdminRoute =
    pathname.startsWith("/admin/panel") ||
    pathname.startsWith("/admin/videos") ||
    pathname.startsWith("/admin/posts");

  if (!isProtectedAdminRoute) {
    return NextResponse.next();
  }

  const isAuthed = request.cookies.get("admin_auth")?.value === "1";

  if (!isAuthed) {
    const loginUrl = new URL("/admin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
