import { ImageResponse } from "next/og";

export const alt = "Seattle Area Coding Organization";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0B0E",
          color: "#F1F5F9",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#00FFA3",
            fontSize: 32,
            letterSpacing: 0,
            textTransform: "uppercase",
          }}
        >
          <span>SACO</span>
          <span style={{ color: "#334155" }}>{"//"}</span>
          <span>Seattle Area Coding Organization</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            Competitive Programming For The Pacific Northwest
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "900px",
              color: "#94A3B8",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            Student-run contests, workshops, and community for pre-college
            coders.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #1E293B",
            paddingTop: "28px",
            color: "#00F0FF",
            fontSize: 28,
            letterSpacing: 0,
            textTransform: "uppercase",
          }}
        >
          <span>Seattle, WA</span>
          <span>SACC 2026</span>
        </div>
      </div>
    ),
    size,
  );
}
