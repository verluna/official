import { NextRequest, NextResponse } from "next/server";
import { scorecardSubmitSchema } from "@/lib/validation";
import { calculateScores, QUESTIONS } from "@/lib/scorecard-data";
import { upsertScorecardContact } from "@/lib/hubspot";
import { createScorecardToken } from "@/lib/tokens";
import {
  sendScorecardResultsEmail,
  sendScorecardNotification,
} from "@/lib/emails";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const startMs = Date.now();

  // Rate limit: 10 submissions / hour per IP
  const rl = await checkRateLimit(request, {
    maxRequests: 10,
    windowMs: 3_600_000,
  });
  if (!rl.success) return rl.response!;

  try {
    const body = await request.json();
    const parsed = scorecardSubmitSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Invalid input",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { answers, email, firstName, companyName, role, newsletterOptIn } =
      parsed.data;

    // Validate that all 12 questions are answered
    const questionIds = QUESTIONS.map((q) => q.id);
    const missingQuestions = questionIds.filter(
      (id) => answers[id] === undefined
    );
    if (missingQuestions.length > 0) {
      return NextResponse.json(
        {
          error: `Missing answers for: ${missingQuestions.join(", ")}`,
          code: "INCOMPLETE_ANSWERS",
        },
        { status: 400 }
      );
    }

    // Calculate scores
    const result = calculateScores(answers);

    // Generate report token (JWT, 24h TTL)
    const token = await createScorecardToken({
      email,
      score: result.normalizedScore,
      tier: result.tier,
    });

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://verluna.de";
    const reportUrl = `${baseUrl}/api/scorecard/report?token=${token}`;

    // Fire-and-forget: HubSpot, emails, notification
    const hubspotPromise = upsertScorecardContact({
      email,
      firstName,
      companyName,
      role,
      scorecardScore: result.normalizedScore,
      scorecardTier: result.tier,
      newsletterOptIn,
    });

    const resultsEmailPromise = sendScorecardResultsEmail(
      email,
      firstName,
      result,
      reportUrl
    );

    const notificationPromise = sendScorecardNotification({
      email,
      firstName,
      companyName,
      role,
      score: result.normalizedScore,
      tier: result.tierInfo.label,
      newsletterOptIn,
    });

    // Run in parallel, do not block response
    Promise.allSettled([
      hubspotPromise,
      resultsEmailPromise,
      notificationPromise,
    ]).then((results) => {
      console.log(
        JSON.stringify({
          route: "scorecard/submit",
          event: "side_effects",
          email,
          score: result.normalizedScore,
          tier: result.tier,
          hubspot: results[0].status,
          resultsEmail: results[1].status,
          notification: results[2].status,
          durationMs: Date.now() - startMs,
        })
      );
    });

    return NextResponse.json({
      success: true,
      data: {
        score: result.normalizedScore,
        rawScore: result.rawScore,
        tier: result.tier,
        tierLabel: result.tierInfo.label,
        tierDescription: result.tierInfo.description,
        tierColor: result.tierInfo.color,
        categoryScores: result.categoryScores,
        recommendations: result.tierInfo.recommendations,
        cta: result.tierInfo.cta,
        reportUrl,
      },
    });
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "scorecard/submit",
        event: "error",
        error: err instanceof Error ? err.message : String(err),
        durationMs: Date.now() - startMs,
      })
    );
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again.", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
