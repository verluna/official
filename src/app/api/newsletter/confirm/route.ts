import { NextRequest, NextResponse } from "next/server";
import { verifyNewsletterToken } from "@/lib/tokens";
import { confirmNewsletterContact } from "@/lib/hubspot";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/newsletter-expired", request.url));
  }

  const email = await verifyNewsletterToken(token);

  if (!email) {
    return NextResponse.redirect(new URL("/newsletter-expired", request.url));
  }

  // Update HubSpot (fire and forget)
  confirmNewsletterContact(email).catch(() => {});

  console.log(
    JSON.stringify({
      route: "newsletter/confirm",
      event: "confirmed",
      email,
    })
  );

  return NextResponse.redirect(new URL("/newsletter-confirmed", request.url));
}
