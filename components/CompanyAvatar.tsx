import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface CompanyAvatarProps {
  readonly logo: string;
  readonly name: string;
  readonly sizeClass: string;
  readonly imageSizeClass: string;
  readonly href: string;
  readonly ariaLabel: string;
}

function CompanyAvatar({
  logo,
  name,
  sizeClass,
  imageSizeClass,
  href,
  ariaLabel,
}: CompanyAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  const avatarElement = (
    <Avatar
      className={`items-center justify-center border border-border bg-card hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg ${sizeClass}`}
    >
      <AvatarImage src={logo} alt={`${name} logo`} className={imageSizeClass} loading="lazy" />
      <AvatarFallback
        className="text-xs font-semibold text-foreground"
        aria-label={`${name} initials`}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );

  // always wrap avatar in Link now that href is required
  return (
    <Link
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || `Visit ${name}`}
      className="inline-block hover:opacity-80 transition-opacity duration-200"
    >
      {avatarElement}
    </Link>
  );
}

export default CompanyAvatar;
