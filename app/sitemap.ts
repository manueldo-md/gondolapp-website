import type { MetadataRoute } from "next";
import { RUTAS, urlDe } from "@/lib/seo";

/* Las 6 páginas del sitio, con la misma URL que su canonical. */
export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((ruta) => ({ url: urlDe(ruta) }));
}
