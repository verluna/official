import { ImageResponse } from "next/og";

export const alt = "Verluna: Agent Operations for European Enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="#1a1a1d" />
            <path
              d="M8 9 L16 24 L24 9"
              fill="none"
              stroke="#d9633b"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ color: "#f2f1ee", fontSize: 34, fontWeight: 600, letterSpacing: "0.16em" }}>
            VERLUNA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f2f1ee",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Companies will run on agents.
          </div>
          <div
            style={{
              color: "#d9633b",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              marginTop: 6,
            }}
          >
            We make yours run well.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#9c9ca3", fontSize: 28 }}>
            Agent operations for European enterprises
          </div>
          <div style={{ color: "#6e6e75", fontSize: 28 }}>verluna.de</div>
        </div>
      </div>
    ),
    size
  );
}
