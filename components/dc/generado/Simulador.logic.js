/* GENERADO desde docs/sitio/diseno-v1/Simulador.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"59a1cfa0f02ac8a67b3aa6b511dc4eb2":"/gondolapp-assets/sitio/editor-01-como-empezar.webp","e945eb2c1e9d3f9410adf04bcf45f7f9":"/gondolapp-assets/sitio/editor-04-quien-releva.webp","9e7e964e5d716e808fe04bd9bae5c238":"/gondolapp-assets/sitio/editor-05-modalidad.webp","5c179764d9bf1e0a90bd907664628419":"/gondolapp-assets/sitio/editor-06-que-medir.webp","bea3e66709ad171de1f416247e1e08ee":"/gondolapp-assets/sitio/editor-08-zona.webp","95f2e211504049b3c924584776ea7bf9":"/gondolapp-assets/sitio/editor-09-costo.webp","6555f29ee4dc364595adaa785b0dd458":"/gondolapp-assets/sitio/editor-02-elegir-idea.webp","894e710b9715f48e35b0b474b8cf82c4":"/gondolapp-assets/sitio/editor-07-objetivo-y-tope.webp","a4223f94c675befde883a92782573eea":"/gondolapp-assets/sitio/mision-05-pregunta-si-no.webp","1c869c2532aad057d2a8d7d3f450f26c":"/gondolapp-assets/sitio/mision-06-pregunta-unica.webp","cc7dc9ea85bd13bee10ed1f806fd6fb8":"/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp","f61a4400cc002a7d1d42ad13e5b43d42":"/gondolapp-assets/sitio/mision-08-pregunta-numero.webp","27039f1b3a67317d9fc378da78f75c3e":"/gondolapp-assets/sitio/mision-09-pregunta-texto.webp","85b9a33f6d31b1ca392499099b0d57e9":"/gondolapp-assets/sitio/mision-01-campanas.webp","86d24c8d6c34f4d10e541762f950e55a":"/gondolapp-assets/sitio/mision-02-campana.webp","db97c4257f6465269032ab2ea9862373":"/gondolapp-assets/sitio/mision-03-elegir-comercio.webp","426885ab8a3107e335949077c0e31551":"/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp","b9cbd8c75c2032bc3140a3a2185c656e":"/gondolapp-assets/sitio/mision-10-camara.webp","b40cbbd86435bc5cc22c9bd387460bc3":"/gondolapp-assets/sitio/mision-11-resumen.webp","e0f53008a3b127ea90cb53f86011ad51":"/gondolapp-assets/sitio/mision-12-completada.webp","8eea9eab20ea022a87c32cbcaea1109a":"/gondolapp-assets/sitio/mision-13-marca-resultados.webp"};

const B = (id) => BLOB[id];
const ED = [B('59a1cfa0f02ac8a67b3aa6b511dc4eb2'), B('e945eb2c1e9d3f9410adf04bcf45f7f9'), B('9e7e964e5d716e808fe04bd9bae5c238'), B('5c179764d9bf1e0a90bd907664628419'), B('bea3e66709ad171de1f416247e1e08ee'), B('95f2e211504049b3c924584776ea7bf9')];
const ED_IDEA = B('6555f29ee4dc364595adaa785b0dd458');
const ED_TOPE = B('894e710b9715f48e35b0b474b8cf82c4');
const STEPS = [
  { kick: 'Cómo empezar', t: 'Nueva campaña', h: 'Empezás de cero o elegís una de las ideas listas para usar, con sus preguntas ya armadas.' },
  { kick: 'Ejecución', t: '¿Quién va a relevar?', h: 'Un ejecutor por campaña.' },
  { kick: 'Ejecución', t: 'Modalidad', h: 'Una sola pasada, o seguimiento con visitas por semana y sin vencimiento.' },
  { kick: 'Qué medir', t: 'Las preguntas', h: 'Cada pregunta se tipifica con la métrica que alimenta. Elegí las de este ejemplo.' },
  { kick: 'Objetivos', t: 'Zona y objetivo', h: 'Dónde se releva y hasta cuántos comercios.' },
  { kick: 'Confirmar', t: 'Revisá y creá', h: 'Antes de mandarla ves el resumen y el costo estimado. El saldo se reserva al enviarla; lo que no se usa vuelve.' }
];
const IDEAS = [
  { t: '¿Dónde estás y dónde no?', d: 'En qué comercios está tu marca.', q: [0, 1] },
  { t: 'El faltante que te cuesta ventas', d: 'Qué productos faltan y dónde.', q: [0, 4] },
  { t: 'Tu precio en la calle', d: 'El precio real, comercio por comercio.', q: [0, 3] },
  { t: '¿Llegó el lanzamiento?', d: 'Si llegó, a qué precio y con su material.', q: [0, 2, 3] }
];
const EXECS = [
  { t: 'Con una Distribuidora', d: 'Los gondoleros de su red la relevan en su recorrido. La distribuidora aprueba cada misión antes de que cuente.' },
  { t: 'Mi propio equipo', d: 'Tu gente entra por un link. Toda misión entra y vos podés excluir la que no sirva.' },
  { t: 'Con una Repositora', d: 'Su equipo de calle la releva en sus visitas.' }
];
const MODES = [
  { t: 'Puntual', d: 'Una pasada, con objetivo y tope de comercios.' },
  { t: 'Seguimiento', d: 'Visitas por semana, sin vencimiento. Ves el último estado de cada comercio.' }
];
const QS = [
  { t: '¿Está el producto en la góndola?', tipo: 'Sí / No', img: B('a4223f94c675befde883a92782573eea') },
  { t: '¿Dónde está exhibido?', tipo: 'Única', img: B('1c869c2532aad057d2a8d7d3f450f26c') },
  { t: '¿Qué material de exhibición hay?', tipo: 'Múltiple', img: B('cc7dc9ea85bd13bee10ed1f806fd6fb8') },
  { t: '¿A qué precio está?', tipo: 'Número', img: B('f61a4400cc002a7d1d42ad13e5b43d42') },
  { t: '¿Algo más para contar de la góndola?', tipo: 'Texto', img: B('27039f1b3a67317d9fc378da78f75c3e') }
];
const ZONAS = ['Paraná', 'Concordia', 'Gualeguaychú', 'Concepción del Uruguay', 'Colón'];
const TOPES = [50, 100, 200, 500, 1000];
const TIERS = [[500, 350], [1500, 280], [3000, 220], [Infinity, 180]];
const fmt = (n) => '$ ' + Math.round(n).toLocaleString('es-AR');
function redPts(n) { let left = n, pts = 0; for (const [size, price] of TIERS) { if (left <= 0) break; const take = Math.min(left, size); pts += take * price; left -= take; } return pts; }
const PH_A = [
  { t: 'Campañas', d: 'Quien releva ve las campañas disponibles en su celular. Se instala desde un link, sin store.', img: B('85b9a33f6d31b1ca392499099b0d57e9') },
  { t: 'La campaña', d: 'Qué hay que hacer y qué fotos se piden. Toca «Nueva misión».', img: B('86d24c8d6c34f4d10e541762f950e55a') },
  { t: '¿En qué comercio estás?', d: 'Elige el comercio entre los cercanos, o registra uno nuevo.', img: B('db97c4257f6465269032ab2ea9862373') },
  { t: 'Ubicación validada', d: 'La app calcula la distancia al comercio. Después: «Continuar — Abrir cámara».', img: B('426885ab8a3107e335949077c0e31551') },
  { t: 'La foto', d: 'La cámara guiada ayuda a que la foto salga derecha.', img: B('b9cbd8c75c2032bc3140a3a2185c656e') }
];
const PH_Z = [
  { t: 'Resumen', d: 'Revisa la foto y las respuestas. «Repetir» o «Confirmar y enviar».', img: B('b40cbbd86435bc5cc22c9bd387460bc3') },
  { t: '¡Misión completada!', d: 'La misión queda enviada con la foto, las respuestas, la hora y la ubicación.', img: B('e0f53008a3b127ea90cb53f86011ad51') }
];
const sel = (on) => on ? { bg: '#0F1A14', fg: '#FFFFFF', bd: '#0F1A14' } : { bg: '#FFFFFF', fg: '#0F1A14', bd: '#D7DED8' };
class Component extends DCLogic {
  state = { part: 0, step: 0, start: 1, idea: 0, exec: 0, mode: 0, q: [true, true, false, true, false], zonas: [true, true, false, false, false], tope: 2, ph: 0 };
  phSteps() {
    const qs = QS.map((x, i) => ({ ...x, on: this.state.q[i] })).filter((x) => x.on).map((x) => ({ t: x.t, d: 'Pregunta de tipo ' + x.tipo.toLowerCase() + ', tal como la armó la marca. Después: «Continuar».', img: x.img }));
    return [...PH_A, ...qs, ...PH_Z];
  }
  renderVals() {
    const mint = this.props.mint ?? '#7EE2A8';
    const s = this.state;
    const set = (o) => () => this.setState(o);
    const parts = ['1 · La marca arma la campaña', '2 · El gondolero la hace', '3 · La marca lo ve'].map((t, i) => ({ t, on: i === s.part, pick: set({ part: i }), ...sel(i === s.part) }));
    const dots = STEPS.map((_, i) => ({ c: i <= s.step ? '#0F1A14' : '#E3E8E3' }));
    const st = STEPS[s.step];
    const starts = ['Empezar de cero', 'Elegir una idea'].map((t, i) => ({ t, on: i === s.start, pick: set({ start: i }), ...sel(i === s.start) }));
    const ideas = IDEAS.map((x, i) => ({ t: x.t, d: x.d, on: i === s.idea, pick: () => this.setState({ idea: i, q: QS.map((_, k) => x.q.includes(k)) }), ...sel(i === s.idea) }));
    const execs = EXECS.map((x, i) => ({ t: x.t, d: x.d, on: i === s.exec, pick: set({ exec: i }), ...sel(i === s.exec) }));
    const modes = MODES.map((x, i) => ({ t: x.t, d: x.d, on: i === s.mode, pick: set({ mode: i }), ...sel(i === s.mode) }));
    const qs = QS.map((x, i) => ({ t: x.t, tipo: x.tipo, on: s.q[i], pick: () => { const q = s.q.slice(); q[i] = !q[i]; if (q.some(Boolean)) this.setState({ q }); }, ...sel(s.q[i]) }));
    const zonas = ZONAS.map((t, i) => ({ t, on: s.zonas[i], pick: () => { const z = s.zonas.slice(); z[i] = !z[i]; if (z.some(Boolean)) this.setState({ zonas: z }); }, ...sel(s.zonas[i]) }));
    const n = TOPES[s.tope];
    const topes = TOPES.map((t, i) => ({ t: t.toLocaleString('es-AR'), on: i === s.tope, pick: set({ tope: i }), ...sel(i === s.tope) }));
    let costo;
    if (s.exec === 0) {
      const pts = redPts(n);
      costo = { total: fmt(pts * 10), nota: 'Hasta ' + n.toLocaleString('es-AR') + ' comercios con la red, en escalones de lista. Un comercio rechazado no se cobra; lo que no se usa vuelve a tu saldo. Precios más IVA.' };
    } else {
      const extra = Math.max(0, n - 200);
      const base = fmt(100000 + extra * 500);
      const pre = s.exec === 1 ? 'Tu primera campaña con tu equipo es gratis. Después: ' : '';
      costo = { total: base, nota: pre + 'mínimo de $ 100.000 con 200 misiones y $ 500 la adicional' + (s.mode === 1 ? '; en seguimiento, el mínimo se cobra una sola vez' : '') + '. Precios más IVA.' };
    }
    const zs = ZONAS.filter((_, i) => s.zonas[i]);
    const nq = s.q.filter(Boolean).length;
    const resumen = [
      { k: 'Cómo empezó', v: s.start === 1 ? 'Idea: ' + IDEAS[s.idea].t : 'De cero' },
      { k: 'Quién releva', v: EXECS[s.exec].t },
      { k: 'Modalidad', v: MODES[s.mode].t },
      { k: 'Preguntas', v: nq + (nq === 1 ? ' pregunta' : ' preguntas') + ' + foto' },
      { k: 'Zona', v: zs.join(', ') },
      { k: 'Objetivo', v: 'Hasta ' + n.toLocaleString('es-AR') + ' comercios' }
    ];
    const edImg = s.step === 0 && s.start === 1 ? ED_IDEA : (s.step === 4 && false ? ED_TOPE : ED[s.step]);
    const last = s.step === STEPS.length - 1;
    const phs = this.phSteps();
    const pi = Math.min(s.ph, phs.length - 1);
    const ph = phs[pi];
    const phDots = phs.map((x, i) => ({ n: String(i + 1), label: 'Paso ' + (i + 1) + ': ' + x.t, pick: set({ ph: i }), c: i === pi ? '#0F1A14' : (i < pi ? '#7EE2A8' : '#FFFFFF'), fg: i === pi ? '#FFFFFF' : '#0F1A14' }));
    const phLast = pi === phs.length - 1;
    const who = ['un gondolero de la red de la distribuidora', 'alguien de tu equipo', 'alguien del equipo de calle de tu repositora'][s.exec];
    const finalTxt = (s.exec === 0 ? 'Cuando la distribuidora aprueba la misión, ' : 'Apenas se envía, ') + 'aparece en Resultados de tu campaña: cada pregunta con sus respuestas y la galería de fotos. Descargás el reporte y lo llevás a la mesa.';
    return {
      mint, parts, isA: s.part === 0, isB: s.part === 1, isC: s.part === 2,
      dots, stepN: s.step + 1, stepKick: st.kick, stepTitle: st.t, stepHelp: st.h,
      s0: s.step === 0, s1: s.step === 1, s2: s.step === 2, s3: s.step === 3, s4: s.step === 4, s5: s.step === 5,
      starts, showIdeas: s.start === 1, ideas, execs, modes, qs, zonas, topes, topeLabel: 'Objetivo · hasta cuántos comercios', resumen, costo,
      edImg, edAlt: 'Editor de campañas de Gondolapp: ' + st.t,
      back: () => this.setState({ step: Math.max(0, s.step - 1) }), noBack: s.step === 0, backOp: s.step === 0 ? '0.4' : '1',
      next: () => last ? this.setState({ part: 1, ph: 0 }) : this.setState({ step: s.step + 1 }), nextLabel: last ? 'Mandar a aprobación' : 'Siguiente',
      ph, phKick: 'Paso ' + (pi + 1) + ' de ' + phs.length + ' · lo hace ' + who, phDots,
      phBack: () => pi === 0 ? this.setState({ part: 0 }) : this.setState({ ph: pi - 1 }),
      phNext: () => phLast ? this.setState({ part: 2 }) : this.setState({ ph: pi + 1 }), phNextLabel: phLast ? 'Ver lo que ve la marca' : 'Siguiente',
      finalTxt, imgRes: B('8eea9eab20ea022a87c32cbcaea1109a'),
      restart: () => this.setState({ part: 0, step: 0, ph: 0 })
    };
  }
}

export default Component;
export const DEFAULT_PROPS = {"mint":"#7EE2A8"};
