// Upstash Redis rate limiting.
// Falls back to a permissive in-memory map when env vars are missing (dev mode).

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

let ratelimitInstance: Ratelimit | null = null;

// Simple in-memory fallback for dev (not production-safe)
const memoryStore = new Map<string, { count: number; resetAt: number }>();

function getUpstashRatelimit(): Ratelimit | null {
  if (ratelimitInstance) return ratelimitInstance;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  ratelimitInstance = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(10, "1 m"),
    analytics: true,
  });
  return ratelimitInstance;
}

export async function checkRateLimit(
  req: NextRequest,
  options: { maxRequests?: number; windowMs?: number } = {}
): Promise<{ success: boolean; response?: NextResponse }> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const upstash = getUpstashRatelimit();

  if (upstash) {
    const result = await upstash.limit(ip);
    if (!result.success) {
      return {
        success: false,
        response: NextResponse.json(
          { error: "Too many requests. Please try again later.", code: "RATE_LIMIT" },
          {
            status: 429,
            headers: {
              "Retry-After": String(Math.ceil(result.reset / 1000 - Date.now() / 1000)),
            },
          }
        ),
      };
    }
    return { success: true };
  }

  // In-memory fallback for local dev
  const maxReq = options.maxRequests ?? 10;
  const windowMs = options.windowMs ?? 60_000;
  const now = Date.now();
  const key = ip;
  const entry = memoryStore.get(key);

  if (!entry || now > entry.resetAt) {
    memoryStore.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true };
  }

  entry.count++;
  if (entry.count > maxReq) {
    return {
      success: false,
      response: NextResponse.json(
        { error: "Too many requests. Please try again later.", code: "RATE_LIMIT" },
        { status: 429 }
      ),
    };
  }

  return { success: true };
}
