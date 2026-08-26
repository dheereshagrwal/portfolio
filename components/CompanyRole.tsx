import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";
import Link from "next/link";

interface CompanyRoleProps {
  readonly role: Role;
}

function CompanyRole({ role }: CompanyRoleProps) {
  return (
    <li className="flex gap-3 sm:gap-4 items-start">
      <CompanyAvatar
        logo={role.logo}
        name={role.company}
        sizeClass="size-9 sm:size-10"
        imageSizeClass="size-4 sm:size-5"
        href={role.website}
        ariaLabel={`Visit ${role.company} website`}
      />
      <dl className="flex flex-auto flex-wrap gap-1 sm:gap-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none font-medium text-foreground">
          <Link
            href={role.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            {role.company}
          </Link>
        </dd>
        {role.promotions ? (
          role.promotions.map((sub) => (
            <div key={`${sub.title}-${sub.start}`} className="w-full flex flex-wrap gap-1 sm:gap-2">
              <dt className="sr-only">Role</dt>
              <dd className="text-sm text-muted-foreground">{sub.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs sm:text-sm text-muted-foreground"
                aria-label={`${sub.start} until ${sub.end}`}
              >
                <time dateTime={sub.start}>{sub.start}</time>
                <span aria-hidden="true" className="mx-1">
                  -
                </span>
                <time dateTime={sub.end}>{sub.end}</time>
              </dd>
            </div>
          ))
        ) : (
          <>
            <dt className="sr-only">Role</dt>
            <dd className="text-sm text-muted-foreground">{role.title}</dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs sm:text-sm text-muted-foreground"
              aria-label={`${role.start} until ${role.end}`}
            >
              <time dateTime={role.start}>{role.start}</time>
              <span aria-hidden="true" className="mx-1">
                -
              </span>
              <time dateTime={role.end}>{role.end}</time>
            </dd>
          </>
        )}
      </dl>
    </li>
  );
}

export default CompanyRole;
