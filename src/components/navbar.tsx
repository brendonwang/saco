import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SACC", href: "/sacc" },
  { label: "ABOUT US", href: "/about" },
] as const;

export default function Navbar({ activePath }: { activePath: string }) {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b-[0.5px] border-cyan-900/50 bg-[#0A0B0E]/90 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8 py-4">
        <div className="justify-self-start font-headline text-2xl font-black tracking-tighter">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/SACO Logo.svg"
              alt="SACO Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
            <span>SACO</span>
          </Link>
        </div>
        <nav className="hidden items-center justify-self-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === activePath;
            const Tag = href.startsWith("/") ? Link : "a";
            return (
              <Tag
                key={label}
                href={href}
                className={
                  active
                    ? "relative inline-flex items-center justify-center pb-2 font-bold uppercase tracking-[0.2em] text-[12px] text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
                    : "inline-flex items-center justify-center uppercase tracking-[0.2em] text-[12px] text-slate-500 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                }
              >
                {label}
              </Tag>
            );
          })}
        </nav>
        <div className="flex items-center justify-self-end gap-4">
          <a
            href="https://discord.gg/s767nmxmg4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-primary/40 px-6 py-2 font-headline text-[11px] uppercase tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            Join Our Discord
          </a>
        </div>
      </div>
    </header>
  );
}
