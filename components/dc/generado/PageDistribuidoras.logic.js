/* GENERADO desde docs/sitio/diseno-v1/Distribuidoras.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"db4a7f9fd75447b6514411ccd6d344bc":"/gondolapp-assets/sitio/distri-01-en-curso.webp","8ba713ff43103cde2a34034490239525":"/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp","ad0cf52d314e931f11de8ca214f8634d":"/gondolapp-assets/sitio/distri-03-red-invitar.webp"};

const IMG = { dDash: "/gondolapp-assets/sitio/distri-01-en-curso.webp", dCamp: "/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp", dGond: "/gondolapp-assets/sitio/distri-03-red-invitar.webp" };
const FLOW = [
  { n: '01', t: 'Te llega la propuesta', d: 'La marca envía la campaña con zona, formulario, objetivo y tope. Aparece en tu panel como pendiente de aprobación.', img: IMG.dCamp },
  { n: '02', t: 'Aceptás, pedís cambios o rechazás', d: 'Aceptás, pedís cambios o rechazás cada campaña antes de que llegue a tu gente. Si aceptás, la campaña aparece en la app de los gondoleros de tu red.', img: IMG.dCamp },
  { n: '03', t: 'Tu gente la ejecuta', d: 'Los gondoleros de tu red la ven en su recorrido, sacan la foto, responden y suman Puntos. Vos aprobás cada misión antes de que cuente.' },
  { n: '04', t: 'El relevamiento queda de tu lado', d: 'Lo usás como argumento frente a esa marca y otras.' }
];
class Component extends DCLogic {
  state = { flow: 0 };
  renderVals() {
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const s = this.state;
    const flow = FLOW.map((c, i) => ({ n: c.n, t: c.t, on: i === s.flow, pick: () => this.setState({ flow: i }), fg: i === s.flow ? primary : '#0F1A14' }));
    const st = FLOW[s.flow];
    return { primary, mint, imgDash: IMG.dDash, imgGond: IMG.dGond, flow, step: { ...st, hasImg: !!st.img, img: st.img || '' } };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8"};
