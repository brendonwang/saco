import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Organizations supporting the Seattle Area Coding Organization and our events.",
};

const SPONSORS = [
  {
    name: "Coding Mind",
    src: "/sponsors/coding_mind.png",
  },
  {
    name: "X-Camp",
    src: "/sponsors/x-camp.svg",
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

            <ul className="grid gap-6 sm:grid-cols-2 sm:gap-10">
              {SPONSORS.map((sponsor) => (
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
          </div>
        </section>
      </main>
    </>
  );
}
