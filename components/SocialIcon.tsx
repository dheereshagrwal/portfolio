import type { IconType } from "react-icons";
import { inter } from "@/lib/fonts";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialIconProps {
  readonly href: string;
  readonly icon: IconType;
  readonly label: string;
  readonly size?: number;
  readonly className?: string;
}

function SocialIcon({
  href,
  icon: Icon,
  label,
  size = 24,
  className = "",
}: SocialIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${label} profile`}
          className={`text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 ${className}`}
        >
          <Icon size={size} aria-hidden="true" />
        </Link>
      </TooltipTrigger>
      <TooltipContent
        className={`${inter.className} px-3 py-2 text-sm font-medium text-primary-foreground`}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default SocialIcon;
