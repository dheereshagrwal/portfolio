/**
 * Centralized data/constants for the portfolio
 * All data is readonly for immutability and better performance
 */
import { SiGithub, SiLeetcode, SiCodechef } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { Role, Social, Project } from "@/lib/types";
import { EXTERNAL_URLS, ASSET_PATHS } from "@/lib/constants";

export const socials: readonly Social[] = [
  {
    href: EXTERNAL_URLS.GITHUB,
    icon: SiGithub,
    label: "GitHub",
  },
  // {
  //   href: EXTERNAL_URLS.CODEFORCES,
  //   icon: SiCodeforces,
  //   label: "Codeforces",
  // },
  {
    href: EXTERNAL_URLS.LEETCODE,
    icon: SiLeetcode,
    label: "LeetCode",
  },
  {
    href: EXTERNAL_URLS.LINKEDIN,
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: EXTERNAL_URLS.CODECHEF,
    icon: SiCodechef,
    label: "CodeChef",
  },
] as const;

export const projects: readonly Project[] = [
  {
    name: "Coloured Icons",
    description:
      "A CDN for coloured icons. It provides a simple way to use icons in your projects with customizable colors.",
    link: {
      href: EXTERNAL_URLS.COLOURED_ICONS,
      label: "coloured-icons.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.COLOURED_ICONS,
  },
  {
    name: "Portfolio",
    description:
      "This portfolio website, showcasing my work and projects. Built with Next.js, Tailwind CSS, and React Icons.",
    link: {
      href: EXTERNAL_URLS.PORTFOLIO,
      label: "dheereshag.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.PORTFOLIO_AVATAR,
  },
  {
    name: "Vembric",
    description:
      "An API documentation template that helps you create beautiful and interactive API documentation on the web.",
    link: {
      href: EXTERNAL_URLS.VEMBRIC,
      label: "vembric.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.VEMBRIC,
  },
] as const;

export const resume: readonly Role[] = [
  {
    company: "TaxHoa",
    title: "Software Engineer 2",
    logo: ASSET_PATHS.LOGOS.TAXHOA,
    start: "Dec 2022",
    end: "Present",
    website: EXTERNAL_URLS.TAXHOA,
    promotions: [
      { title: "Software Engineer - II", start: "Aug 2024", end: "Present" },
      { title: "Software Engineer - I", start: "Dec 2022", end: "Aug 2024" },
    ],
  },
  {
    company: "RingCentral",
    title: "Software Engineer - I",
    logo: ASSET_PATHS.LOGOS.RINGCENTRAL,
    start: "Jul 2022",
    end: "Nov 2022",
    website: EXTERNAL_URLS.RINGCENTRAL,
  },
] as const;

// Content constants for better maintainability
export const CONTENT = {
  HERO: {
    TITLE: "Software engineer, learner, and an amateur photographer.",
    DESCRIPTION:
      "I'm Dheeresh, a software engineer based in India. I specialize in building scalable web applications with experience working at both multinational corporations like RingCentral and startups like TaxHoa.",
  },
  PROJECTS: {
    TITLE: "A collection of projects I've passionately built.",
    DESCRIPTION:
      "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
  },
  ABOUT: {
    TITLE: "About Me.",
    DESCRIPTIONS: [
      "I've been working as a software engineer for a while now, and I've had the chance to work at different types of companies - from big corporations to smaller startups.",
      "Most of my work involves TypeScript, Next.js for frontend stuff, and Node.js or Django for backend.",
      "When I'm not coding, I like trying out new tech, contributing to open-source projects, hitting the gym, taking photos, and occasionally crawling through Coursera courses to finish them (spoiler: I actually do).",
    ],
  },
} as const;
