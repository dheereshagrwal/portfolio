import Link from "next/link";
import { Link as Chain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CompanyAvatar from "@/components/CompanyAvatar";
import type { Project } from "@/lib/types";

interface ProjectCardProps extends Pick<Project, "name" | "description" | "link" | "logo"> {
  readonly className?: string;
}

function ProjectCard({ name, description, link, logo, className = "" }: ProjectCardProps) {
  return (
    <Card
      className={`hover:bg-accent bg-transparent rounded-2xl transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <CardContent>
        <article>
          <header>
            <CompanyAvatar
              logo={logo}
              name={name}
              sizeClass="size-10 sm:size-12"
              imageSizeClass="size-6 sm:size-7"
              href={link.href}
              ariaLabel={`Visit ${name} project`}
            />
            <h4 className="mt-6 sm:mt-8 font-semibold text-lg sm:text-xl text-foreground group-hover:text-muted-foreground transition-colors">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-all duration-300"
              >
                {name}
              </Link>
            </h4>
          </header>
          <p className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed text-base">
            {description}
          </p>
          <footer className="inline-block mt-6 sm:mt-8">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name} at ${link.label}`}
              className="flex text-sm font-medium text-blue-600 dark:text-blue-400 transition-all duration-300 items-center gap-2 hover:text-blue-800 dark:hover:text-blue-300 group"
            >
              <Chain
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
                aria-hidden="true"
              />
              <span>{link.label}</span>
            </Link>
          </footer>
        </article>
      </CardContent>
    </Card>
  );
}

// Memoize the component for better performance
export default ProjectCard;
