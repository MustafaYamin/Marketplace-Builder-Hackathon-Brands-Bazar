import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  return NextResponse.next();
});

// Ensure to match Clerk's config requirements
export const config = {
  matcher: "/((?!_next|.*\\..*).*)",
};
