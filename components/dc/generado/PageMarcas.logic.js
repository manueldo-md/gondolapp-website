/* GENERADO desde docs/sitio/diseno-v1/Marcas.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"0b0e76b25f4e74e77f6bc209adbab3de":"/gondolapp-assets/sitio/marca-01-tablero.webp","f3f6cc014f459f07311ff1882e06a295":"/gondolapp-assets/sitio/marca-05-campana-activa.webp","78b2887f5ce314adf7c84bb7e22980d6":"/gondolapp-assets/sitio/marca-02-resultados.webp","064a95b71e08f0c47c73fb1a90c6304f":"/gondolapp-assets/sitio/marca-03-mapa.webp"};

const IMG = { mDash: "/gondolapp-assets/sitio/marca-01-tablero.webp", mDet: "/gondolapp-assets/sitio/marca-05-campana-activa.webp", mRes: "/gondolapp-assets/sitio/marca-02-resultados.webp", mMapa: "/gondolapp-assets/sitio/marca-03-mapa.webp" };
const CFG = [
  { n: '01', t: 'Nombre, categoría y zona', d: 'Nombrás la campaña, elegís la categoría y los SKUs que querés seguir, y definís la zona: provincia, ciudades o radio.', tags: ['Categoría', 'SKUs', 'Zona'] },
  { n: '02', t: 'Qué medir: el formulario', d: 'Armás los bloques de foto y sus preguntas. Cada pregunta se tipifica con la métrica que alimenta. Cinco tipos: múltiple, única, sí/no, número y texto.', tags: ['Bloques de foto', 'Preguntas tipificadas', 'Obligatorias u opcionales'] },
  { n: '03', t: 'Modalidad', d: 'Única, con objetivo y tope de comercios, o seguimiento continuo con visitas por semana y sin vencimiento.', tags: ['Única', 'Continua', 'Visitas por semana'] },
  { n: '04', t: 'Quién ejecuta', d: 'Cada campaña la releva un ejecutor: tu equipo (invitado por link), una distribuidora con la que trabajás o tu repositora.', tags: ['Equipo propio', 'Distribuidoras', 'Repositora'] },
  { n: '05', t: 'Presupuesto y reserva', d: 'Ves el costo estimado según ejecutor y tope. Al enviar a ejecución, el saldo se reserva; si la ejecutora rechaza o pide cambios, vuelve a tu cuenta.', tags: ['Costo estimado', 'Reserva', 'Saldo'] },
  { n: '06', t: 'Activa y en seguimiento', d: 'Con equipo propio arranca al instante. Con distribuidora, cuando ella la acepta. Desde ahí, todo en vivo: inicio, fin, tope global, mínimo de comercios y zonas.', tags: ['Activa', 'En vivo'], img: IMG.mDet }
];
class Component extends DCLogic {
  state = { cfg: 5 };
  renderVals() {
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const s = this.state;
    const cfg = CFG.map((c, i) => ({ n: c.n, t: c.t, on: i === s.cfg, pick: () => this.setState({ cfg: i }), fg: i === s.cfg ? primary : '#0F1A14' }));
    const st = CFG[s.cfg];
    return { primary, mint, imgDash: IMG.mDash, imgRes: IMG.mRes, imgMapa: IMG.mMapa, cfg, step: { ...st, hasImg: !!st.img, img: st.img || '' }, stepTags: st.tags.map((t) => ({ t })) };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8"};
