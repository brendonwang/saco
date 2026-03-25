import Link from "next/link";

const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SACC", href: "/sacc" },
  { label: "ABOUT US", href: "/about" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 bg-[#050608]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="font-headline text-xl font-black tracking-tighter text-emerald-300">
            SACO
          </div>
          <p className="font-body text-sm leading-relaxed text-slate-400">
            Seattle Area Coding Organization. Student-run competitive
            programming for high school coders across the Pacific Northwest.
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
              <Link
                href="/sacc"
                className="inline-flex items-center justify-center border border-emerald-400/40 px-4 py-2 font-headline text-[11px] uppercase tracking-widest text-emerald-300 transition-all hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                View SACC 2026
              </Link>
              <a
                href="https://discord.gg/s767nmxmg4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-primary/40 px-4 py-2 font-headline text-[11px] uppercase tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/10"
              >
                Join Our Discord
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-label text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Contact
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-slate-700 px-4 py-2 font-headline text-[11px] uppercase tracking-widest text-slate-300 transition-all hover:border-primary/50 hover:text-primary"
            >
              About the team
            </Link>
          </div>
        </div>
      </div>

      <div className="px-8 pb-4">
        <div className="mx-auto flex w-full max-w-7xl justify-center">
          <div className="font-headline text-[10px] font-bold uppercase tracking-widest text-emerald-400/70">
            © 2026 SACO
          </div>
        </div>
      </div>
    </footer>
  );
}
