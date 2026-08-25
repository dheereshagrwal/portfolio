import type { Metadata, Viewport } from "next";
import { ASSET_PATHS, CONTACT, EXTERNAL_URLS, META_THEME_COLORS } from "@/lib/constants";

// Comprehensive SEO Keywords
export const SEO_KEYWORDS: string[] = [
  "Dheeresh Agarwal",
  "Software Engineer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "Node.js",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "JavaScript",
  "Portfolio",
  "RingCentral",
  "TaxHoa",
  "IIT Bhubaneswar",
  "Indian Institute of Technology Bhubaneswar",
  "IITBBS",
  "India",
  "Software Development",
  "Web Applications",
  "Open Source",
];

// Base metadata for the layout
export const layoutMetadata: Metadata = {
  metadataBase: new URL(EXTERNAL_URLS.PORTFOLIO),
  title: {
    default: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    template: `%s | ${CONTACT.NAME}`,
  },
  description:
    "Dheeresh Agarwal is a software engineer and full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa. Portfolio showcasing projects and expertise.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: CONTACT.NAME, url: EXTERNAL_URLS.PORTFOLIO }],
  creator: CONTACT.NAME,
  publisher: CONTACT.NAME,
  alternates: {
    canonical: EXTERNAL_URLS.PORTFOLIO,
    languages: {
      "en-US": EXTERNAL_URLS.PORTFOLIO,
      "x-default": EXTERNAL_URLS.PORTFOLIO,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: EXTERNAL_URLS.PORTFOLIO,
    title: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    description:
      "Software engineer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa.",
    siteName: `${CONTACT.NAME} Portfolio`,
    images: [
      {
        url: ASSET_PATHS.LOGOS.PORTFOLIO,
        width: 1200,
        height: 630,
        alt: `${CONTACT.NAME} - Software Engineer Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    description:
      "Software engineer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa.",
    images: [ASSET_PATHS.LOGOS.PORTFOLIO],
    creator: "@dheereshag",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "portfolio",
  classification: "Personal Portfolio Website",
  referrer: "origin-when-cross-origin",
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

// Page-specific metadata factory function
export const createPageMetadata = (
  title: string,
  description: string,
  type: "profile" | "website" = "profile"
): Metadata => ({
  title,
  description,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: EXTERNAL_URLS.PORTFOLIO,
  },
  openGraph: {
    title,
    description,
    type,
    url: EXTERNAL_URLS.PORTFOLIO,
    images: [
      {
        url: ASSET_PATHS.LOGOS.PORTFOLIO,
        width: 1200,
        height: 630,
        alt: `${CONTACT.NAME} Portfolio Screenshot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ASSET_PATHS.LOGOS.PORTFOLIO],
  },
});
