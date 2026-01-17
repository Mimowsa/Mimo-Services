import type { MetadataRoute } from "next";
import { site } from "@/app/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/en`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/mes-projets`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/en/projects`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/a-propos`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/en/about`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/contact`,
      lastModified: new Date()
    },
    {
      url: `${site.url}/en/contact`,
      lastModified: new Date()
    }
  ];
}
