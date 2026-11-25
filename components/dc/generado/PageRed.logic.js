/* GENERADO desde docs/sitio/diseno-v1/Red.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"b9cbd8c75c2032bc3140a3a2185c656e":"/gondolapp-assets/sitio/mision-10-camara.webp","426885ab8a3107e335949077c0e31551":"/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp","cc7dc9ea85bd13bee10ed1f806fd6fb8":"/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp","b40cbbd86435bc5cc22c9bd387460bc3":"/gondolapp-assets/sitio/mision-11-resumen.webp","e0f53008a3b127ea90cb53f86011ad51":"/gondolapp-assets/sitio/mision-12-completada.webp","85b9a33f6d31b1ca392499099b0d57e9":"/gondolapp-assets/sitio/mision-01-campanas.webp","86d24c8d6c34f4d10e541762f950e55a":"/gondolapp-assets/sitio/mision-02-campana.webp","11846f07b9756d7606cc06b21c11aeea":"/gondolapp-assets/sitio/campo-08-mi-album.webp","cda01b37446c510758d096a7529df610":"/gondolapp-assets/sitio/campo-07-perfil-puntos.webp","d48c58bab777b20755c277eb7ae89b0e":"/gondolapp-assets/sitio/repo-03-invitar-equipo.webp"};

const IMG = { aCam: "/gondolapp-assets/sitio/mision-10-camara.webp", aUbic: "/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp", aMulti: "/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp", aConf: "/gondolapp-assets/sitio/mision-11-resumen.webp", aDone: "/gondolapp-assets/sitio/mision-12-completada.webp", gCamp: "/gondolapp-assets/sitio/mision-01-campanas.webp", gDet: "/gondolapp-assets/sitio/mision-02-campana.webp", gLog: "/gondolapp-assets/sitio/campo-08-mi-album.webp", gPerf: "/gondolapp-assets/sitio/campo-07-perfil-puntos.webp", rFix: "/gondolapp-assets/sitio/repo-03-invitar-equipo.webp" };
const HERO = [
  { t: 'Gondoleros', h: 'Lo que ya hacés en tu recorrido, ahora suma Puntos.', p: 'Sacás una foto de la góndola, respondés dos o tres preguntas y cada misión aprobada suma 100 Puntos, canjeables por productos en tu distribuidora.', cta: 'Quiero hacer misiones', phones: [{ t: 'Campañas disponibles', img: IMG.gCamp, mt: '48px' }, { t: 'Detalle de campaña', img: IMG.gDet, mt: '0' }, { t: 'Mi álbum y niveles', img: IMG.gLog, mt: '72px' }, { t: 'Mi perfil', img: IMG.gPerf, mt: '24px' }] }
];
const MISSION = [
  { n: '01', img: IMG.gDet, alt: 'Detalle de la campaña', t: 'Elegís la campaña', d: 'Ves las campañas de las distribuidoras a cuya red te sumaste. Cada una dice qué hay que hacer y cuántos Puntos suma.' },
  { n: '02', img: IMG.aUbic, alt: 'Validación de ubicación', t: 'Indicás el comercio', d: 'Lo buscás en tu lista o lo das de alta ahí mismo con el GPS. Tu distribuidora lo confirma después.' },
  { n: '03', img: IMG.aCam, alt: 'Cámara guiada: encuadre y nivel', t: 'Sacás la foto', d: 'La app te guía para que el celular esté derecho y registra la ubicación y la hora.' },
  { n: '04', img: IMG.aMulti, alt: 'Pregunta de selección múltiple', t: 'Respondés', d: 'Dos o tres preguntas guiadas: qué hay, qué falta, a qué precio. Múltiple, sí/no o número.' },
  { n: '05', img: IMG.aDone, alt: 'Misión completada', t: 'Enviás y se acredita', d: 'Tu distribuidora aprueba y se acreditan los 100 Puntos. Si la campaña pide un mínimo de comercios, se liberan todos juntos al llegar.' }
];
class Component extends DCLogic {
  state = { tab: 0 };
  renderVals() {
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const s = this.state;
    const tabs = HERO.map((h, i) => ({ t: h.t, on: i === s.tab, pick: () => this.setState({ tab: i }), bg: i === s.tab ? '#0F1A14' : 'transparent', fg: i === s.tab ? '#FFFFFF' : '#0F1A14' }));
    const hero = HERO[s.tab];
    return { primary, mint, tabs, hero, phones: hero.phones.map((p) => ({ ...p, hasImg: !!p.img, noImg: !p.img, img: p.img || '' })), mission: MISSION, imgLog: IMG.gLog, imgFix: IMG.rFix };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8"};
