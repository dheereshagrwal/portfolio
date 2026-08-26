// React Compiler is enabled; explicit memoization is typically unnecessary.
import SectionHeading from "./SectionHeading";

interface HeroSectionProps {
  title: string;
  description: string;
  // Allow controlling heading level for semantic correctness
  headingAs?: "h1" | "h2" | "h3";
}

function HeroSection({ title, description, headingAs = "h2" }: HeroSectionProps) {
  return (
    <section className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      <SectionHeading title={title} as={headingAs} />
      <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-medium">
        {description}
      </p>
    </section>
  );
}

export default HeroSection;
