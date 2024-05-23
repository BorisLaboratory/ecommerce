// runs on every page load
import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isValidPassword";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("UnAuthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" }, //displays an inbuilt log in dialog
    });
  }
}

// check if authenticated
async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  // if nothing was passed
  if (authHeader == null) return false;

  // if we passed username and password correctly
  const [username, password] = Buffer.from(
    authHeader.split(" ")[1], //split header at space byteLength being 1,
    "base64" //and convert to a buffer to decrypt the encoded password values based on base64
  )
    .toString() // convert to javascript string
    .split(":"); // splits the expected (    username:password    ) at ":"

  //   console.log(username, password);

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string
    ))
  );
}

// check if url is inside admin path
export const config = {
  matcher: "/admin/:path*",
};
