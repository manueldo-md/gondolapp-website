import type { Metadata } from "next";
import PageDistribuidoras from "@/components/dc/generado/PageDistribuidoras";

/* Título y bajada: los del diseño aprobado (docs/sitio/diseno-v1/Distribuidoras.dc.html). */
const titulo = "Gondolapp para distribuidoras";
const descripcion = "Un panel sin costo para las campañas de tus marcas y las tuyas. Ejecutás las campañas de tus marcas con tu propia gente, lanzás campañas internas y convertís tu recorrido diario en el argumento que te faltaba para sumar representaciones.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://gondolapp.com/distribuidoras",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Pagina() {
  return <PageDistribuidoras />;
}
