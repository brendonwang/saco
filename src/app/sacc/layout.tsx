import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sacc-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sacc-mono",
});

export const metadata: Metadata = {
  title: "SACC_2026 - Tech Noir",
  description:
    "Seattle's premier competitive programming contest. High stakes, intense technical competition.",
};

export default function SaccLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sacc-display min-h-screen flex flex-col bg-[#0A0B0E] text-[#F1F5F9]`}
    >
      {children}
    </div>
  );
}
