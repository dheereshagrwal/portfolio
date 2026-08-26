import {
  EXTERNAL_URLS,
  createPersonSchema,
  createWebsiteSchema,
  createPortfolioSchema,
  createOrganizationSchema,
  createBreadcrumbSchema,
  createWorkExperienceSchemas,
  createFaqSchema,
} from "@/lib/constants";
import { projects, resume, CONTENT } from "@/lib/data";

interface StructuredDataProps {
  readonly url?: string;
}

function StructuredData({ url = EXTERNAL_URLS.PORTFOLIO }: StructuredDataProps) {
  const personSchema = createPersonSchema(url, resume, CONTENT);
  const websiteSchema = createWebsiteSchema(url, CONTENT);
  const portfolioSchema = createPortfolioSchema(url, projects, CONTENT);
  const organizationSchema = createOrganizationSchema(url);
  const breadcrumbSchema = createBreadcrumbSchema(url);
  const workExperienceSchema = createWorkExperienceSchemas(url, resume);
  const faqSchema = createFaqSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {workExperienceSchema.map((schema, index) => (
        <script
          key={`work-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default StructuredData;
