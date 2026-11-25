import type { Metadata } from "next";
import PagePrecios from "@/components/dc/generado/PagePrecios";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026), del texto de la página
   (docs/sitio/diseno-v1/Precios.dc.html). */
export const metadata: Metadata = metadatos(
  "/precios",
  "Precios · Gondolapp",
  "Sin abono mensual ni licencias por usuario. Cargás saldo y pagás por lo que se releva. Lo que no se usa, vuelve a tu saldo.",
);

export default function Pagina() {
  return <PagePrecios />;
}
