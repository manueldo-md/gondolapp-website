"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/* Debajo de 768px la simulación de fuerzas no se renderiza: va la cadena
   de valor (brief §6.3). La decisión es en JS y no por CSS, para que en
   celular los 47 nodos y el bucle de animación no existan siquiera.

   Las dos versiones se cargan bajo demanda: entre el componente de
   escritorio y los datos de los 47 nodos son unos 30 KB que no hacen
   falta hasta que el visitante baja hasta acá. */

const EcosistemaDesktop = dynamic(() => import("./EcosistemaDesktop"), { ssr: false });
const EcosistemaMobile = dynamic(() => import("./EcosistemaMobile"), { ssr: false });

const CORTE = "(min-width: 768px)";

export default function Ecosistema() {
  const [esDesktop, setEsDesktop] = useState<boolean | null>(null);
  const [cerca, setCerca] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(CORTE);
    const aplicar = () => setEsDesktop(mq.matches);
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, []);

  /* Recién se pide el código cuando la sección está por entrar en pantalla. */
  useEffect(() => {
    const el = document.getElementById("ecosistema");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCerca(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const listo = esDesktop !== null && cerca;

  return (
    <section id="ecosistema" style={{ padding: "112px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 800 }}>
            <div className="kick">Ecosistema</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              El ecosistema que construye valor.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: 380, fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", fontWeight: 500 }}>
            {esDesktop === false
              ? "Cada marca financia su red y recibe el dato. Las marcas no se tocan entre sí. Tocá un actor para ver qué hace y qué aporta."
              : "Las marcas no se tocan entre sí: cada una ve solo su red. Pasá el mouse por una entidad para ver qué hace, o arrastrá una marca y mirá cómo se reacomoda todo. Lo que flota alrededor es lo que la red genera: fotos, datos, puntos, mapa."}
          </p>
        </div>

        {!listo ? (
          /* Reserva el espacio mientras llega, para que no salte el layout */
          <div aria-hidden="true" style={{ width: "100%", aspectRatio: esDesktop === false ? "350/430" : "1300/1000", marginTop: 40 }} />
        ) : esDesktop ? (
          <EcosistemaDesktop />
        ) : (
          <EcosistemaMobile />
        )}
      </div>
    </section>
  );
}
