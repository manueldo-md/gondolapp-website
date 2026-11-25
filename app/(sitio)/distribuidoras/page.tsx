import type { Metadata } from "next";
import PageDistribuidoras from "@/components/dc/generado/PageDistribuidoras";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026), del texto de la página
   (docs/sitio/diseno-v1/Distribuidoras.dc.html). */
export const metadata: Metadata = metadatos(
  "/distribuidoras",
  "Para distribuidoras · Gondolapp",
  "Un panel sin costo para las campañas de tus marcas y las tuyas. Ejecutás las campañas de tus marcas con tu propia gente y lanzás campañas internas.",
);

export default function Pagina() {
  return <PageDistribuidoras />;
}
