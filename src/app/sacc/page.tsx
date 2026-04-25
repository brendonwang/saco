"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Terminal from "./terminal";
import Navbar from "@/components/navbar";

const SACC_STATS = [
  { label: "Prize Pool", value: "$500" },
  { label: "Duration", value: "3 HR" },
  { label: "Team Size", value: "3" },
  { label: "Problems", value: "8" },
] as const;

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="group flex flex-col items-center justify-center border border-[#1E293B] bg-[#14161C] p-6 text-center transition-colors hover:border-[#00F0FF]/50 sm:p-8">
      <div className="mb-2 font-sacc-mono text-xs uppercase tracking-widest text-[#64748B] sm:text-sm">
        {label}
      </div>
      <div className="font-sacc-mono text-3xl font-bold text-[#00F0FF] transition-colors [text-shadow:0_0_10px_rgba(0,240,255,0.5)] group-hover:text-[#00FFA3] sm:text-4xl md:text-[48px]">
        {value}
      </div>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: "Who can participate?",
    a: "Any pre-college student may participate. You don't need prior competitive programming experience — beginners are welcome.",
  },
  {
    q: "How are teams formed?",
    a: "Teams of three. You can register with a pre-formed team or sign up individually and we'll match you with others.",
  },
  {
    q: "What languages are allowed?",
    a: "C++, Java, and Python. Solutions are graded by an automated judge — partial credit is not awarded.",
  },
  {
    q: "Is the contest in-person or online?",
    a: "SACC 2026 is fully in-person in Seattle. We'll announce the exact venue closer to the event date.",
  },
  {
    q: "Will food be provided?",
    a: "Yes. We'll provide a free pizza lunch for all contestants during the competition.",
  },
  {
    q: "What should I bring?",
    a: "A laptop and a charger. Internet access is provided.",
  },
] as const;

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1E293B]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="touch-manipulation flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#00F0FF] sm:min-h-0 sm:py-5"
      >
        <span className="font-sacc-mono text-sm font-bold uppercase tracking-wider text-[#F1F5F9]">
          {q}
        </span>
        <ChevronDown
          className="shrink-0 text-[#00F0FF] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-[#64748B]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6h16v12H4z" />
      <path d="m8 10 2 2-2 2M12 14h4" strokeLinecap="square" />
    </svg>
  );
}

export default function SaccPage() {
  return (
    <>
      <Navbar activePath="/sacc" />

      <main className="flex flex-grow flex-col items-center pt-page">
        <section className="relative flex min-h-[min(100dvh,48rem)] w-full max-w-[1200px] flex-col items-center justify-center px-4 py-16 text-center sm:px-8 sm:py-24 md:min-h-[819px]">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-20">
            <div className="h-[800px] w-[800px] rounded-full bg-[#00F0FF]/20 blur-[120px]" />
          </div>

          <div className="z-10 flex w-full flex-col items-center gap-8">
            <div className="space-y-4">
              <h1 className="font-sacc-mono bg-gradient-to-r from-[#00F0FF] to-teal-400 bg-clip-text text-4xl font-bold leading-none text-transparent [text-shadow:0_0_10px_rgba(0,240,255,0.5)] sm:text-6xl md:text-7xl lg:text-[96px]">
                SACC_2026
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#64748B] sm:text-lg md:text-2xl">
                Compete in teams of three against top pre-college programmers
                in the Pacific Northwest. Solve real algorithmic challenges,
                win $500, and prove your skills.
              </p>
            </div>

            <Terminal />

            <button
              type="button"
              className="touch-manipulation flex min-h-12 w-full max-w-sm items-center justify-center gap-3 bg-[#00F0FF] px-6 py-4 font-sacc-mono text-base font-bold uppercase tracking-widest text-[#0A0B0E] transition-all hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] active:scale-[0.98] sm:min-h-0 sm:w-auto sm:max-w-none sm:px-8 sm:text-lg"
            >
              <TerminalIcon className="h-6 w-6 shrink-0" />
              Register Now
            </button>
          </div>
        </section>

        <section className="z-10 w-full max-w-[1200px] px-4 pb-16 sm:px-8 sm:pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SACC_STATS.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </section>

        <section className="w-full max-w-[1200px] px-4 pb-20 sm:px-8 sm:pb-32">
          <div className="mb-10 flex flex-col items-start">
            <span className="mb-3 font-sacc-mono text-[10px] uppercase tracking-[0.4em] text-[#00FFA3]">
              Intel
            </span>
            <h2 className="font-sacc-mono text-3xl font-bold uppercase tracking-tight text-[#F1F5F9]">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 h-1 w-16 bg-[#00F0FF]" />
          </div>
          <div className="border-t border-[#1E293B]">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
