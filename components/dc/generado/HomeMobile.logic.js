/* GENERADO desde docs/sitio/diseno-v1/Mobile.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"b9cbd8c75c2032bc3140a3a2185c656e":"/gondolapp-assets/sitio/mision-10-camara.webp","426885ab8a3107e335949077c0e31551":"/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp","a4223f94c675befde883a92782573eea":"/gondolapp-assets/sitio/mision-05-pregunta-si-no.webp","f61a4400cc002a7d1d42ad13e5b43d42":"/gondolapp-assets/sitio/mision-08-pregunta-numero.webp","cc7dc9ea85bd13bee10ed1f806fd6fb8":"/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp","b40cbbd86435bc5cc22c9bd387460bc3":"/gondolapp-assets/sitio/mision-11-resumen.webp","e0f53008a3b127ea90cb53f86011ad51":"/gondolapp-assets/sitio/mision-12-completada.webp","db97c4257f6465269032ab2ea9862373":"/gondolapp-assets/sitio/mision-03-elegir-comercio.webp","0b0e76b25f4e74e77f6bc209adbab3de":"/gondolapp-assets/sitio/marca-01-tablero.webp","f3f6cc014f459f07311ff1882e06a295":"/gondolapp-assets/sitio/marca-05-campana-activa.webp","78b2887f5ce314adf7c84bb7e22980d6":"/gondolapp-assets/sitio/marca-02-resultados.webp","064a95b71e08f0c47c73fb1a90c6304f":"/gondolapp-assets/sitio/marca-03-mapa.webp","db4a7f9fd75447b6514411ccd6d344bc":"/gondolapp-assets/sitio/distri-01-en-curso.webp","8ba713ff43103cde2a34034490239525":"/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp","ad0cf52d314e931f11de8ca214f8634d":"/gondolapp-assets/sitio/distri-03-red-invitar.webp","c31303a173707b558cbfad98165c0e4f":"/gondolapp-assets/sitio/repo-01-inicio.webp","23ff41435ac0779cd9a5d99d22e1dccd":"/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp","d48c58bab777b20755c277eb7ae89b0e":"/gondolapp-assets/sitio/repo-03-invitar-equipo.webp","85b9a33f6d31b1ca392499099b0d57e9":"/gondolapp-assets/sitio/mision-01-campanas.webp","86d24c8d6c34f4d10e541762f950e55a":"/gondolapp-assets/sitio/mision-02-campana.webp","11846f07b9756d7606cc06b21c11aeea":"/gondolapp-assets/sitio/campo-08-mi-album.webp","cda01b37446c510758d096a7529df610":"/gondolapp-assets/sitio/campo-07-perfil-puntos.webp"};
import { enviarDemo } from "@/lib/dc/demo";

const IMG = {
  aCam: "/gondolapp-assets/sitio/mision-10-camara.webp", aUbic: "/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp", aSiNo: "/gondolapp-assets/sitio/mision-05-pregunta-si-no.webp", aNum: "/gondolapp-assets/sitio/mision-08-pregunta-numero.webp", aMulti: "/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp", aConf: "/gondolapp-assets/sitio/mision-11-resumen.webp", aDone: "/gondolapp-assets/sitio/mision-12-completada.webp", aActiv: "/gondolapp-assets/sitio/mision-03-elegir-comercio.webp",
  mDash: "/gondolapp-assets/sitio/marca-01-tablero.webp", mDet: "/gondolapp-assets/sitio/marca-05-campana-activa.webp", mRes: "/gondolapp-assets/sitio/marca-02-resultados.webp", mMapa: "/gondolapp-assets/sitio/marca-03-mapa.webp",
  dDash: "/gondolapp-assets/sitio/distri-01-en-curso.webp", dCamp: "/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp", dGond: "/gondolapp-assets/sitio/distri-03-red-invitar.webp",
  rDash: "/gondolapp-assets/sitio/repo-01-inicio.webp", rGond: "/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp", rFix: "/gondolapp-assets/sitio/repo-03-invitar-equipo.webp",
  gCamp: "/gondolapp-assets/sitio/mision-01-campanas.webp", gDet: "/gondolapp-assets/sitio/mision-02-campana.webp", gLog: "/gondolapp-assets/sitio/campo-08-mi-album.webp", gPerf: "/gondolapp-assets/sitio/campo-07-perfil-puntos.webp"
};
const EXECS = [
  { t: 'Mi equipo', how: 'Tu equipo entra con un link de invitación y carga cada misión desde el celular.', data: 'Completos' },
  { t: 'Mis distribuidoras', how: 'Los gondoleros de las distribuidoras con las que trabajás la ven en su recorrido.', data: 'Ubicación' },
  { t: 'Una repositora', how: 'El equipo de tu repositora la releva en sus visitas.', data: 'Completos' }
];
const MODES = [{ t: 'Campaña única', badge: 'Única', how: 'Corre hasta llegar al objetivo o al tope de comercios.' }, { t: 'Seguimiento continuo', badge: 'Continua', how: 'Sin vencimiento, con visitas por semana. Ves el último estado de cada comercio.' }];
const METRICS = [
  { id: 'presencia', t: 'Presencia', q: '¿Están presentes estos SKUs?', type: 'MÚLTIPLE', kind: 'chips', opts: ['SKU A', 'SKU B', 'SKU C'] },
  { id: 'quiebre', t: 'Quiebre', q: '¿Hay algún SKU en falta?', type: 'SÍ / NO', kind: 'yesno' },
  { id: 'precio', t: 'Precio', q: 'Precio del SKU principal', type: 'NÚMERO', kind: 'input', ph: '$ 0' },
  { id: 'frentes', t: 'Frentes', q: 'Cantidad de frentes de tu marca', type: 'NÚMERO', kind: 'input', ph: '0' },
  { id: 'exhibicion', t: 'Exhibición / POP', q: '¿Hay exhibición adicional o material POP?', type: 'ÚNICA', kind: 'chips', opts: ['Punta de góndola', 'Exhibidor', 'Afiche', 'Ninguno'] }
];
const ROLES = [
  { tab: 'Marcas', kicker: 'Marca', color: '#5B4BD6', href: "/marcas", cta: 'Todo para marcas', img: IMG.mRes, alt: 'Resultados de una campaña de marca', title: 'Todas tus campañas y zonas en un solo tablero.', body: 'Cada respuesta se clasifica con lo que mide, así campañas distintas alimentan el mismo panel y ves la evolución de tu marca en el punto de venta.', bullets: ['Campañas únicas o de seguimiento continuo', 'Tu equipo, una distribuidora o tu repositora', 'Presencia, quiebre, frentes, precio y exhibición', 'Cada dato con su respaldo', 'Reportes descargables y mapa de cobertura'] },
  { tab: 'Distribuidoras', kicker: 'Distribuidora', color: '#C4871F', href: "/distribuidoras", cta: 'Todo para distribuidoras', img: IMG.dGond, alt: 'Red de una distribuidora', title: 'Las campañas de tus marcas y las tuyas, en un solo panel.', body: 'Ves dónde falta producto. Ejecutás las campañas de tus marcas con tu propia gente y lanzás campañas internas cuando quieras.', bullets: ['Panel sin costo, en vivo', 'Invitación por link o por código', 'Aprobás o pedís cambios a cada campaña de marca', 'Tu cartera protegida, siempre', 'Panel y campañas internas sin costo'] },
  { tab: 'Repositoras', kicker: 'Repositora', color: '#2F6FE0', href: "/repositoras", cta: 'Todo para repositoras', img: IMG.rGond, alt: 'Góndolas relevadas por el equipo de una repositora', title: 'Cada visita de tu equipo, en el panel de tu cliente.', body: 'Usá Gondolapp como soporte de tu servicio: cada visita con foto y respuestas, que tu cliente ve en su propio panel.', bullets: ['Las campañas de tus marcas, con tu equipo de calle', 'Tu cliente las ve en su panel', 'Tu equipo, invitado por link o por código', 'Sin costo: paga la marca que te contrata'] },
  { tab: 'Gondoleros', kicker: 'Gondolero · la app de campo', color: '#1F9D5A', href: "/red", cta: 'Hacer misiones', img: IMG.gLog, alt: 'Mi álbum y niveles en la app', phone: true, phones: [[IMG.gDet, 'Detalle de campaña'], [IMG.aConf, 'Resumen antes de enviar']], title: 'Lo que ya hacés en tu recorrido, ahora suma Puntos.', body: 'La app de campo: campañas de las distribuidoras a cuya red te sumaste, misión en 30 segundos y Puntos canjeables por productos.', bullets: ['100 Puntos por misión aprobada', 'Se instala desde un link, sin store', 'Niveles Casual, Activo y Pro', 'Mi álbum de figuritas y ranking del mes', 'Canje en tu distribuidora'] },
  { tab: 'Equipo de calle', kicker: 'Equipo de calle · la app de campo', color: '#E0702D', href: "/repositoras", cta: 'Para repositoras', img: IMG.gPerf, alt: 'Perfil en la app de campo', phone: true, phones: [[IMG.aCam, 'Cámara guiada'], [IMG.gPerf, 'Perfil']], title: 'La misma app, para el equipo de una repositora.', body: 'Tu equipo releva desde el celular en sus visitas: foto, respuestas, ubicación y hora. No suma Puntos: la app es gratis para quien releva.', bullets: ['Se instala desde un link, sin store', 'Foto, respuestas, ubicación y hora', 'Lo invitás por link o por código', 'La app es gratis para quien releva'] }
];
const STEPS = [
  { n: '01', t: 'Campaña', title: 'Definís qué medir, dónde y quién ejecuta.', desc: 'Elegís las preguntas, la zona, el objetivo y el tope de comercios. Única o de seguimiento continuo.', bullets: ['Formulario con 5 tipos de pregunta', 'Objetivo y tope de comercios', 'Equipo propio, distris o repositora'] },
  { n: '02', t: 'Misión', title: 'Quien está en la calle saca la foto y responde.', desc: 'En el recorrido de siempre, desde el celular. La foto sale con la ubicación y la hora, y el formulario guía cada respuesta.', bullets: ['Foto con ubicación y hora', 'Respuestas guiadas', 'Sin descargar nada del store'] },
  { n: '03', t: 'Validación', title: 'Cada misión se revisa antes de contar.', desc: 'Lo que llega a tu panel tiene respaldo: hora, respuestas, foto cuando la campaña la pide y la distancia al comercio si el teléfono la comparte.', bullets: ['Distancia al comercio, calculada en el servidor', 'Guía de inclinación para la foto', 'En campañas de red, aprobación de la distribuidora'] },
  { n: '04', t: 'Datos', title: 'Las respuestas se vuelven métricas.', desc: 'Cada pregunta mide algo y se suma al tablero de la marca: presencia, quiebre, frentes, precio, exhibición.', bullets: ['Métricas estándar entre campañas', 'Evolución mensual de tu marca', 'Mapa de cobertura'] },
  { n: '05', t: 'Acción', title: 'Del dato a la decisión.', desc: 'El último estado de cada comercio, con su foto, y cómo se mueve tu marca mes a mes. Descargás el reporte y lo llevás a la mesa.', bullets: ['Último estado de cada comercio', 'Evolución mensual de la marca', 'Reporte descargable'] }
];
const FAQ = [
  { label: 'Marcas', items: [
    { q: '¿Puedo usar a mi propio equipo?', a: 'Sí. Creás campañas internas e invitás a tu gente por link, sin límite de usuarios. Tu primera campaña interna es gratis.' },
    { q: '¿Y si trabajo con distribuidoras?', a: 'Las invitás con un link, o te invitan ellas. Sus gondoleros ven tu campaña en su app y la relevan en el recorrido que ya hacen.' },
    { q: '¿Qué datos del comercio veo?', a: 'Con tu equipo o una repositora, todo el detalle. Con la red de una distribuidora, la ubicación en el mapa; su cartera queda protegida.' },
    { q: '¿Tiene inteligencia artificial?', a: 'Hoy las métricas salen de las respuestas validadas de cada misión, con la foto de respaldo.' }
  ] },
  { label: 'Distribuidoras', items: [
    { q: '¿Me cuesta algo?', a: 'El panel no tiene costo, y las campañas internas tampoco.' },
    { q: '¿Otra distribuidora puede ver mis datos?', a: 'Nunca. Cada distribuidora ve solo lo suyo, y la marca ve la ubicación y las fotos de sus campañas, nunca tu cartera.' },
    { q: '¿Qué pasa con las fotos truchas?', a: 'Cada misión llega con la hora y las respuestas, y la distancia al comercio si el teléfono la comparte. Y vos aprobás cada misión antes de que cuente.' }
  ] },
  { label: 'Repositoras', items: [
    { q: '¿Para qué me sirve?', a: 'Para que tu cliente vea cada visita con foto y respuestas en su propio panel.' },
    { q: '¿Mi equipo paga algo por usar la app?', a: 'No. La app es gratis para quien releva.' }
  ] },
  { label: 'Gondoleros', items: [
    { q: '¿Tengo que descargar algo?', a: 'No del store. Es una app que se instala desde un link en segundos.' },
    { q: '¿Qué recibo por cada misión?', a: '100 Puntos por misión aprobada, canjeables por productos en tu distribuidora. Valor de referencia: 1 Punto = $ 10 en productos (Reglamento de Puntos).' }
  ] }
];
const MVIEWS = [
  { t: 'Marca', main: IMG.mRes, mainAlt: 'Resultados de una campaña de marca', phone: IMG.gCamp, phoneAlt: 'App de campo', cap: 'Panel de marca: resultados de campaña en vivo y la app de campo que alimenta todo.' },
  { t: 'Distribuidora', main: IMG.dGond, mainAlt: 'Red de gondoleros de una distribuidora', phone: IMG.gDet, phoneAlt: 'App de campo: detalle de campaña', cap: 'Panel de distribuidora: red de gondoleros y campañas de marcas por aprobar.' },
  { t: 'Repositora', main: IMG.rGond, mainAlt: 'Góndolas relevadas por su equipo', phone: IMG.gPerf, phoneAlt: 'App de campo: perfil', cap: 'Panel de repositora: góndolas relevadas por su equipo y el perfil en la app.' }
];
const ECO_TYPES = {
  marca: { t: 'Marca', c: '#5B4BD6', que: 'Carga saldo y lanza campañas: qué medir, dónde, con quién y hasta cuántos comercios.', fun: 'Financia la red. Decide con datos de presencia, quiebre, frentes, precio y exhibición.', val: 'Aporta el presupuesto que mueve la red y recibe el dato que antes no existía.' },
  equipo: { t: 'Equipo interno de la marca', c: '#5B4BD6', que: 'Vendedores, promotores o supervisores de la propia marca que relevan en campañas internas. Entran por un link; usuarios ilimitados.', fun: 'Toda misión entra, y la marca puede excluir la que no sirva. No suman Puntos. Ideal para seguimiento continuo.', val: 'Cobertura inmediata y el detalle completo de cada comercio. La primera campaña interna es gratis.' },
  distri: { t: 'Distribuidora', c: '#C4871F', que: 'Recibe campañas de sus marcas, las aprueba o pide cambios y las ejecuta con los gondoleros de su red.', fun: 'Aprueba cada misión de red antes de que cuente. Puede lanzar campañas internas para su equipo.', val: 'Trae la gente que ya recorre la calle y gana un argumento nuevo frente a sus marcas. No paga.' },
  repo: { t: 'Repositora', c: '#2F6FE0', que: 'Releva con su equipo de calle las campañas de las marcas con las que trabaja, que ven los resultados en su panel.', fun: 'Relevamiento profesional para las marcas con las que trabaja.', val: 'Convierte un servicio de confianza en un servicio con datos que el cliente ve en su panel.' },
  gond: { t: 'Gondolero', c: '#1F9D5A', que: 'En su recorrido habitual saca la foto de la góndola y responde dos o tres preguntas.', fun: 'Es el sensor de la red. Cada misión aprobada le acredita 100 Puntos, canjeables por productos en su distribuidora.', val: 'Genera el dato en 30 segundos sin cambiar su recorrido. La red existe gracias a él.' },
  fixer: { t: 'Equipo de calle', c: '#E0702D', que: 'Personal de la repositora que releva en sus visitas.', fun: 'Releva en las campañas de su repositora. No suma Puntos.', val: 'Cada visita queda con foto y respuestas en el panel del cliente.' },
  datos: { t: 'Lo que vuelve a la marca', c: '#0F1A14', que: 'Fotos validadas, respuestas, posición en el mapa y métricas por campaña, zona y comercio.', fun: 'Es el producto de la red: cada misión aprobada actualiza el panel de la marca al instante.', val: 'Decisiones con dato real del punto de venta: reponer, negociar, exhibir, cubrir.' }
};
const MNODES = [
  { id: 'marca', kind: 'marca', label: 'Marca', x: 175, y: 38 },
  { id: 'equipo', kind: 'equipo', label: 'Equipo interno', x: 62, y: 150 },
  { id: 'distri', kind: 'distri', label: 'Distribuidora', x: 175, y: 150 },
  { id: 'repo', kind: 'repo', label: 'Repositora', x: 292, y: 150 },
  { id: 'prom', kind: 'equipo', label: 'Promotores', x: 62, y: 262 },
  { id: 'gond', kind: 'gond', label: 'Gondoleros', x: 175, y: 262 },
  { id: 'fixer', kind: 'fixer', label: 'Equipo de calle', x: 292, y: 262 },
  { id: 'datos', kind: 'datos', label: 'Panel de la marca, en vivo', x: 175, y: 388 }
];
const MEDGES = [
  ['marca', 'equipo'], ['marca', 'distri'], ['marca', 'repo'],
  ['equipo', 'prom'], ['distri', 'gond'], ['repo', 'fixer'], ['distri', 'fixer'],
  ['prom', 'datos'], ['gond', 'datos'], ['fixer', 'datos']
];

class Component extends DCLogic {
  state = { menu: false, view: 0, exec: 0, mode: 1, mets: { presencia: true, quiebre: true, precio: true, frentes: false, exhibicion: false }, role: 0, step: 0, auto: true, faqTab: 0, faq: 0, eco: 'gond', sent: false };
  componentDidMount() {
    this.t2 = setInterval(() => { if (this.props.autoplay === false || !this.state.auto) return; this.setState({ step: (this.state.step + 1) % STEPS.length }); }, 4500);
  }
  componentWillUnmount() { clearInterval(this.t2); }
  renderVals() {
    const s = this.state;
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const autoplay = this.props.autoplay !== false;
    const sel = (a) => a ? { bg: '#0F1A14', fg: '#FFFFFF' } : { bg: '#FFFFFF', fg: '#0F1A14' };
    const views = MVIEWS.map((v, i) => ({ t: v.t, on: i === s.view, pick: () => this.setState({ view: i }), ...sel(i === s.view) }));
    const view = MVIEWS[s.view];
    const execs = EXECS.map((e, i) => ({ t: e.t, on: i === s.exec, pick: () => this.setState({ exec: i }), ...sel(i === s.exec) }));
    const modes = MODES.map((m, i) => ({ t: m.t, on: i === s.mode, pick: () => this.setState({ mode: i }), ...sel(i === s.mode) }));
    const metrics = METRICS.map((m) => { const a = !!s.mets[m.id]; return { t: m.t, on: a, sign: a ? '✓' : '+', toggle: () => this.setState({ mets: { ...this.state.mets, [m.id]: !this.state.mets[m.id] } }), bg: a ? mint : '#FFFFFF', fg: '#0F1A14' }; });
    const fields = METRICS.filter((m) => s.mets[m.id]).map((m) => ({ q: m.q, type: m.type, isChips: m.kind === 'chips', isYesNo: m.kind === 'yesno', isInput: m.kind === 'input', ph: m.ph || '', opts: (m.opts || []).map((t) => ({ t })) }));
    const roles = ROLES.map((r, i) => ({ tab: r.tab, on: i === s.role, pick: () => this.setState({ role: i }), ...sel(i === s.role) }));
    const r = ROLES[s.role];
    const role = { ...r, phone: !!r.phone, desk: !r.phone };
    const steps = STEPS.map((st, i) => { const a = i === s.step; return { n: st.n, t: st.t, on: a, ac: '#5B4BD6', pick: () => this.setState({ step: i, auto: false }), bg: a ? '#0F1A14' : '#FFFFFF', fg: a ? '#FFFFFF' : '#0F1A14', anim: a && s.auto && autoplay }; });
    const step = STEPS[s.step];
    const faqTabs = FAQ.map((f, i) => ({ label: f.label, on: i === s.faqTab, pick: () => this.setState({ faqTab: i, faq: 0 }), ...sel(i === s.faqTab) }));
    const faqs = FAQ[s.faqTab].items.map((q, i) => ({ q: q.q, a: q.a, open: i === s.faq, sign: i === s.faq ? '−' : '+', toggle: () => this.setState({ faq: this.state.faq === i ? -1 : i }) }));
    // ecosistema móvil
    const idx = {}; MNODES.forEach((n) => { idx[n.id] = n; });
    const pct = (x, y) => ({ l: (x / 350 * 100).toFixed(2) + '%', t: (y / 430 * 100).toFixed(2) + '%' });
    const light = { marca: '#EEEBFB', equipo: '#EEEBFB', distri: '#FBF1E0', repo: '#E7EFFC', gond: '#E3F5EA', fixer: '#FCEBE0', datos: '#0F1A14' };
    const ecoNodes = MNODES.map((n) => {
      const k = n.kind; const c = ECO_TYPES[k].c; const on = s.eco === n.id;
      const st = k === 'marca' ? { bg: c, fg: '#FFFFFF', bd: '0', fs: '15px', pad: '10px 14px' }
        : k === 'datos' ? { bg: '#0F1A14', fg: '#FFFFFF', bd: '0', fs: '13px', pad: '10px 14px' }
        : (k === 'distri' || k === 'repo') ? { bg: '#FFFFFF', fg: c, bd: '2px solid ' + c, fs: '13px', pad: '7px 11px' }
        : { bg: light[k], fg: '#0F1A14', bd: (k === 'equipo' ? '1.2px dashed ' : '1.2px solid ') + c, fs: '12px', pad: '6px 10px' };
      return { id: n.id, label: n.label, ...pct(n.x, n.y), ...st, ic: (k === 'marca' || k === 'datos') ? '#FFFFFF' : c, on,
        isFab: k === 'marca', isTruck: k === 'distri', isShelf: k === 'repo', isPerson: k === 'gond' || k === 'fixer' || k === 'equipo', isData: k === 'datos',
        sh: on ? '0 0 0 4px ' + c + '44, 0 10px 30px -12px rgba(15,26,20,.4)' : '0 1px 2px rgba(15,26,20,.08)',
        pick: () => this.setState({ eco: n.id }) };
    });
    const ecoEdges = MEDGES.map((e, i) => {
      const a = idx[e[0]], b = idx[e[1]];
      const my = (a.y + b.y) / 2;
      return { id: 'me' + i, d: 'M' + a.x + ' ' + a.y + ' C ' + a.x + ' ' + my + ', ' + b.x + ' ' + my + ', ' + b.x + ' ' + b.y, c: ECO_TYPES[b.kind].c, dur: (2.6 + (i * 7) % 4 * 0.5) + 's', beg: '-' + ((i * 13) % 5) + 's' };
    });
    const en = idx[s.eco] || MNODES[0]; const et = ECO_TYPES[en.kind];
    const tip = { label: en.label, t: et.t, que: et.que, fun: et.fun, val: et.val, color: et.c };
    return {
      primary, mint,
      menu: s.menu, menuOff: !s.menu, menuBg: s.menu ? '#0F1A14' : '#F2F4F2', menuFg: s.menu ? '#FFFFFF' : '#0F1A14', menuToggle: () => this.setState({ menu: !this.state.menu }), menuClose: () => this.setState({ menu: false }),
      views, view,
      tagsQue: ['Presencia por SKU', 'Quiebre de stock', 'Frentes', 'Precio en góndola', 'Exhibición / POP', 'Tipo de comercio', 'Cobertura por zona'].map((t) => ({ t })),
      tagsCon: ['Selección múltiple', 'Selección única', 'Sí / No', 'Número', 'Texto libre'].map((t) => ({ t })),
      tagsDe: ['Foto con su ubicación', 'Respuestas de quien releva', 'Lo que dice el comerciante', 'Datos abiertos del comercio'].map((t) => ({ t })),
      imgRes: IMG.mRes, imgMapa: IMG.mMapa, imgPh1: IMG.aUbic, imgPh2: IMG.aCam, imgPh3: IMG.aMulti, imgPh4: IMG.aDone,
      ecoNodes, ecoEdges, tip,
      execs, exec: EXECS[s.exec], modes, mode: MODES[s.mode], metrics, fields, fieldCount: fields.length, noFields: fields.length === 0,
      roles, role, roleBullets: r.bullets.map((t) => ({ t, c: r.color })), rolePhones: (r.phones || [[r.img, r.alt]]).map((p, i) => ({ src: p[0], alt: p[1], mt: ['28px', '0'][i] || '0' })),
      steps, step, stepBullets: step.bullets.map((t) => ({ t, ac: '#5B4BD6' })),
      faqTabs, faqs,
      sent: s.sent, sentOff: !s.sent, send: (e) => enviarDemo(e, () => this.setState({ sent: true })), reset: () => this.setState({ sent: false })
    };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8","autoplay":true};
