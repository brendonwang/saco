"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ q, a }: { q: string; a: string }) {
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
          <p className="pb-5 text-sm leading-relaxed text-[#64748B]">{a}</p>
        </div>
      </div>
    </div>
  );
}
