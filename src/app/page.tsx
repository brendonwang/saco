import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";

const AURORA_RIBBONS = [
  {
    gradient:
      "linear-gradient(90deg, transparent 5%, rgba(0,240,255,0.10) 20%, rgba(0,240,255,0.28) 42%, rgba(0,255,163,0.14) 62%, rgba(0,240,255,0.06) 82%, transparent 95%)",
    top: "2%",
    left: "-20%",
    width: "140%",
    height: "350px",
    blur: "38px",
  },
  {
    gradient:
      "linear-gradient(90deg, transparent 5%, rgba(0,255,163,0.07) 22%, rgba(0,255,163,0.22) 44%, rgba(0,240,255,0.12) 64%, rgba(0,255,163,0.05) 84%, transparent 95%)",
    top: "28%",
    left: "-15%",
    width: "130%",
    height: "300px",
    blur: "42px",
  },
] as const;

const GLOW_SOURCES = [
  {
    left: "30%",
    top: "12%",
    size: "700px",
    color: "rgba(0, 240, 255, 0.20)",
    blur: "50px",
    opacity: 0.42,
  },
  {
    left: "65%",
    top: "8%",
    size: "600px",
    color: "rgba(0, 255, 163, 0.16)",
    blur: "55px",
    opacity: 0.38,
  },
  {
    left: "15%",
    top: "50%",
    size: "450px",
    color: "rgba(255, 51, 102, 0.08)",
    blur: "60px",
    opacity: 0.22,
  },
] as const;

const SPARKS = Array.from({ length: 18 }, (_, i) => {
  const colors = ["#b9fbff", "#c4ffe8", "#f8fbff"] as const;
  const isBright = i % 5 === 0;
  const isMedium = i % 3 === 0 && !isBright;
  return {
    x: 5 + ((i * 23) % 90),
    y: 6 + ((i * 31) % 75),
    size: isBright ? 5 : isMedium ? 3.5 : 2,
    color: colors[i % 3],
    glow: isBright
      ? "0 0 16px rgba(0,240,255,0.8), 0 0 36px rgba(0,240,255,0.35)"
      : isMedium
        ? "0 0 10px rgba(0,255,163,0.7), 0 0 24px rgba(0,255,163,0.3)"
        : "0 0 6px rgba(148,163,184,0.5)",
    opacity: isBright ? 0.72 : isMedium ? 0.48 : 0.32,
  };
});

const EVENT_IMAGES = {
  sacc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfIeVZPJfPBwS2reFZwf3WP66mofEmxuRDC39GgkHxXHL8fXa_aJspZMim9dnxuKaqWDgFuMYuvbfdBUx7Bu1ung6PYD6mxVBW55Y2bXBTUYY0zbH0CF3iIldJ4jnwrbt9Gp9ites7MYiINWfPer3XZ9Dhkyidhxy1Mkk27N6JXJqTZ-_Z-g3X-cbWdXfytRjpaW5QV8120MuNHRIv31YBk3p5Gu7LFGCURTLyieOOO1WL_t2xPF2oI9b2UZAXvAB_IcpYvizI22M",
  hackNight:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJCHr5lPcVVL0EfWLtHl94CjPyQWWlaGK_krPARy6wUvFF1zH2NlnIGXi11YtllMk19nrCgFbhFMO5ppnYgcIZb6VADtnne0zDWP8uO7KDopIbfb9Q-umgF2fxVCFGPOumhDu2vhw5x_5orYNP0AVzr1L2-2rbQ4k7iC69YFbpZdhBlqgYSMkv0tqknxzjPgiT-DqaT8DEm3ajcojNfAiYHX3m-NDpEodGkThLS4nSEJgW0piMjYj9agFHo1X-86ilosdBC8THas",
} as const;

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
      <div className="relative p-5 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span
            className={`border px-2 py-0.5 font-label text-[10px] uppercase tracking-widest ${colors.badge}`}
          >
            {event.badge}
          </span>
          <span className="font-label text-[10px] text-on-surface-variant">
            {event.date}
          </span>
        </div>
        <h3 className="mb-4 font-headline text-2xl font-bold uppercase tracking-tighter text-on-surface transition-colors group-hover:text-primary sm:text-3xl">
          {event.title}
        </h3>
        <p className="mb-6 font-body text-sm font-light leading-relaxed text-on-surface-variant sm:mb-8 sm:text-base">
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

function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {GLOW_SOURCES.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={
            {
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              backgroundColor: orb.color,
              filter: `blur(${orb.blur})`,
              opacity: orb.opacity,
            } satisfies CSSProperties
          }
        />
      ))}

      {AURORA_RIBBONS.map((ribbon, i) => (
        <div
          key={`ribbon-${i}`}
          className="absolute"
          style={
            {
              background: ribbon.gradient,
              top: ribbon.top,
              left: ribbon.left,
              width: ribbon.width,
              height: ribbon.height,
              filter: `blur(${ribbon.blur})`,
            } satisfies CSSProperties
          }
        />
      ))}

      <div className="backdrop-grid absolute inset-0" />

      {SPARKS.map((spark, i) => (
        <span
          key={`spark-${i}`}
          className="absolute rounded-full"
          style={
            {
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: spark.glow,
              opacity: spark.opacity,
              transform: "translate(-50%, -50%)",
            } satisfies CSSProperties
          }
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10,11,14,0.12)_40%,rgba(10,11,14,0.65)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_0%,rgba(10,11,14,0.06)_45%,rgba(10,11,14,0.42)_100%)]" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar activePath="/" />

      <main className="relative overflow-x-hidden pt-page">
        <HeroBackdrop />

        <section className="relative flex min-h-[min(100dvh,52rem)] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:min-h-[870px]">
          <div className="z-10 max-w-5xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary bg-clip-text font-headline text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-transparent text-glow sm:text-5xl md:text-7xl lg:text-[8rem]">
              Seattle Area Coding Organization
            </h1>
            <div className="mb-6 font-label text-xs uppercase tracking-[0.35em] text-primary/80 sm:text-sm sm:tracking-[0.4em]">
              BUILT BY STUDENTS, FOR STUDENTS
            </div>
            <p className="mx-auto mb-10 max-w-3xl font-body text-base font-light leading-relaxed text-on-surface-variant sm:text-lg md:mb-12 md:text-2xl">
              A student-run community dedicated to{" "}
              <span className="font-medium text-on-surface">
                competitive programming
              </span>
              , algorithmic thinking, and connecting pre-college coders across
              the Pacific Northwest.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-4 touch-manipulation sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6">
              <Link
                href="/sacc"
                className="flex min-h-12 w-full items-center justify-center bg-secondary px-8 py-4 font-headline text-base font-bold uppercase tracking-widest text-on-secondary transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-[0.98] sm:min-h-0 sm:px-10 sm:py-5 sm:text-lg md:w-auto"
              >
                View Upcoming Contests
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl border-t border-outline-variant/30 px-4 py-16 sm:px-8 sm:py-24 md:py-32">
          <div className="mb-10 flex items-center justify-between sm:mb-16">
            <div className="flex flex-col">
              <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-glow sm:text-4xl">
                Upcoming Events
              </h2>
              <div className="mt-4 h-1 w-24 bg-primary" />
            </div>
            <div className="hidden font-label text-[12px] uppercase tracking-widest text-on-surface-variant md:block">
              Updating schedule...
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {EVENTS.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-outline-variant bg-surface-container-high py-16 sm:py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8">
            <span className="mb-6 block font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
              Ready for Execution?
            </span>
            <h2 className="mb-8 font-headline text-3xl font-extrabold uppercase tracking-tighter text-glow sm:mb-10 sm:text-4xl md:text-6xl lg:text-7xl">
              SACC_2026: INITIALIZE REGISTRATION
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-body text-base font-light leading-relaxed text-on-surface-variant sm:mb-12 sm:text-lg md:text-xl">
              Battle the Pacific Northwest&apos;s elite algorithmic talent.
              Secure your terminal for the flagship 3-hour competitive
              programming event of the season. Systems ready.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/sacc"
                className="touch-manipulation flex min-h-12 w-full items-center justify-center bg-primary px-10 py-4 font-headline text-base font-bold uppercase tracking-widest text-on-primary shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:brightness-110 sm:min-h-0 sm:w-auto sm:px-12 sm:py-5 sm:text-lg"
              >
                More Details
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
