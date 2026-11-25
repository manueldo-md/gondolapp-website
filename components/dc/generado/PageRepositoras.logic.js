/* GENERADO desde docs/sitio/diseno-v1/Repositoras.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"c31303a173707b558cbfad98165c0e4f":"/gondolapp-assets/sitio/repo-01-inicio.webp","23ff41435ac0779cd9a5d99d22e1dccd":"/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp","d48c58bab777b20755c277eb7ae89b0e":"/gondolapp-assets/sitio/repo-03-invitar-equipo.webp"};

const IMG = { rDash: "/gondolapp-assets/sitio/repo-01-inicio.webp", rGond: "/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp", rFix: "/gondolapp-assets/sitio/repo-03-invitar-equipo.webp" };
const VISIT = [
  { n: '01', who: 'TU EQUIPO', t: 'Llega y la app lo ubica', d: 'Elige el comercio en su lista. Al llegar, la app calcula la distancia al comercio y la misión entra solo si está dentro del radio.' },
  { n: '02', who: 'TU EQUIPO', t: 'Saca la foto', d: 'La foto de la góndola, con la cámara guiada para que salga derecha.' },
  { n: '03', who: 'TU EQUIPO', t: 'Repone, frentea y responde', d: 'Hace su trabajo de reposición y completa el formulario: frentes, SKUs presentes, POP, precio.' },
  { n: '04', who: 'TU EQUIPO', t: 'Entrega la visita', d: 'La visita queda registrada con la hora, las respuestas y la foto, si la campaña la pide.' },
  { n: '05', who: 'TU CLIENTE', t: 'Lo ve en su panel', d: 'La visita aparece en el panel de tu cliente, con foto y respuestas. Sin que le mandes nada.' }
];
class Component extends DCLogic {
  renderVals() {
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    return { primary, mint, imgDash: IMG.rDash, imgGond: IMG.rGond, imgFix: IMG.rFix, visit: VISIT.map((v) => ({ ...v, c: v.who === 'TU CLIENTE' ? primary : '#4E5D53' })) };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8"};
