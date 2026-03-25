"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SACC", href: "/sacc" },
  { label: "ABOUT US", href: "/about" },
] as const;

function navLinkClass(active: boolean) {
  return active
    ? "relative inline-flex items-center justify-center pb-2 font-bold uppercase tracking-[0.2em] text-[12px] text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
    : "inline-flex items-center justify-center uppercase tracking-[0.2em] text-[12px] text-slate-500 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200";
}

export default function Navbar({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* ── Header bar ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b-[0.5px] border-cyan-900/50 bg-[#0A0B0E] pt-[env(safe-area-inset-top)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-8">
          <div className="min-w-0 justify-self-start font-headline text-xl font-black tracking-tighter sm:text-2xl">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/SACO Logo.svg"
                alt="SACO Logo"
                width={32}
                height={32}
                className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
                priority
              />
              <span>SACO</span>
            </Link>
          </div>

          <nav
            className="hidden items-center justify-self-center gap-8 md:flex"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = href === activePath;
              return (
                <Link
                  key={label}
                  href={href}
                  className={navLinkClass(active)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end md:justify-self-end">
            <button
              type="button"
              className="touch-manipulation flex h-11 w-11 items-center justify-center rounded border border-cyan-900/60 text-cyan-300 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (sibling, not child/portal) ── */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" aria-hidden="false">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            role="button"
            tabIndex={-1}
            aria-label="Close menu"
          />
          <div
            id={panelId}
            className="absolute inset-y-0 right-0 flex w-[min(100vw,20rem)] flex-col border-l border-cyan-900/50 bg-[#0A0B0E] pb-[env(safe-area-inset-bottom)] pt-[calc(3.5rem+env(safe-area-inset-top))] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav
              className="flex flex-col gap-1 px-6 pt-4"
              aria-label="Mobile main"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = href === activePath;
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`touch-manipulation flex min-h-12 items-center justify-start border-b border-cyan-900/30 py-3 font-headline text-sm uppercase tracking-widest ${
                      active
                        ? "font-bold text-cyan-400"
                        : "text-slate-400 hover:text-cyan-200"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
