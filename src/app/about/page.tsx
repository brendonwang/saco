import type { LucideIcon } from "lucide-react";
import { School, Trophy, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import teamMembers from "@/data/team.json";

// const STATS = [
//   { value: "500+", label: "Active Members" },
//   { value: "30+", label: "Partner Schools" },
//   { value: "12", label: "Events Per Year" },
//   { value: "3", label: "Years Running" },
// ] as const;

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

      <main className="pt-page">
        <section className="relative border-b border-outline-variant/30 bg-surface-container-low pb-16 pt-12 sm:pb-24 sm:pt-20 md:pb-32 md:pt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="mb-12 flex flex-col items-start sm:mb-20">
              <span className="mb-4 font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
                Who We Are
              </span>
              <h2 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-glow sm:text-5xl md:text-6xl">
                About SACO
              </h2>
              <div className="mt-6 h-1 w-24 bg-primary" />
            </div>

            <div className="grid gap-16" /*md:grid-cols-2*/>
              <div className="space-y-6">
                <p className="font-body text-base font-light leading-relaxed text-on-surface-variant sm:text-lg">
                  The Seattle Area Coding Organization is a student-run
                  community that helps pre-college students learn, practice,
                  and compete in programming. Through contests, workshops,
                  study groups, and shared resources, SACO connects coders
                  across the Pacific Northwest and supports students at every
                  skill level, from beginners to experienced competitive
                  programmers.
                </p>
                <p className="font-body text-base font-light leading-relaxed text-on-surface-variant sm:text-lg">
                  We believe in learning by doing. Our events range from
                  beginner-friendly workshops to the annual Seattle Area
                  Coding Competition — a high-stakes contest that draws hundreds of
                  participants from dozens of schools.
                </p>
              </div>

              {/*<div className="grid grid-cols-2 gap-6">*/}
              {/*  {STATS.map((stat) => (*/}
              {/*    <div*/}
              {/*      key={stat.label}*/}
              {/*      className="flex flex-col items-center justify-center border border-outline-variant bg-surface-container p-6 text-center transition-colors hover:border-primary/50"*/}
              {/*    >*/}
              {/*      <span className="font-headline text-4xl font-bold text-primary">*/}
              {/*        {stat.value}*/}
              {/*      </span>*/}
              {/*      <span className="mt-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">*/}
              {/*        {stat.label}*/}
              {/*      </span>*/}
              {/*    </div>*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>

            <div className="mt-12 grid gap-px border border-outline-variant bg-outline-variant sm:mt-20 md:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="group bg-surface-container p-6 transition-colors hover:bg-surface-container-high sm:p-8 md:p-10"
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

        <section className="border-b border-outline-variant/30 bg-surface py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="mb-12 flex flex-col items-start sm:mb-20">
              <span className="mb-4 font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
                The Team
              </span>
              <h2 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-glow sm:text-5xl md:text-6xl">
                Meet Our Members
              </h2>
              <div className="mt-6 h-1 w-24 bg-primary" />
            </div>

            <div className="flex flex-col divide-y divide-outline-variant border border-outline-variant">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col gap-6 bg-surface-container p-5 transition-colors hover:bg-surface-container-high sm:flex-row sm:items-center sm:p-8"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-outline-variant bg-surface-container-high">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 border border-primary/0 transition-colors group-hover:border-primary/40" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center sm:gap-8">
                    <div className="mb-2 shrink-0 sm:mb-0 sm:w-48">
                      <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-on-surface transition-colors group-hover:text-primary">
                        {member.name}
                      </h3>
                      <span className="mt-1 block font-label text-[10px] uppercase tracking-widest text-secondary">
                        {member.role}
                      </span>
                      <span className="mt-0.5 block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {member.school}
                      </span>
                    </div>
                    <p className="font-body text-sm font-light leading-relaxed text-on-surface-variant">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
