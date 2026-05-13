import Link from "next/link";
import { ExternalButton, LinkButton } from "@/components/button";

const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SACC", href: "/sacc" },
  { label: "ABOUT US", href: "/about" },
  { label: "SPONSORS", href: "/sponsors" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 bg-[#050608] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-8 sm:py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="font-headline text-xl font-black tracking-tighter text-emerald-300">
            SACO
          </div>
          <p className="font-body text-sm leading-relaxed text-slate-400">
            Seattle Area Coding Organization. Student-run competitive
            programming for pre-college students across the Pacific Northwest.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
          <div>
            <div className="mb-3 font-label text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Quick Links
            </div>
            <div className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-headline text-[11px] uppercase tracking-widest text-slate-300 transition-colors hover:text-emerald-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 font-label text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Featured
            </div>
            <div className="flex flex-col gap-2">
              <LinkButton
                href="/sacc"
                size="footer"
                variant="outlineEmerald"
              >
                View SACC 2026
              </LinkButton>
              <ExternalButton
                href="https://discord.gg/s767nmxmg4"
                target="_blank"
                rel="noreferrer"
                size="footer"
                variant="outlinePrimary"
              >
                Join Our Discord
              </ExternalButton>
            </div>
          </div>

          <div>
            <div className="mb-3 font-label text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Contact
            </div>
            <LinkButton
              href="/about"
              size="footer"
              variant="outlineSlate"
            >
              About the team
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl justify-center">
          <div className="font-headline text-[10px] font-bold uppercase tracking-widest text-emerald-400/70">
            © 2026 SACO
          </div>
        </div>
      </div>
    </footer>
  );
}
