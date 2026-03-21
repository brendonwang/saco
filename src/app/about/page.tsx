import type { LucideIcon } from "lucide-react";
import { School, Trophy, Users } from "lucide-react";
import Navbar from "@/components/navbar";

const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "30+", label: "Partner Schools" },
  { value: "12", label: "Events Per Year" },
  { value: "3", label: "Years Running" },
] as const;

const PILLARS = [
  {
    icon: School,
    title: "Educate",
    body: "Free workshops, study groups, and curated problem sets for all skill levels — from first-time competitors to IOI hopefuls.",
  },
  {
    icon: Trophy,
    title: "Compete",
    body: "Host and organize regional contests that challenge students with real algorithmic problems under timed, competitive conditions.",
  },
  {
    icon: Users,
    title: "Connect",
    body: "Build a network of like-minded students, mentors, and industry professionals across the Pacific Northwest.",
  },
] as const satisfies ReadonlyArray<{
  icon: LucideIcon;
  title: string;
  body: string;
}>;

export default function AboutPage() {
  return (
    <>
      <Navbar activePath="/about" />

      <main className="pt-24">
        <section className="relative border-b border-outline-variant/30 bg-surface-container-low py-32">
          <div className="mx-auto max-w-6xl px-8">
            <div className="mb-20 flex flex-col items-start">
              <span className="mb-4 font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
                Who We Are
              </span>
              <h2 className="font-headline text-5xl font-extrabold uppercase tracking-tighter text-glow md:text-6xl">
                About SACO
              </h2>
              <div className="mt-6 h-1 w-24 bg-primary" />
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-6">
                <p className="font-body text-lg font-light leading-relaxed text-on-surface-variant">
                  The Seattle Area Coding Organization is a student-led
                  initiative connecting competitive programmers across the
                  Pacific Northwest. Founded by high school students who wanted
                  to build a stronger local community around algorithmic
                  problem-solving, SACO has grown into the region&apos;s premier
                  hub for aspiring coders.
                </p>
                <p className="font-body text-lg font-light leading-relaxed text-on-surface-variant">
                  We believe in learning by doing. Our events range from
                  beginner-friendly workshops to the annual Seattle Area
                  Computing Cup — a high-stakes contest that draws hundreds of
                  participants from dozens of schools.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center border border-outline-variant bg-surface-container p-6 text-center transition-colors hover:border-primary/50"
                  >
                    <span className="font-headline text-4xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="mt-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-px border border-outline-variant bg-outline-variant md:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="group bg-surface-container p-10 transition-colors hover:bg-surface-container-high"
                  >
                    <Icon className="mb-4 h-8 w-8 text-primary transition-colors group-hover:text-secondary" />
                    <h3 className="mb-3 font-headline text-xl font-bold uppercase tracking-tight text-on-surface">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm font-light leading-relaxed text-on-surface-variant">
                      {pillar.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed inset-0 z-[100] opacity-10 terminal-scanline" />
    </>
  );
}
