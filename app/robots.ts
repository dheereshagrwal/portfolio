import { MetadataRoute } from "next";
import { EXTERNAL_URLS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${EXTERNAL_URLS.PORTFOLIO}/sitemap.xml`,
    host: EXTERNAL_URLS.PORTFOLIO,
  };
}

