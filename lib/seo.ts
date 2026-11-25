import type { Metadata } from "next";

/* Metadatos de cada página: título, descripción, canonical absoluto,
   Open Graph y tarjeta de X. Sin ® en ninguno (regla de marca: el ® va
   solo en el cuerpo de la página y en el pie). */

export const SITIO = "https://gondolapp.com";

/* Las 6 páginas del sitio, en el orden del menú. Las usan el sitemap y los metadatos. */
export const RUTAS = ["/", "/marcas", "/distribuidoras", "/repositoras", "/red", "/precios"] as const;
export type Ruta = (typeof RUTAS)[number];

/* Canonical sin barra final: es la URL a la que Vercel ya redirige con 308 (Next escribe el inicio sin barra). */
export function urlDe(ruta: Ruta | string) {
  return ruta === "/" ? SITIO : SITIO + ruta;
}

/* El logo sobre fondo #0F1A14, sale de scripts/sitio-desde-diseno/og.mjs. */
export const IMAGEN_OG = {
  url: "/gondolapp-assets/brand/og.png",
  width: 1200,
  height: 630,
  alt: "Gondolapp",
};

export const OPEN_GRAPH_BASE = {
  type: "website" as const,
  locale: "es_AR",
  siteName: "Gondolapp",
  images: [IMAGEN_OG],
};

export function metadatos(ruta: Ruta, titulo: string, descripcion: string): Metadata {
  const url = urlDe(ruta);
  return {
    title: { absolute: titulo },
    description: descripcion,
    alternates: { canonical: url },
    openGraph: { ...OPEN_GRAPH_BASE, url, title: titulo, description: descripcion },
    twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: [IMAGEN_OG.url] },
  };
}

/* Datos estructurados: quién es Gondolapp y cuál es su sitio. Nada de
   productos, precios ni reseñas. */
export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": SITIO + "/#organizacion",
      name: "Gondolapp",
      url: SITIO + "/",
      logo: SITIO + "/gondolapp-assets/brand/logo-fondo-claro.png",
      email: "hola@gondolapp.com",
    },
    {
      "@type": "WebSite",
      "@id": SITIO + "/#sitio",
      name: "Gondolapp",
      url: SITIO + "/",
      inLanguage: "es-AR",
      publisher: { "@id": SITIO + "/#organizacion" },
    },
  ],
};
