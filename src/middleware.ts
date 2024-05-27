import { auth } from "@/app/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname != "/login") {
    return Response.redirect(new URL("/login", req.url));
  }
  if (req.auth && req.nextUrl.pathname == "/login") {
    return Response.redirect(new URL("/dashboard", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
