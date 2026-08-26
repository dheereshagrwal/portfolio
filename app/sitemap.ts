import { MetadataRoute } from "next";
import { EXTERNAL_URLS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: EXTERNAL_URLS.PORTFOLIO,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
