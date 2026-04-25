import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Organizations supporting the Seattle Area Coding Organization and our events.",
};

const SPONSOR_TIERS = [
  {
    name: "Platinum",
    labelClass: "border-primary/40 text-primary",
    ruleClass: "bg-primary",
    sponsors: [
      {
        name: "Coding Mind",
        src: "/sponsors/coding_mind.png",
      },
      {
        name: "X-Camp",
        src: "/sponsors/x-camp.svg",
      },
    ],
  },
  {
    name: "Gold",
    labelClass: "border-yellow-300/40 text-yellow-300",
    ruleClass: "bg-yellow-300",
    sponsors: [],
  },
  {
    name: "Silver",
    labelClass: "border-slate-300/40 text-slate-300",
    ruleClass: "bg-slate-300",
    sponsors: [],
  },
  {
    name: "Bronze",
    labelClass: "border-amber-600/40 text-amber-500",
    ruleClass: "bg-amber-600",
    sponsors: [],
  },
] as const;

export default function SponsorsPage() {
  return (
    <>
      <Navbar activePath="/sponsors" />

      <main className="pt-page">
        <section className="relative border-b border-outline-variant/30 bg-surface-container-low pb-16 pt-12 sm:pb-24 sm:pt-20 md:pb-32 md:pt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="mb-12 flex flex-col items-start sm:mb-16">
              <span className="mb-4 font-label text-[12px] uppercase tracking-[0.4em] text-secondary">
                Partners
              </span>
              <h1 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-glow sm:text-5xl md:text-6xl">
                Sponsors
              </h1>
              <div className="mt-6 h-1 w-24 bg-primary" />
            </div>

            <p className="mb-12 max-w-2xl font-body text-base font-light leading-relaxed text-on-surface-variant sm:text-lg">
              We are grateful to the organizations that help make SACO programs
              and competitions possible. Their support strengthens our
              community across the Pacific Northwest.
            </p>

            <div className="space-y-12 sm:space-y-16">
              {SPONSOR_TIERS.map((tier) => (
                <section key={tier.name} aria-labelledby={`${tier.name}-tier`}>
                  <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span
                        className={`inline-flex border px-3 py-1 font-label text-[10px] uppercase tracking-widest ${tier.labelClass}`}
                      >
                        {tier.name}
                      </span>
                      <h2
                        id={`${tier.name}-tier`}
                        className="mt-3 font-headline text-2xl font-bold uppercase tracking-tight text-on-surface sm:text-3xl"
                      >
                        {tier.name} Sponsors
                      </h2>
                    </div>
                    <div className={`h-1 w-20 ${tier.ruleClass}`} />
                  </div>

                  {tier.sponsors.length > 0 ? (
                    <ul className="grid gap-6 sm:grid-cols-2 sm:gap-10">
                      {tier.sponsors.map((sponsor) => (
                        <li key={sponsor.src}>
                          <div className="flex h-full flex-col border border-outline-variant bg-surface-container p-8 transition-colors hover:border-primary/40 sm:p-10">
                            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg p-8 shadow-inner ring-1 ring-black/5 sm:p-10">
                              <div className="relative mx-auto aspect-[5/2] w-full">
                                <Image
                                  src={sponsor.src}
                                  alt={`${sponsor.name} logo`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 640px) 100vw, 50vw"
                                />
                              </div>
                            </div>
                            <p className="mt-6 text-center font-label text-[11px] uppercase tracking-widest text-on-surface">
                              {sponsor.name}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border border-dashed border-outline-variant bg-surface-container/40 px-6 py-8 text-center font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                      Available Sponsorship Tier
                    </div>
                  )}
                </section>
              ))}
            </div>

            <section
              aria-labelledby="sponsor-contact"
              className="relative mt-16 overflow-hidden bg-surface-container px-6 py-8 shadow-[0_0_28px_rgba(0,240,255,0.08)] sm:mt-20 sm:px-10 sm:py-12"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary">
                    Sponsor SACO
                  </span>
                  <h2
                    id="sponsor-contact"
                    className="mt-3 font-headline text-2xl font-bold uppercase tracking-tight text-on-surface sm:text-3xl"
                  >
                    Help Power The Next Contest
                  </h2>
                </div>
                <p className="max-w-2xl font-body text-base font-light leading-relaxed text-on-surface-variant sm:text-lg">
                  If you are interested in sponsoring us, please email us at:{" "}
                  <a
                    href="mailto:sacocoding@gmail.com"
                    className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-secondary hover:decoration-secondary/60"
                  >
                    sacocoding@gmail.com
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
