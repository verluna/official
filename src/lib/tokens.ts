// JWT token utilities for scorecard report links and newsletter confirmation.
// Uses jose for edge-compatible JWT operations.

import * as jose from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "verluna-dev-secret-change-in-production"
);

interface ScorecardPayload {
  email: string;
  score: number;
  tier: string;
}

export async function createScorecardToken(
  payload: ScorecardPayload
): Promise<string> {
  return new jose.SignJWT({ ...payload, type: "scorecard" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(SECRET);
}

export async function verifyScorecardToken(
  token: string
): Promise<ScorecardPayload | null> {
  try {
    const { payload } = await jose.jwtVerify(token, SECRET);
    if (payload.type !== "scorecard") return null;
    return {
      email: payload.email as string,
      score: payload.score as number,
      tier: payload.tier as string,
    };
  } catch {
    return null;
  }
}

export async function createNewsletterToken(email: string): Promise<string> {
  return new jose.SignJWT({ email, type: "newsletter" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("72h")
    .sign(SECRET);
}

export async function verifyNewsletterToken(
  token: string
): Promise<string | null> {
  try {
    const { payload } = await jose.jwtVerify(token, SECRET);
    if (payload.type !== "newsletter") return null;
    return payload.email as string;
  } catch {
    return null;
  }
}
