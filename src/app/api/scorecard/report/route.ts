import { NextRequest, NextResponse } from "next/server";
import { verifyScorecardToken } from "@/lib/tokens";
import { TIERS, CATEGORIES, type ScorecardTier } from "@/lib/scorecard-data";

// Generate a PDF-style HTML report that the browser can print to PDF.
// We return HTML with print-optimized CSS. The email links here,
// and the user can use their browser's "Save as PDF" or we can
// upgrade to @react-pdf/renderer later if needed.

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Missing token", code: "MISSING_TOKEN" },
      { status: 400 }
    );
  }

  const payload = await verifyScorecardToken(token);

  if (!payload) {
    return NextResponse.json(
      { error: "Invalid or expired token", code: "INVALID_TOKEN" },
      { status: 401 }
    );
  }

  const tier = TIERS[payload.tier as ScorecardTier];
  if (!tier) {
    return NextResponse.json(
      { error: "Invalid tier", code: "INVALID_TIER" },
      { status: 400 }
    );
  }

  const tierColor =
    tier.color === "green"
      ? "#00FF94"
      : tier.color === "blue"
        ? "#3B82F6"
        : "#7C3AED";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agent Readiness Scorecard Report - Verluna</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: #050505;
      color: #EDEDED;
      min-height: 100vh;
      padding: 48px;
    }

    @media print {
      body { background: white; color: #111; padding: 24px; }
      .no-print { display: none; }
      .card { border-color: #ddd !important; background: #f9f9f9 !important; }
      .tier-badge { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }

    .container { max-width: 800px; margin: 0 auto; }

    .header {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid #262626;
    }

    .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: #A1A1AA;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .score-display {
      font-family: 'JetBrains Mono', monospace;
      font-size: 96px;
      font-weight: 700;
      color: ${tierColor};
      line-height: 1;
      margin-bottom: 8px;
    }

    .score-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      color: #A1A1AA;
    }

    .tier-badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      background: ${tierColor}15;
      color: ${tierColor};
      border: 1px solid ${tierColor}30;
      margin-top: 16px;
    }

    .section { margin-bottom: 40px; }

    .section-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: #A1A1AA;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #262626;
    }

    .description {
      font-size: 16px;
      line-height: 1.7;
      color: #A1A1AA;
      margin-bottom: 32px;
    }

    .card {
      background: #111111;
      border: 1px solid #262626;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 16px;
    }

    .category-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #1a1a1a;
    }

    .category-row:last-child { border-bottom: none; }

    .category-name {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: #A1A1AA;
    }

    .category-bar-container {
      flex: 1;
      margin: 0 24px;
      height: 6px;
      background: #1a1a1a;
      border-radius: 3px;
      overflow: hidden;
    }

    .category-bar {
      height: 100%;
      background: ${tierColor};
      border-radius: 3px;
      transition: width 1s ease;
    }

    .category-score {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: ${tierColor};
      min-width: 48px;
      text-align: right;
    }

    .recommendation {
      padding: 16px 16px 16px 20px;
      border-left: 3px solid ${tierColor};
      margin-bottom: 16px;
      background: #111111;
      border-radius: 0 8px 8px 0;
    }

    .recommendation-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: ${tierColor};
      margin-bottom: 4px;
    }

    .recommendation-text {
      font-size: 15px;
      line-height: 1.6;
      color: #A1A1AA;
    }

    .cta-section {
      text-align: center;
      padding: 40px;
      background: #111111;
      border: 1px solid #262626;
      border-radius: 12px;
      margin-top: 48px;
    }

    .cta-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .cta-button {
      display: inline-block;
      padding: 14px 40px;
      background: ${tierColor};
      color: #050505;
      font-weight: 700;
      font-size: 16px;
      text-decoration: none;
      border-radius: 8px;
      margin-top: 16px;
      font-family: 'JetBrains Mono', monospace;
    }

    .footer {
      text-align: center;
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid #262626;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #52525b;
    }

    .print-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
      padding: 12px 24px;
      background: ${tierColor};
      color: #050505;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Verluna // Agent Readiness Report</div>
      <div class="score-display">${payload.score}</div>
      <div class="score-label">out of 100</div>
      <div class="tier-badge">${tier.label}</div>
    </div>

    <div class="section">
      <div class="section-title">Assessment Summary</div>
      <p class="description">${tier.description}</p>
    </div>

    <div class="section">
      <div class="section-title">Category Breakdown</div>
      <div class="card">
        ${CATEGORIES.map(
          (cat) => `
          <div class="category-row">
            <span class="category-name">${cat.label}</span>
            <div class="category-bar-container">
              <div class="category-bar" style="width: ${Math.round((payload.score / 100) * 100)}%"></div>
            </div>
            <span class="category-score">${Math.round((payload.score / 100) * cat.maxPoints)}/${cat.maxPoints}</span>
          </div>`
        ).join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Recommendations</div>
      ${tier.recommendations
        .map(
          (r, i) => `
        <div class="recommendation">
          <div class="recommendation-number">Recommendation ${i + 1}</div>
          <div class="recommendation-text">${r}</div>
        </div>`
        )
        .join("")}
    </div>

    <div class="cta-section no-print">
      <div class="cta-title">${tier.cta.label}</div>
      <p class="description" style="margin-bottom: 0;">
        ${payload.score >= 67
          ? "Your organization is ready for a full agent architecture assessment."
          : payload.score >= 34
            ? "Let us help you identify and implement your highest-impact automation wins."
            : "Start with a foundation assessment to map your path to automation readiness."}
      </p>
      <a href="${tier.cta.href}" class="cta-button">${tier.cta.label}</a>
    </div>

    <div class="footer">
      <p>Verluna | Agent Operations for European Enterprises | Berlin, DE</p>
      <p style="margin-top: 8px;">Generated ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
    </div>
  </div>

  <button class="print-button no-print" onclick="window.print()">Save as PDF</button>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}
