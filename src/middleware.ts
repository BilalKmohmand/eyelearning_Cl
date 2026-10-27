import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Legacy locator URL with query string
  if (
    pathname === "/US/index.do" &&
    searchParams.get("country") === "US" &&
    searchParams.get("lang") === "en"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/US/index.do"],
};
