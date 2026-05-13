import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

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

export const metadata = createPageMetadata({
  title: "SACC 2026",
  description:
    "Register for SACC 2026, a 3-hour in-person competitive programming contest for pre-college students in Seattle.",
  path: "/sacc",
});

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
