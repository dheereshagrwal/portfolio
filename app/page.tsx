import { socials, projects, CONTENT } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Resume from "@/components/Resume";
import SectionHeading from "@/components/SectionHeading";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(`${CONTENT.HERO.TITLE}`, CONTENT.HERO.DESCRIPTION);

export default function Home() {
  return (
    <>
      <ThemeToggleButton />
      <main className="font-sans min-h-screen px-5 sm:px-8 md:px-16 py-12 md:py-20">
        {/* Hero Section */}
        <header id="home" className="mb-16 sm:mb-20">
          <HeroSection
            title={CONTENT.HERO.TITLE}
            description={CONTENT.HERO.DESCRIPTION}
            headingAs="h1"
          />

          {/* Social Links Navigation */}
          <nav
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-10"
            aria-label="Social media links"
          >
            {socials.map((social) => (
              <SocialIcon
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </nav>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-16 sm:mb-20">
          <HeroSection title={CONTENT.PROJECTS.TITLE} description={CONTENT.PROJECTS.DESCRIPTION} />

          <article
            className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 lg:max-w-6xl"
            aria-label="Featured projects"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                logo={project.logo}
              />
            ))}
          </article>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 sm:mb-20">
          <SectionHeading title={CONTENT.ABOUT.TITLE} />
          <div className="flex flex-col xl:flex-row gap-8 sm:gap-12 max-w-6xl mx-auto">
            <AboutSection descriptions={CONTENT.ABOUT.DESCRIPTIONS} />

            {/* Resume and Contact Section */}
            <aside
              id="contact"
              className="flex flex-col gap-8 sm:gap-10 items-center"
              aria-label="Professional information and contact"
            >
              <Resume />
              <Email />
            </aside>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
