/* Halo de color del hero (brief §4).
   Arranca sobre el borde superior de la página y pasa por detrás del header.

   El alto va fijo en px —no al 100% de la sección— para que el degradado
   siempre termine en transparente dentro de su propia caja. Si dependiera
   del alto del hero, en un hero corto el degradado quedaría cortado y se
   vería una línea horizontal. */

const COLORES = {
  home: "139,124,246",
  marcas: "91,75,214",
  distribuidoras: "196,135,31",
  repositoras: "47,111,224",
  red: "31,157,90",
  precios: "120,130,124",
} as const;

const OPACIDAD = {
  home: 0.16,
  marcas: 0.16,
  distribuidoras: 0.16,
  repositoras: 0.14,
  red: 0.14,
  precios: 0.18,
} as const;

export default function Halo({ tono = "home" }: { tono?: keyof typeof COLORES }) {
  const rgb = COLORES[tono];
  const a = OPACIDAD[tono];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: -84,
        left: 0,
        right: 0,
        height: 640,
        background: `radial-gradient(55% 420px at 50% 0%, rgba(${rgb},${a}) 0%, rgba(${rgb},0) 70%)`,
        pointerEvents: "none",
      }}
    />
  );
}
