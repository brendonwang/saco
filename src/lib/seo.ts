import type { Metadata } from "next";

const DEFAULT_SITE_URL = "http://localhost:3000";

function resolveSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;
  const url = new URL(withProtocol);

  url.hash = "";
  url.search = "";
  url.pathname = url.pathname.replace(/\/+$/, "") || "/";

  return url;
}

export const siteConfig = {
  name: "SACO",
  fullName: "Seattle Area Coding Organization",
  title: "SACO | Seattle Area Coding Organization",
  description:
    "Seattle Area Coding Organization is a student-run competitive programming community for pre-college coders across the Pacific Northwest.",
  email: "sacocoding@gmail.com",
  discordUrl: "https://discord.gg/s767nmxmg4",
  url: resolveSiteUrl(),
} as const;

export const siteRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/sacc", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sponsors", changeFrequency: "monthly", priority: 0.7 },
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const defaultKeywords = [
  "Seattle coding competition",
  "Seattle competitive programming",
  "Pacific Northwest coding",
  "pre-college coding",
  "algorithmic thinking",
  "student coding organization",
];

const defaultRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const rootMetadata: Metadata = {
  metadataBase: siteConfig.url,
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: defaultRobots,
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: defaultRobots,
  };
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/SACO Logo.svg"),
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.discordUrl],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: absoluteUrl("/"),
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
  ],
};

export const saccEventJsonLd = {
  "@type": "Event",
  "@id": absoluteUrl("/sacc#event"),
  name: "Seattle Area Computing Competition 2026",
  alternateName: "SACC 2026",
  description:
    "A 3-hour in-person competitive programming contest for pre-college students in Seattle.",
  startDate: "2026-05-23T08:00:00-07:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Seattle, WA",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
  },
  organizer: {
    "@id": absoluteUrl("/#organization"),
  },
  offers: {
    "@type": "Offer",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScdr-aDxrZaHumGMvKSUixdmFY9L9Hor2aEvaHHa-31qWTYFw/viewform?usp=publish-editor",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};
