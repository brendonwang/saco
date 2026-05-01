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

const SACC_SCHEDULE = [
  { time: "9:30am - 10:00am", event: "Arrival and check-in" },
  {
    time: "10:00am - 11:30am",
    event: "Set-up, opening ceremony, practice round, etc",
  },
  { time: "11:30am - 12:30pm", event: "Lunch (provided)" },
  { time: "12:30pm - 3:30pm", event: "Contest time" },
  { time: "3:30pm - 4:00pm", event: "Awards ceremony" },
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
    q: "What are the prizes?",
    a: "First place gets $40, second place gets $20, and third place gets $10.",
  },
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
    q: "Can I use AI tools during the contest?",
    a: "No. Use of AI coding assistants, large language models, and other external code-generation tools is not allowed during the competition.",
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

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScdr-aDxrZaHumGMvKSUixdmFY9L9Hor2aEvaHHa-31qWTYFw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="touch-manipulation flex min-h-12 w-full max-w-sm items-center justify-center gap-3 bg-[#00F0FF] px-6 py-4 font-sacc-mono text-base font-bold uppercase tracking-widest text-[#0A0B0E] shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] sm:min-h-0 sm:w-auto sm:max-w-none sm:px-8 sm:text-lg"
            >
              <TerminalIcon className="h-6 w-6 shrink-0" />
              Register Now
            </a>
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
              Timeline
            </span>
            <h2 className="font-sacc-mono text-3xl font-bold uppercase tracking-tight text-[#F1F5F9]">
              Event Schedule
            </h2>
            <div className="mt-4 h-1 w-16 bg-[#00F0FF]" />
          </div>

          <div className="relative overflow-hidden border border-[#00F0FF]/40 bg-[#0D0F14] shadow-[0_0_30px_rgba(0,240,255,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(0,255,163,0.12),transparent_30%),radial-gradient(circle_at_82%_55%,rgba(0,240,255,0.12),transparent_34%)]" />
            <div className="relative overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  SACC 2026 event schedule
                </caption>
                <thead>
                  <tr className="border-b border-[#00F0FF]/40 bg-[#00F0FF]/10">
                    <th
                      scope="col"
                      className="w-5/12 border-r border-[#00F0FF]/40 px-6 py-5 text-center font-sacc-mono text-sm font-bold uppercase tracking-[0.25em] text-[#F1F5F9] sm:px-8 sm:py-7"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-5 text-center font-sacc-mono text-sm font-bold uppercase tracking-[0.25em] text-[#F1F5F9] sm:px-8 sm:py-7"
                    >
                      Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SACC_SCHEDULE.map((item) => (
                    <tr
                      key={item.time}
                      className="border-b border-[#00F0FF]/30 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="border-r border-[#00F0FF]/30 px-6 py-6 text-center font-sacc-display text-lg font-medium text-[#F1F5F9] sm:px-8 sm:py-8 sm:text-2xl"
                      >
                        {item.time}
                      </th>
                      <td className="px-6 py-6 text-center font-sacc-display text-lg leading-relaxed text-[#F1F5F9] sm:px-8 sm:py-8 sm:text-2xl">
                        {item.event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
