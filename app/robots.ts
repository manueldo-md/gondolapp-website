import type { MetadataRoute } from "next";
import { SITIO } from "@/lib/seo";

/* Todo permitido; el teaser ya se marca noindex en su propia página. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: SITIO + "/sitemap.xml",
  };
}
