import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SACC", href: "/sacc" },
  { label: "ABOUT US", href: "/about" },
] as const;

export default function Navbar({ activePath }: { activePath: string }) {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-[0.5px] border-cyan-900/50 bg-[#0A0B0E]/90 px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="font-headline text-2xl font-black tracking-tighter">
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
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map(({ label, href }) => {
          const active = href === activePath;
          const Tag = href.startsWith("/") ? Link : "a";
          return (
            <Tag
              key={label}
              href={href}
              className={
                active
                  ? "border-b-2 border-cyan-400 pb-1 font-bold uppercase tracking-[0.2em] text-[12px] text-cyan-400"
                  : "uppercase tracking-[0.2em] text-[12px] text-slate-500 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200"
              }
            >
              {label}
            </Tag>
          );
        })}
      </nav>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="border border-primary px-6 py-2 uppercase tracking-[0.2em] text-[12px] text-primary transition-all hover:bg-primary/10 active:scale-[0.97]"
        >
          SIGN IN
        </button>
      </div>
    </header>
  );
}
