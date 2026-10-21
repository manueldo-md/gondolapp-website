/* Góndola abstracta del teaser: datos de los estantes y cálculo de los
   retardos con que se enciende cada producto.

   La lupa recorre los cuatro estantes en zigzag en un ciclo de 11 s
   (ver @keyframes lens). Cada producto pasa de gris a color justo cuando
   la lupa lo cruza, y eso se consigue dándole a cada uno el mismo
   @keyframes reveal con un animation-delay distinto.

   Los retardos se calculan en vez de escribirse a mano: si cambian los
   anchos de los productos, se recalculan solos. La fórmula reproduce
   exactamente los valores del tablero. */

/* Geometría de la tarjeta, en píxeles, relativa al contenedor .shelves */
const LUPA_X0 = 44; // dónde arranca el centro de la lupa
const LUPA_X1 = 235; // dónde termina
const AREA_X0 = 6; // los estantes tienen padding 0 6px
const AREA_ANCHO = 267; // ancho útil para los productos

/* Ventanas de barrido de cada estante, leídas del @keyframes lens:
   el estante 1 se recorre entre 0% y 20% del ciclo de 11 s, el 2 entre
   25% y 45%, y así. Los impares van al revés. */
type Sentido = "derecha" | "izquierda";
const VENTANAS: { desde: number; hasta: number; sentido: Sentido }[] = [
  { desde: 0.0, hasta: 2.2, sentido: "derecha" },
  { desde: 2.75, hasta: 4.95, sentido: "izquierda" },
  { desde: 5.5, hasta: 7.7, sentido: "derecha" },
  { desde: 8.25, hasta: 10.45, sentido: "izquierda" },
];

export const CICLO = 11; // segundos

export type Producto = {
  flex: number;
  color?: string; // sin color = espaciador: ocupa lugar y no se enciende
  alto?: string;
};

export type Estante = { alto: number; items: Producto[] };

/* Los colores y proporciones son los del tablero. */
export const ESTANTES: Estante[] = [
  {
    alto: 44,
    items: [
      { flex: 1.2, color: "#E0702D" },
      { flex: 1.2, color: "#E0702D" },
      { flex: 1, color: "#5B4BD6" },
      { flex: 1, color: "#5B4BD6" },
      { flex: 0.8, color: "#2F6FE0", alto: "80%" },
      { flex: 0.8, color: "#2F6FE0", alto: "80%" },
      { flex: 1, color: "#C4871F", alto: "90%" },
      { flex: 1, color: "#C4871F", alto: "90%" },
      { flex: 1, color: "#C4871F", alto: "90%" },
    ],
  },
  {
    alto: 39,
    items: [
      { flex: 1, color: "#7EE2A8" },
      { flex: 1, color: "#7EE2A8" },
      { flex: 1, color: "#7EE2A8" },
      { flex: 1.4, color: "#F2F6F2", alto: "70%" },
      { flex: 1.4, color: "#F2F6F2", alto: "70%" },
      { flex: 1, color: "#A5B4FC", alto: "85%" },
      { flex: 1, color: "#A5B4FC", alto: "85%" },
      { flex: 1.2 }, // hueco al final del estante
    ],
  },
  {
    alto: 49,
    items: [
      { flex: 0.9, color: "#D64F3C" },
      { flex: 0.9, color: "#D64F3C" },
      { flex: 0.9, color: "#D64F3C" },
      { flex: 0.9, color: "#D64F3C" },
      { flex: 1.1, color: "#E8C547", alto: "75%" },
      { flex: 1.1, color: "#E8C547", alto: "75%" },
      { flex: 1, color: "#5B4BD6", alto: "90%" },
      { flex: 1, color: "#5B4BD6", alto: "90%" },
      { flex: 1, color: "#5B4BD6", alto: "90%" },
    ],
  },
  {
    alto: 36,
    items: [
      { flex: 1, color: "#2F6FE0" },
      { flex: 1, color: "#2F6FE0" },
      { flex: 1, color: "#2F6FE0" },
      { flex: 1, color: "#2F6FE0" },
      { flex: 1, color: "#C4871F", alto: "80%" },
      { flex: 1, color: "#C4871F", alto: "80%" },
      { flex: 1.3, color: "#E0702D", alto: "95%" },
      { flex: 1.3, color: "#E0702D", alto: "95%" },
    ],
  },
];

/* Cuándo le pasa la lupa por encima a cada producto del estante.
   El espaciador cuenta para repartir el ancho, pero no recibe retardo. */
export function retardos(estante: Estante, indice: number): (number | null)[] {
  const v = VENTANAS[indice];
  const total = estante.items.reduce((s, it) => s + it.flex, 0);
  const recorrido = LUPA_X1 - LUPA_X0;

  let acumulado = 0;
  return estante.items.map((it) => {
    const centro = acumulado + it.flex / 2;
    acumulado += it.flex;
    if (!it.color) return null;

    const x = AREA_X0 + (centro / total) * AREA_ANCHO;
    const bruto =
      v.sentido === "derecha" ? (x - LUPA_X0) / recorrido : (LUPA_X1 - x) / recorrido;
    const t = Math.min(1, Math.max(0, bruto));

    return v.desde + t * (v.hasta - v.desde);
  });
}
