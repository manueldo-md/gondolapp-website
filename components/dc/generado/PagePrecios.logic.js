/* GENERADO desde docs/sitio/diseno-v1/Precios.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {};

const TIERS = [[500, 350], [1500, 280], [3000, 220], [Infinity, 180]];
const PT = 10;
const fmt = (n) => '$\u202f' + Math.round(n).toLocaleString('es-AR');
function redCost(n) {
  let left = n, pts = 0; const parts = [];
  for (const [size, price] of TIERS) { if (left <= 0) break; const take = Math.min(left, size); pts += take * price; parts.push([take, price]); left -= take; }
  return { pts, parts };
}
class Component extends DCLogic {
  state = { mode: 0, size: 1 };
  renderVals() {
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const s = this.state;
    const sel = (a) => a ? { bg: '#0F1A14', fg: '#FFFFFF' } : { bg: '#FFFFFF', fg: '#0F1A14' };
    const modes = ['Red de distribuidoras', 'Mi equipo o repositora'];
    const sizesA = [100, 500, 1500, 3000, 6000];
    const sizesB = [100, 200, 400, 800, 1500];
    const sizes = s.mode === 0 ? sizesA : sizesB;
    const calcModes = modes.map((t, i) => ({ t, on: i === s.mode, pick: () => this.setState({ mode: i, size: 1 }), ...sel(i === s.mode) }));
    const calcSizes = sizes.map((n, i) => ({ t: n.toLocaleString('es-AR'), on: i === s.size, pick: () => this.setState({ size: i }), ...sel(i === s.size) }));
    const n = sizes[s.size];
    let calc, calcRows;
    if (s.mode === 0) {
      const c = redCost(n); const ars = c.pts * PT;
      calcRows = c.parts.map(([take, price]) => ({ k: take.toLocaleString('es-AR') + ' comercios a ' + price + ' pts', v: fmt(take * price * PT) }));
      calcRows.push({ k: 'Promedio por comercio', v: fmt(ars / n) });
      calcRows.push({ k: 'De eso, los 100 Puntos por misión', v: fmt(n * 100 * PT) });
      calc = { title: 'Campaña con red · ' + n.toLocaleString('es-AR') + ' comercios', total: fmt(ars), sub: (c.pts).toLocaleString('es-AR') + ' puntos reservados sobre el tope · lo no usado vuelve', note: 'Cada comercio paga el precio del escalón en que cae por su orden en la campaña. Un comercio rechazado no se cobra.' };
    } else {
      const extra = Math.max(0, n - 200); const ars = 100000 + extra * 500;
      calcRows = [{ k: 'Mínimo por campaña (200 misiones)', v: fmt(100000) }, { k: extra.toLocaleString('es-AR') + ' misiones adicionales a $ 500', v: fmt(extra * 500) }, { k: 'Promedio por misión', v: fmt(ars / n) }];
      calc = { title: 'Equipo propio o repositora · ' + n.toLocaleString('es-AR') + ' misiones', total: fmt(ars), sub: n <= 200 ? 'Entra dentro del mínimo · tu primera campaña puede ser gratis' : 'El mínimo se cobra al activar; las adicionales, del saldo en el momento', note: 'En campañas continuas el mínimo se cobra una sola vez. Usuarios ilimitados. Sin saldo, la campaña se pausa y se reanuda al recargar.' };
    }
    return { primary, mint, calcModes, calcSizes, calcUnitLabel: s.mode === 0 ? 'Comercios a relevar (tope)' : 'Misiones estimadas', calc, calcRows };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8"};
