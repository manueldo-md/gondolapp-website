"use client";

import { useState, type ReactNode } from "react";
import { enviarDemo } from "@/lib/dc/demo";

/* El formulario de demo de la compu (Main.dc.html) no trae estado de
   «enviado»: se usa el del lienzo Mobile, el mismo para las dos. */

type Enviar = (e: { currentTarget: EventTarget | null; preventDefault?: () => void }) => void;

export default function DemoEnvio({
  children,
}: {
  children: (enviar: Enviar, listo: boolean, otra: () => void) => ReactNode;
}) {
  const [listo, setListo] = useState(false);
  return <>{children((e) => enviarDemo(e, () => setListo(true)), listo, () => setListo(false))}</>;
}
