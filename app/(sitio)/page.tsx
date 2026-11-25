import type { Metadata } from "next";
import HomeDesktop from "@/components/dc/generado/HomeDesktop";
import HomeMobile from "@/components/dc/generado/HomeMobile";
import Responsive, { SaltoAlAncla } from "@/components/dc/Responsive";

/* Inicio: Main.dc.html en la compu y Mobile.dc.html en el celular. */
const titulo = "Gondolapp — Ejecución y datos en el canal tradicional";
const descripcion =
  "La plataforma para ejecutar y medir campañas en el canal tradicional. Tu equipo, las distribuidoras con las que trabajás o tu repositora relevan desde el celular; vos lo ves todo en vivo.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: { title: titulo, description: descripcion, url: "https://gondolapp.com" },
  twitter: { title: titulo, description: descripcion },
};

export default function Inicio() {
  return (
    <>
      <Responsive desktop={<HomeDesktop />} mobile={<HomeMobile />} />
      <SaltoAlAncla />
    </>
  );
}
