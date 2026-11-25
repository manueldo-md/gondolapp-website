import type { Metadata } from "next";
import Link from "next/link";
import Responsive from "@/components/dc/Responsive";
import DesktopHeader from "@/components/dc/generado/DesktopHeader";
import DesktopFooter from "@/components/dc/generado/DesktopFooter";
import MobileHeader from "@/components/dc/generado/MobileHeader";
import MobileFooter from "@/components/dc/generado/MobileFooter";

/* Página 404: header y pie del sitio (los de las páginas internas) y vuelta al inicio.
   Next ya le agrega noindex. */
export const metadata: Metadata = {
  title: { absolute: "Página no encontrada · Gondolapp" },
};

export default function NoEncontrada() {
  return (
    <div className="dc dc-red">
      <Responsive
        desktop={<DesktopHeader />}
        mobile={<div className="dc-mob dc-contents"><MobileHeader /></div>}
      />
      <main className="wrap" style={{ paddingTop: "96px", paddingBottom: "120px" }}>
        <p className="kick" style={{ margin: 0 }}>Error 404</p>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(40px,6vw,72px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
          Esta página no existe.
        </h1>
        <p style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "18px", lineHeight: 1.5, color: "#4E5D53", fontWeight: 500 }}>
          Puede que el link esté mal escrito o que la página se haya movido.
        </p>
        <Link href="/" className="btn btn-dark" style={{ marginTop: "32px" }}>
          Volver al inicio
        </Link>
      </main>
      <Responsive
        desktop={<DesktopFooter />}
        mobile={<div className="dc-mob dc-contents"><MobileFooter /></div>}
      />
    </div>
  );
}
