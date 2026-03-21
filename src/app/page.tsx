import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";

const EVENT_IMAGES = {
  sacc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfIeVZPJfPBwS2reFZwf3WP66mofEmxuRDC39GgkHxXHL8fXa_aJspZMim9dnxuKaqWDgFuMYuvbfdBUx7Bu1ung6PYD6mxVBW55Y2bXBTUYY0zbH0CF3iIldJ4jnwrbt9Gp9ites7MYiINWfPer3XZ9Dhkyidhxy1Mkk27N6JXJqTZ-_Z-g3X-cbWdXfytRjpaW5QV8120MuNHRIv31YBk3p5Gu7LFGCURTLyieOOO1WL_t2xPF2oI9b2UZAXvAB_IcpYvizI22M",
  hackNight:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJCHr5lPcVVL0EfWLtHl94CjPyQWWlaGK_krPARy6wUvFF1zH2NlnIGXi11YtllMk19nrCgFbhFMO5ppnYgcIZb6VADtnne0zDWP8uO7KDopIbfb9Q-umgF2fxVCFGPOumhDu2vhw5x_5orYNP0AVzr1L2-2rbQ4k7iC69YFbpZdhBlqgYSMkv0tqknxzjPgiT-DqaT8DEm3ajcojNfAiYHX3m-NDpEodGkThLS4nSEJgW0piMjYj9agFHo1X-86ilosdBC8THas",
} as const;

const FOOTER_LINKS = [
  { label: "STATUS:ONLINE", highlight: true },
  { label: "SECURE_CONNECTION" },
  { label: "COMMUNITY_HUB" },
  { label: "DATA_GUIDELINES" },
] as const;

const EVENTS = [
  {
    image: EVENT_IMAGES.sacc,
    imageAlt: "Dark coding terminal with neon highlights",
    badge: "FEATURED EVENT",
    badgeColor: "secondary" as const,
    date: "MAY 23, 2026",
    title: "SACC 2026",
    description:
      "The Seattle Area Computing Competition is a 4-hour algorithmic battle for competitors. It is a regional contest that brings together competitors from across the Pacific Northwest.",
    cta: "View Details",
    href: "/sacc",
  },
] as const;

function EventCard({
  event,
}: {
  event: (typeof EVENTS)[number];
}) {
  const colorMap = {
    secondary: {
      dot: "bg-secondary",
      dotMid: "bg-secondary/40",
      dotDim: "bg-secondary/20",
      badge: "border-secondary/30 text-secondary",
    },
    primary: {
      dot: "bg-primary",
      dotMid: "bg-primary/40",
      dotDim: "bg-primary/20",
      badge: "border-primary/30 text-primary",
    },
  } as const;
  const colors = colorMap[event.badgeColor];

  return (
    <article className="group relative overflow-hidden border border-outline-variant bg-surface-container transition-all duration-500 hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="scale-105 object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-100 group-hover:opacity-60 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
        <div className="absolute right-4 top-4 flex gap-1">
          <span className={`h-2 w-2 ${colors.dot}`} />
          <span className={`h-2 w-2 ${colors.dotMid}`} />
          <span className={`h-2 w-2 ${colors.dotDim}`} />
        </div>
      </div>
      <div className="relative p-8">
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`border px-2 py-0.5 font-label text-[10px] uppercase tracking-widest ${colors.badge}`}
          >
            {event.badge}
          </span>
          <span className="font-label text-[10px] text-on-surface-variant">
            {event.date}
          </span>
        </div>
        <h3 className="mb-4 font-headline text-3xl font-bold uppercase tracking-tighter text-on-surface transition-colors group-hover:text-primary">
          {event.title}
        </h3>
        <p className="mb-8 font-body font-light leading-relaxed text-on-surface-variant">
          {event.description}
        </p>
        <Link
          href={event.href}
          className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary transition-all group-hover:gap-4"
        >
          {event.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Navbar activePath="/" />

      <main className="pt-24">
        <section className="relative flex min-h-[870px] flex-col items-center justify-center overflow-hidden px-6">
          <div className="z-10 max-w-5xl text-center">
            <h1 className="mb-8 bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary bg-clip-text font-headline text-[5rem] font-extrabold uppercase leading-[0.9] tracking-tighter text-transparent text-glow md:text-[8rem]">
              Seattle Area Coding Organization
            </h1>
            <div className="mb-8 font-label text-sm uppercase tracking-[0.4em] text-primary/80">
              BUILT BY STUDENTS, FOR STUDENTS
            </div>
            <p className="mx-auto mb-12 max-w-3xl font-body text-xl font-light leading-relaxed text-on-surface-variant md:text-2xl">
              A student-run community dedicated to{" "}
              <span className="font-medium text-on-surface">
                competitive programming
              </span>
              , algorithmic thinking, and connecting high school coders across
              the Pacific Northwest.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <button
                type="button"
                className="w-full bg-secondary px-10 py-5 font-headline text-lg font-bold uppercase tracking-widest text-on-secondary transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-[0.98] md:w-auto"
              >
                View Upcoming Contests
              </button>
              <button
                type="button"
                className="w-full border-2 border-outline-variant bg-surface-container/50 px-10 py-5 font-headline text-lg font-bold uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:bg-surface-container-high active:scale-[0.98] md:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-outline-variant/30 px-8 py-32">
          <div className="mb-16 flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-glow">
                Upcoming Events
              </h2>
              <div className="mt-4 h-1 w-24 bg-primary" />
            </div>
            <div className="hidden font-label text-[12px] uppercase tracking-widest text-on-surface-variant md:block">
              Updating schedule...
            </div>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {EVENTS.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-outline-variant bg-surface-container-high py-32">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
            <span className="mb-6 block font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
              Ready for Execution?
            </span>
            <h2 className="mb-10 font-headline text-5xl font-extrabold uppercase tracking-tighter text-glow md:text-7xl">
              SACC_2026: INITIALIZE REGISTRATION
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body text-xl font-light leading-relaxed text-on-surface-variant">
              Battle the Pacific Northwest&apos;s elite algorithmic talent.
              Secure your terminal for the flagship 4-hour competitive
              programming event of the season. Systems ready.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/sacc"
                className="w-full bg-primary px-12 py-5 font-headline text-lg font-bold uppercase tracking-widest text-on-primary shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:brightness-110 sm:w-auto"
              >
                More Details
              </Link>
              <button
                type="button"
                className="w-full border-2 border-primary px-12 py-5 font-headline text-lg font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary/10 sm:w-auto"
              >
                Contest Rules
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full flex-col items-center justify-between gap-4 border-t-[0.5px] border-emerald-900/30 bg-[#050608] px-12 py-8 md:flex-row">
        <div className="font-headline text-[10px] font-bold uppercase tracking-widest text-emerald-400">
          ©2025 SEATTLE_ALGORITHMS_ORG // MAIN_HUB
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map(({ label, ...rest }) => {
            const highlight = "highlight" in rest;
            return (
              <a
                key={label}
                href="#"
                className={`font-headline text-[10px] uppercase tracking-widest transition-colors hover:text-emerald-300 ${
                  highlight
                    ? "text-emerald-400 underline decoration-dotted"
                    : "text-slate-600"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 animate-ping rounded-full bg-emerald-400" />
          <span className="font-headline text-[10px] uppercase text-emerald-400/60">
            ONLINE
          </span>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-0 z-[100] opacity-10 terminal-scanline" />
    </>
  );
}
