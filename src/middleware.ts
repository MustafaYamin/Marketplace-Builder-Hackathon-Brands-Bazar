import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  // Add any custom middleware logic here
  return NextResponse.next();
});

// Matcher config (same as before)
export const config = {
  matcher: "/((?!_next|.*\\..*).*)",
};