/* Sección "Privacidad" (walled garden): datos de los chips que viajan
   por el escenario y de la compuerta.

   Lo que se comparte lo decide el visitante con cuatro botones, así que
   los chips de Dist. Norte → Marca A se arman a partir de ese estado:
   el que está permitido cruza en ámbar y llega con ✓, el que no, va en
   rojo, choca contra la compuerta y rebota con ✕. */

export const VERDE = "#1F9D5A";
export const AMBAR = "#C4871F";
export const VIOLETA = "#5B4BD6";
export const ROJO = "#D64F3C";

export type Permisos = { ubic: boolean; fotos: boolean; nombre: boolean; dir: boolean };

export const PERMISOS_INICIALES: Permisos = {
  ubic: true, // siempre: la ubicación en el mapa no se puede apagar
  fotos: true,
  nombre: false,
  dir: false,
};

export type Chip = {
  id: string;
  label: string;
  color: string;
  x0: string;
  y0: string;
  x1: string;
  y1: string;
  xb: string;
  yb: string;
  pasa: boolean;
  dur: string;
  delay: string;
  /* Marca que aparece al final: ✓ verde si llegó, ✕ rojo si chocó.
     Los del campo no llevan ninguna. */
  marca?: { signo: string; color: string };
};

const OK = { signo: "✓", color: VERDE };
const NO = { signo: "✕", color: ROJO };

/* ── Campo → distribuidora: siempre pasa ───────────────────────── */
const CAMPO: [string, string, string][] = [
  ["foto", "20%", "0s"],
  ["ubicación", "32%", "2.2s"],
  ["respuesta", "20%", "4.4s"],
  ["foto", "62%", "1.1s"],
  ["precio", "74%", "3.3s"],
  ["ubicación", "62%", "5.5s"],
];

/* ── Dist. Norte → compuerta → Marca A: depende de los permisos ── */
const NORTE: [string, keyof Permisos | null, string][] = [
  ["ubicación", "ubic", "0s"],
  ["foto", "fotos", "1.6s"],
  ["nombre del comercio", "nombre", "3.2s"],
  ["dirección", "dir", "4.8s"],
  ["teléfono", null, "6.4s"], // el teléfono no cruza nunca
];

/* ── Dist. Sur → Marca B: fijo, para mostrar que cada una decide ─ */
const SUR: [string, boolean, string][] = [
  ["ubicación", true, "0.8s"],
  ["foto", true, "3.4s"],
  ["dirección", false, "5.6s"],
];

/* Un carril de datos de distribuidora a marca, a la altura `y`. */
function carril(
  prefijo: string,
  y: string,
  filas: [string, boolean, string][]
): Chip[] {
  return filas.map(([label, pasa, delay], i) =>
    pasa
      ? { id: prefijo + i, label, color: AMBAR, x0: "40%", y0: y, x1: "74%", y1: y, xb: "74%", yb: y, pasa: true, dur: "8s", delay, marca: OK }
      : { id: prefijo + i, label, color: ROJO, x0: "40%", y0: y, x1: "50%", y1: y, xb: "44%", yb: y, pasa: false, dur: "8s", delay, marca: NO }
  );
}

export function chips(p: Permisos): Chip[] {
  const campo: Chip[] = CAMPO.map(([label, y, delay], i) => ({
    id: "f" + i,
    label,
    color: VERDE,
    x0: "9%",
    y0: y,
    x1: "21%",
    y1: y,
    xb: "21%",
    yb: y,
    pasa: true,
    dur: "6.6s",
    delay,
  }));

  const norte = carril(
    "g",
    "33%",
    NORTE.map(([label, llave, delay]) => [label, llave ? p[llave] : false, delay])
  );

  return [...campo, ...norte, ...carril("s", "74%", SUR)];
}

/* ── Intentos que chocan contra el hierro ──────────────────────── */
export type Choque = {
  id: string;
  label: string;
  labelCorto: string;
  color: string;
  x0: string;
  y0: string;
  x1: string;
  y1: string;
  xb: string;
  yb: string;
  dur: string;
  delay: string;
};

export const CHOQUES: Choque[] = [
  { id: "h1", label: "Marca B → datos de Marca A ✕", labelCorto: "Marca B → datos de A ✕", color: VIOLETA, x0: "88%", y0: "86%", x1: "88%", y1: "52%", xb: "88%", yb: "62%", dur: "7s", delay: "0s" },
  { id: "h2", label: "Marca A → cartera de Dist. Norte ✕", labelCorto: "Marca A → cartera Norte ✕", color: VIOLETA, x0: "78%", y0: "22%", x1: "50.5%", y1: "22%", xb: "56%", yb: "22%", dur: "7s", delay: "2.3s" },
  { id: "h3", label: "Dist. Sur → cartera de Dist. Norte ✕", labelCorto: "Dist. Sur → cartera Norte ✕", color: AMBAR, x0: "38%", y0: "86%", x1: "38%", y1: "52%", xb: "38%", yb: "62%", dur: "7s", delay: "4.6s" },
];

/* ── Gondoleros y fixers, a la izquierda ───────────────────────── */
export const GONDOLEROS = [
  { label: "Gondolero 1", y: "20%" },
  { label: "Gondolero 2", y: "32%" },
  { label: "Gondolero 3", y: "62%" },
  { label: "Fixer", y: "74%" },
];

/* ── Filas de la compuerta y botones de abajo ──────────────────── */
export const COMPUERTA: { llave: keyof Permisos; corto: string; largo: string; fijo: boolean }[] = [
  { llave: "ubic", corto: "Ubicación", largo: "Ubicación en el mapa (siempre)", fijo: true },
  { llave: "fotos", corto: "Fotos", largo: "Fotos", fijo: false },
  { llave: "nombre", corto: "Nombre", largo: "Nombre del comercio", fijo: false },
  { llave: "dir", corto: "Dirección", largo: "Dirección", fijo: false },
];

/* ── Tarjetas de cierre ────────────────────────────────────────── */
export const CIERRES = [
  {
    icono: "fabrica" as const,
    fondo: "#EEEBFB",
    color: VIOLETA,
    titulo: "Las marcas no se ven entre sí.",
    texto:
      "Dos marcas pueden trabajar con la misma distribuidora y el mismo gondolero. Ninguna sabe que la otra existe en la plataforma: ni sus campañas, ni sus fotos, ni sus precios.",
  },
  {
    icono: "camion" as const,
    fondo: "#FBF1E0",
    color: AMBAR,
    titulo: "La cartera es de la distribuidora.",
    texto:
      "Los comercios, sus nombres, direcciones y teléfonos son de quien los recorre. Otra distribuidora nunca los ve. Una marca, solo lo que la distribuidora decida compartir.",
  },
  {
    icono: "escudo" as const,
    fondo: "#E3F5EA",
    color: VERDE,
    titulo: "Lo que cruza, lo elegís vos.",
    texto:
      "Al aceptar una campaña, la distribuidora marca con checks qué datos ve la marca. La ubicación en el mapa siempre pasa; el nombre y la dirección del comercio, solo si querés.",
  },
];
