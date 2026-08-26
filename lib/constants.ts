/**
 * Application-wide constants for better maintainability and type safety
 */

import type { Role, Project, Content } from "@/lib/types";

// External URLs
export const EXTERNAL_URLS = {
  GITHUB: "https://github.com/dheereshag",
  LINKEDIN: "https://linkedin.com/in/dheereshag",
  LEETCODE: "https://leetcode.com/dheereshagrwal",
  CODECHEF: "https://www.codechef.com/users/dheereshag",
  CODEFORCES: "https://codeforces.com/profile/dheereshag",
  PORTFOLIO: "https://dheereshag.vercel.app",
  COLOURED_ICONS: "https://coloured-icons.vercel.app",
  VEMBRIC: "https://vembric.vercel.app",
  // Company URLs
  TAXHOA: "https://www.taxhoa.com",
  RINGCENTRAL: "https://www.ringcentral.com",
} as const;

// Contact information
export const CONTACT = {
  EMAIL: "da11@iitbbs.ac.in",
  NAME: "Dheeresh Agarwal",
} as const;

// Asset paths
export const ASSET_PATHS = {
  RESUME: "/Dheeresh_Agarwal_Resume.pdf",
  LOGOS: {
    TAXHOA: "/taxhoa.ico",
    RINGCENTRAL: "/ringcentral.png",
    PORTFOLIO: "/portfolio.png", // Large version for Open Graph
    PORTFOLIO_AVATAR: "/favicon-96x96.png", // Optimized small version for avatars
    COLOURED_ICONS: "/ci.svg",
    VEMBRIC: "/vembric.svg",
  },
} as const;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

// Skills and knowledge areas for structured data
export const SKILLS = [
  "Software Engineering",
  "Full Stack Development",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "Web Development",
  "Frontend Development",
  "Backend Development",
] as const;

// Education information
export const EDUCATION = {
  INSTITUTION: "Indian Institute of Technology Bhubaneswar",
  INSTITUTION_URL: "https://www.iitbbs.ac.in/",
  DEGREE: "Bachelor's Degree",
  FIELD: "Materials Engineering",
} as const;

// Address information
export const ADDRESS = {
  COUNTRY: "IN",
  REGION: "Odisha",
  LOCALITY: "Bhubaneswar",
  NATIONALITY: "India",
} as const;

// FAQ data for structured data
export const FAQ_DATA = [
  {
    question: "What technologies does Dheeresh Agarwal specialize in?",
    answer:
      "Dheeresh specializes in React, Next.js, TypeScript, Node.js, JavaScript, and full-stack web development. He has experience with modern frameworks and tools for building scalable web applications.",
  },
  {
    question: "Where has Dheeresh Agarwal worked?",
    answer:
      "Dheeresh has worked at multinational corporations like RingCentral and startups like TaxHoa, gaining experience across different company sizes and environments.",
  },
  {
    question: "What education does Dheeresh Agarwal have?",
    answer:
      "Dheeresh is an alumnus of the Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar), one of India's premier technical institutions.",
  },
] as const;

// Breadcrumb navigation items
export const BREADCRUMB_ITEMS = [
  { name: "Home", path: "" },
  { name: "Projects", path: "#projects" },
  { name: "About", path: "#about" },
] as const;

// Schema factory functions - these create schemas with dynamic data
export const createPersonSchema = (url: string, resume: readonly Role[], content: Content) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: CONTACT.NAME,
  url: url,
  email: CONTACT.EMAIL,
  jobTitle: "Software Engineer",
  description: content.HERO.DESCRIPTION,
  image: `${url}${ASSET_PATHS.LOGOS.PORTFOLIO}`,
  sameAs: [EXTERNAL_URLS.GITHUB, EXTERNAL_URLS.LINKEDIN, EXTERNAL_URLS.LEETCODE],
  worksFor: resume.map((role) => ({
    "@type": "Organization",
    name: role.company,
    url: role.website,
  })),
  knowsAbout: SKILLS,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: EDUCATION.INSTITUTION,
    url: EDUCATION.INSTITUTION_URL,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    educationalLevel: EDUCATION.DEGREE,
    about: {
      "@type": "EducationalOccupationalProgram",
      name: EDUCATION.FIELD,
      provider: {
        "@type": "CollegeOrUniversity",
        name: EDUCATION.INSTITUTION,
      },
    },
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: ADDRESS.COUNTRY,
    addressRegion: ADDRESS.REGION,
    addressLocality: ADDRESS.LOCALITY,
  },
  nationality: {
    "@type": "Country",
    name: ADDRESS.NATIONALITY,
  },
});

export const createWebsiteSchema = (url: string, content: Content) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${CONTACT.NAME} Portfolio`,
  description: content.HERO.DESCRIPTION,
  url: url,
  author: {
    "@type": "Person",
    name: CONTACT.NAME,
  },
  publisher: {
    "@type": "Person",
    name: CONTACT.NAME,
  },
  inLanguage: "en-US",
});

export const createPortfolioSchema = (
  url: string,
  projects: readonly Project[],
  content: Content,
) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${url}#portfolio`,
  name: "Software Engineering Portfolio",
  description: content.PROJECTS.DESCRIPTION,
  creator: {
    "@type": "Person",
    name: CONTACT.NAME,
  },
  url: url,
  workExample: projects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.link.href,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  })),
});

export const createOrganizationSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${url}#organization`,
  name: CONTACT.NAME,
  url: url,
  logo: `${url}${ASSET_PATHS.LOGOS.PORTFOLIO}`,
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT.EMAIL,
    contactType: "professional",
  },
  founder: {
    "@type": "Person",
    name: CONTACT.NAME,
  },
  sameAs: [EXTERNAL_URLS.GITHUB, EXTERNAL_URLS.LINKEDIN],
});

export const createBreadcrumbSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${url}${item.path}`,
  })),
});

export const createWorkExperienceSchemas = (url: string, resume: readonly Role[]) =>
  resume.map((role, index) => ({
    "@context": "https://schema.org",
    "@type": "EmployeeRole",
    "@id": `${url}#job-${index}`,
    roleName: role.title,
    startDate: role.start,
    endDate: role.end === "Present" ? new Date().toISOString().split("T")[0] : role.end,
    worksFor: {
      "@type": "Organization",
      name: role.company,
      url: role.website,
    },
    employee: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
  }));

export const createFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
