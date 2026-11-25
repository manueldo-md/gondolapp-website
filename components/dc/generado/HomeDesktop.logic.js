/* GENERADO desde docs/sitio/diseno-v1/Main.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = {"5c179764d9bf1e0a90bd907664628419":"/gondolapp-assets/sitio/editor-06-que-medir.webp","8ba713ff43103cde2a34034490239525":"/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp","0b0e76b25f4e74e77f6bc209adbab3de":"/gondolapp-assets/sitio/marca-01-tablero.webp","7266e100027906ba705dd973988b7466":"/gondolapp-assets/sitio/marca-02-resultados-completa.webp","78b2887f5ce314adf7c84bb7e22980d6":"/gondolapp-assets/sitio/marca-02-resultados.webp","76246bac455a84c7372855aa7b78d396":"/gondolapp-assets/gondola/antes-hace-2-semanas.jpg","89b5663888b3e363799d77b09c9e0f71":"/gondolapp-assets/gondola/hoy.jpg","b9cbd8c75c2032bc3140a3a2185c656e":"/gondolapp-assets/sitio/mision-10-camara.webp","426885ab8a3107e335949077c0e31551":"/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp","a4223f94c675befde883a92782573eea":"/gondolapp-assets/sitio/mision-05-pregunta-si-no.webp","f61a4400cc002a7d1d42ad13e5b43d42":"/gondolapp-assets/sitio/mision-08-pregunta-numero.webp","cc7dc9ea85bd13bee10ed1f806fd6fb8":"/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp","b40cbbd86435bc5cc22c9bd387460bc3":"/gondolapp-assets/sitio/mision-11-resumen.webp","e0f53008a3b127ea90cb53f86011ad51":"/gondolapp-assets/sitio/mision-12-completada.webp","db97c4257f6465269032ab2ea9862373":"/gondolapp-assets/sitio/mision-03-elegir-comercio.webp","f3f6cc014f459f07311ff1882e06a295":"/gondolapp-assets/sitio/marca-05-campana-activa.webp","064a95b71e08f0c47c73fb1a90c6304f":"/gondolapp-assets/sitio/marca-03-mapa.webp","db4a7f9fd75447b6514411ccd6d344bc":"/gondolapp-assets/sitio/distri-01-en-curso.webp","ad0cf52d314e931f11de8ca214f8634d":"/gondolapp-assets/sitio/distri-03-red-invitar.webp","c31303a173707b558cbfad98165c0e4f":"/gondolapp-assets/sitio/repo-01-inicio.webp","23ff41435ac0779cd9a5d99d22e1dccd":"/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp","d48c58bab777b20755c277eb7ae89b0e":"/gondolapp-assets/sitio/repo-03-invitar-equipo.webp","85b9a33f6d31b1ca392499099b0d57e9":"/gondolapp-assets/sitio/mision-01-campanas.webp","86d24c8d6c34f4d10e541762f950e55a":"/gondolapp-assets/sitio/mision-02-campana.webp","11846f07b9756d7606cc06b21c11aeea":"/gondolapp-assets/sitio/campo-08-mi-album.webp","cda01b37446c510758d096a7529df610":"/gondolapp-assets/sitio/campo-07-perfil-puntos.webp"};

const IMG = {
  builder: "/gondolapp-assets/sitio/editor-06-que-medir.webp", aprob: "/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp", d1: "/gondolapp-assets/sitio/marca-01-tablero.webp", d2: "/gondolapp-assets/sitio/marca-02-resultados-completa.webp", d3: "/gondolapp-assets/sitio/marca-02-resultados.webp", antes: "/gondolapp-assets/gondola/antes-hace-2-semanas.jpg", hoy: "/gondolapp-assets/gondola/hoy.jpg",
  aCam: "/gondolapp-assets/sitio/mision-10-camara.webp", aUbic: "/gondolapp-assets/sitio/mision-04-ubicacion-validada.webp", aSiNo: "/gondolapp-assets/sitio/mision-05-pregunta-si-no.webp", aNum: "/gondolapp-assets/sitio/mision-08-pregunta-numero.webp", aMulti: "/gondolapp-assets/sitio/mision-07-pregunta-multiple.webp", aConf: "/gondolapp-assets/sitio/mision-11-resumen.webp", aDone: "/gondolapp-assets/sitio/mision-12-completada.webp", aActiv: "/gondolapp-assets/sitio/mision-03-elegir-comercio.webp",
  mDash: "/gondolapp-assets/sitio/marca-01-tablero.webp", mDet: "/gondolapp-assets/sitio/marca-05-campana-activa.webp", mRes: "/gondolapp-assets/sitio/marca-02-resultados.webp", mMapa: "/gondolapp-assets/sitio/marca-03-mapa.webp",
  dDash: "/gondolapp-assets/sitio/distri-01-en-curso.webp", dCamp: "/gondolapp-assets/sitio/distri-02-campana-por-aprobar.webp", dGond: "/gondolapp-assets/sitio/distri-03-red-invitar.webp",
  rDash: "/gondolapp-assets/sitio/repo-01-inicio.webp", rGond: "/gondolapp-assets/sitio/repo-02-fotos-relevadas.webp", rFix: "/gondolapp-assets/sitio/repo-03-invitar-equipo.webp",
  gCamp: "/gondolapp-assets/sitio/mision-01-campanas.webp", gDet: "/gondolapp-assets/sitio/mision-02-campana.webp", gLog: "/gondolapp-assets/sitio/campo-08-mi-album.webp", gPerf: "/gondolapp-assets/sitio/campo-07-perfil-puntos.webp"
};
const ECO = {"nodes": [{"id": "m0", "kind": "marca", "label": "ACME Alimentos", "x": 509, "y": 359, "rel": "Ejecuta con: Dist. Ríos del Sur, Repo Punto Góndola. Además, equipo interno de 3 personas. Nunca ve ni toca la red de otra marca."}, {"id": "m0t0", "kind": "equipo", "label": "Promotor Sur", "x": 385, "y": 290, "parent": "m0", "rel": "Equipo interno de ACME Alimentos."}, {"id": "m0t1", "kind": "equipo", "label": "Supervisora ER", "x": 394, "y": 244, "parent": "m0", "rel": "Equipo interno de ACME Alimentos."}, {"id": "m0t2", "kind": "equipo", "label": "Vendedor Zona 3", "x": 440, "y": 235, "parent": "m0", "rel": "Equipo interno de ACME Alimentos."}, {"id": "m1", "kind": "marca", "label": "Dulces Litoral", "x": 791, "y": 359, "rel": "Ejecuta con: Dist. Ríos del Sur, Dist. Centro, Repo Litoral, Dist. Norte. Además, equipo interno de 2 personas. Nunca ve ni toca la red de otra marca."}, {"id": "m1t0", "kind": "equipo", "label": "Promotora Norte", "x": 867, "y": 241, "parent": "m1", "rel": "Equipo interno de Dulces Litoral."}, {"id": "m1t1", "kind": "equipo", "label": "KAM Litoral", "x": 927, "y": 267, "parent": "m1", "rel": "Equipo interno de Dulces Litoral."}, {"id": "m2", "kind": "marca", "label": "Aceites del Río", "x": 791, "y": 641, "rel": "Ejecuta con: Repo Litoral, Dist. Norte, Repo Góndola Pro, Dist. Litoral. Nunca ve ni toca la red de otra marca."}, {"id": "m3", "kind": "marca", "label": "Snacks Norte", "x": 509, "y": 641, "rel": "Ejecuta con: Dist. Norte, Dist. Costa, Dist. Delta, Repo Punto Góndola. Nunca ve ni toca la red de otra marca."}, {"id": "rios", "kind": "distri", "label": "Dist. Ríos del Sur", "x": 619, "y": 151, "rel": "Trabaja con 2 marcas: ACME Alimentos, Dulces Litoral. Red de campo: 4 personas."}, {"id": "riosf0", "kind": "gond", "label": "HalcónSereno", "x": 514, "y": 32, "parent": "rios", "rel": "Vinculado a Dist. Ríos del Sur."}, {"id": "riosf1", "kind": "gond", "label": "BrisaDelLitoral", "x": 570, "y": -17, "parent": "rios", "rel": "Vinculado a Dist. Ríos del Sur."}, {"id": "riosf2", "kind": "gond", "label": "LunaDeParaná", "x": 639, "y": 13, "parent": "rios", "rel": "Vinculado a Dist. Ríos del Sur."}, {"id": "riosf3", "kind": "gond", "label": "GóndolaFirme", "x": 707, "y": -20, "parent": "rios", "rel": "Vinculado a Dist. Ríos del Sur."}, {"id": "centro", "kind": "distri", "label": "Dist. Centro", "x": 814, "y": 191, "rel": "Trabaja con una marca: Dulces Litoral. Red de campo: 3 personas."}, {"id": "centrof0", "kind": "gond", "label": "CeiboVeloz", "x": 800, "y": 37, "parent": "centro", "rel": "Vinculado a Dist. Centro."}, {"id": "centrof1", "kind": "gond", "label": "RangaBrillante", "x": 896, "y": 38, "parent": "centro", "rel": "Vinculado a Dist. Centro."}, {"id": "centrof2", "kind": "gond", "label": "CapitanHielo", "x": 950, "y": 116, "parent": "centro", "rel": "Vinculado a Dist. Centro."}, {"id": "rlit", "kind": "repo", "label": "Repo Litoral", "x": 959, "y": 336, "rel": "Trabaja con 2 marcas: Dulces Litoral, Aceites del Río. Red de campo: 3 personas."}, {"id": "rlitf0", "kind": "fixer", "label": "EstanteClaro", "x": 1034, "y": 200, "parent": "rlit", "rel": "Vinculado a Repo Litoral."}, {"id": "rlitf1", "kind": "fixer", "label": "FrenteoPro", "x": 1112, "y": 254, "parent": "rlit", "rel": "Vinculado a Repo Litoral."}, {"id": "rlitf2", "kind": "fixer", "label": "ManoRápida", "x": 1113, "y": 350, "parent": "rlit", "rel": "Vinculado a Repo Litoral."}, {"id": "norte", "kind": "distri", "label": "Dist. Norte", "x": 999, "y": 531, "rel": "Trabaja con 3 marcas: Dulces Litoral, Aceites del Río, Snacks Norte. Red de campo: 4 personas."}, {"id": "nortef0", "kind": "gond", "label": "ZorroAstuto", "x": 1134, "y": 447, "parent": "norte", "rel": "Vinculado a Dist. Norte."}, {"id": "nortef1", "kind": "gond", "label": "PumaDorado", "x": 1173, "y": 511, "parent": "norte", "rel": "Vinculado a Dist. Norte."}, {"id": "nortef2", "kind": "gond", "label": "TigreSereno", "x": 1131, "y": 574, "parent": "norte", "rel": "Vinculado a Dist. Norte."}, {"id": "nortef3", "kind": "gond", "label": "OsaPaciente", "x": 1152, "y": 646, "parent": "norte", "rel": "Vinculado a Dist. Norte."}, {"id": "rpro", "kind": "repo", "label": "Repo Góndola Pro", "x": 918, "y": 725, "rel": "Trabaja con una marca: Aceites del Río. Red de campo: 3 personas."}, {"id": "rprof0", "kind": "fixer", "label": "OrdenTotal", "x": 1072, "y": 744, "parent": "rpro", "rel": "Vinculado a Repo Góndola Pro."}, {"id": "rprof1", "kind": "fixer", "label": "ReponePlus", "x": 1051, "y": 836, "parent": "rpro", "rel": "Vinculado a Repo Góndola Pro."}, {"id": "rprof2", "kind": "fixer", "label": "PasilloClaro", "x": 963, "y": 873, "parent": "rpro", "rel": "Vinculado a Repo Góndola Pro."}, {"id": "lit", "kind": "distri", "label": "Dist. Litoral", "x": 741, "y": 838, "rel": "Trabaja con una marca: Aceites del Río. Red de campo: 3 personas."}, {"id": "litf0", "kind": "gond", "label": "NutriaÁgil", "x": 856, "y": 941, "parent": "lit", "rel": "Vinculado a Dist. Litoral."}, {"id": "litf1", "kind": "gond", "label": "GarzaBlanca", "x": 785, "y": 1005, "parent": "lit", "rel": "Vinculado a Dist. Litoral."}, {"id": "litf2", "kind": "gond", "label": "CajaLista", "x": 692, "y": 985, "parent": "lit", "rel": "Vinculado a Dist. Litoral."}, {"id": "costa", "kind": "distri", "label": "Dist. Costa", "x": 502, "y": 817, "rel": "Trabaja con una marca: Snacks Norte. Red de campo: 3 personas."}, {"id": "costaf0", "kind": "gond", "label": "YacaréCalmo", "x": 524, "y": 970, "parent": "costa", "rel": "Vinculado a Dist. Costa."}, {"id": "costaf1", "kind": "gond", "label": "CarpinchoFeliz", "x": 429, "y": 974, "parent": "costa", "rel": "Vinculado a Dist. Costa."}, {"id": "costaf2", "kind": "gond", "label": "HorneroPro", "x": 371, "y": 899, "parent": "costa", "rel": "Vinculado a Dist. Costa."}, {"id": "delta", "kind": "distri", "label": "Dist. Delta", "x": 347, "y": 675, "rel": "Trabaja con una marca: Snacks Norte. Red de campo: 3 personas."}, {"id": "deltaf0", "kind": "gond", "label": "SurubíVeloz", "x": 277, "y": 813, "parent": "delta", "rel": "Vinculado a Dist. Delta."}, {"id": "deltaf1", "kind": "gond", "label": "TeroAlerta", "x": 197, "y": 762, "parent": "delta", "rel": "Vinculado a Dist. Delta."}, {"id": "deltaf2", "kind": "gond", "label": "StockAlDía", "x": 192, "y": 667, "parent": "delta", "rel": "Vinculado a Dist. Delta."}, {"id": "rpg", "kind": "repo", "label": "Repo Punto Góndola", "x": 308, "y": 427, "rel": "Trabaja con 2 marcas: ACME Alimentos, Snacks Norte. Red de campo: 3 personas."}, {"id": "rpgf0", "kind": "fixer", "label": "ExhibeBien", "x": 163, "y": 483, "parent": "rpg", "rel": "Vinculado a Repo Punto Góndola."}, {"id": "rpgf1", "kind": "fixer", "label": "LinealOk", "x": 138, "y": 391, "parent": "rpg", "rel": "Vinculado a Repo Punto Góndola."}, {"id": "rpgf2", "kind": "fixer", "label": "GóndolaViva", "x": 198, "y": 318, "parent": "rpg", "rel": "Vinculado a Repo Punto Góndola."}], "edges": [["m0", "m0t0", "in", 150], ["m0", "m0t1", "in", 150], ["m0", "m0t2", "in", 150], ["m1", "m1t0", "in", 150], ["m1", "m1t1", "in", 150], ["m0", "rios", "out", 190], ["m1", "rios", "out", 190], ["rios", "riosf0", "in", 150], ["rios", "riosf1", "in", 150], ["rios", "riosf2", "in", 150], ["rios", "riosf3", "in", 150], ["m1", "centro", "out", 190], ["centro", "centrof0", "in", 150], ["centro", "centrof1", "in", 150], ["centro", "centrof2", "in", 150], ["m1", "rlit", "out", 190], ["m2", "rlit", "out", 190], ["rlit", "rlitf0", "in", 150], ["rlit", "rlitf1", "in", 150], ["rlit", "rlitf2", "in", 150], ["m1", "norte", "out", 190], ["m2", "norte", "out", 190], ["m3", "norte", "out", 190], ["norte", "nortef0", "in", 150], ["norte", "nortef1", "in", 150], ["norte", "nortef2", "in", 150], ["norte", "nortef3", "in", 150], ["m2", "rpro", "out", 190], ["rpro", "rprof0", "in", 150], ["rpro", "rprof1", "in", 150], ["rpro", "rprof2", "in", 150], ["m2", "lit", "out", 190], ["lit", "litf0", "in", 150], ["lit", "litf1", "in", 150], ["lit", "litf2", "in", 150], ["m3", "costa", "out", 190], ["costa", "costaf0", "in", 150], ["costa", "costaf1", "in", 150], ["costa", "costaf2", "in", 150], ["m3", "delta", "out", 190], ["delta", "deltaf0", "in", 150], ["delta", "deltaf1", "in", 150], ["delta", "deltaf2", "in", 150], ["m0", "rpg", "out", 190], ["m3", "rpg", "out", 190], ["rpg", "rpgf0", "in", 150], ["rpg", "rpgf1", "in", 150], ["rpg", "rpgf2", "in", 150], ["rios", "rpg", "out", 230]], "types": {"marca": {"t": "Marca", "que": "Carga saldo y lanza campañas: qué medir, dónde, con quién y hasta cuántos comercios.", "fun": "Financia la red. Decide con datos de presencia, quiebre, frentes, precio y exhibición.", "val": "Aporta el presupuesto que mueve la red y recibe el dato que antes no existía."}, "equipo": {"t": "Equipo interno de la marca", "que": "Vendedores, promotores o supervisores de la propia marca que relevan en campañas internas. Entran por un link de invitación; usuarios ilimitados.", "fun": "Toda misión entra, y la marca puede excluir la que no sirva. Relevan en las campañas internas de su empresa. No suman Puntos. Ideal para seguimiento continuo.", "val": "Cobertura inmediata y el detalle completo de cada comercio. La primera campaña interna es gratis; después se paga por campaña, con misiones incluidas."}, "distri": {"t": "Distribuidora", "que": "Recibe campañas de sus marcas, las aprueba o pide cambios y las ejecuta con los gondoleros de su red.", "fun": "Aprueba cada misión de red antes de que cuente. Puede lanzar campañas internas para su equipo.", "val": "Trae la gente que ya recorre la calle y gana un argumento nuevo frente a sus marcas. No paga."}, "repo": {"t": "Repositora", "que": "Releva con su equipo de calle las campañas de las marcas con las que trabaja, que ven los resultados en su panel.", "fun": "Relevamiento profesional para las marcas con las que trabaja.", "val": "Convierte un servicio de confianza en un servicio con datos que el cliente ve en su panel."}, "gond": {"t": "Gondolero", "que": "En su recorrido habitual saca la foto de la góndola y responde dos o tres preguntas.", "fun": "Es el sensor de la red. Cada misión aprobada le acredita 100 Puntos, canjeables por productos en su distribuidora.", "val": "Genera el dato en 30 segundos sin cambiar su recorrido. La red existe gracias a él."}, "fixer": {"t": "Equipo de calle", "que": "Personal de la repositora que releva en sus visitas.", "fun": "Releva en las campañas de su repositora. No suma Puntos.", "val": "Cada visita queda con foto y respuestas en el panel del cliente."}}, "colors": {"marca": "#5B4BD6", "equipo": "#5B4BD6", "distri": "#C4871F", "repo": "#2F6FE0", "gond": "#1F9D5A", "fixer": "#E0702D"}, "light": {"marca": "#EEEBFB", "equipo": "#EEEBFB", "distri": "#FBF1E0", "repo": "#E7EFFC", "gond": "#E3F5EA", "fixer": "#FCEBE0"}, "teams": {"m0": "Equipo interno · ACME Alimentos", "m1": "Equipo interno · Dulces Litoral"}};
const ECO_CONTENT = {
  marca: [['d','Presencia 89%'],['d','Reporte descargado'],['d','Campaña activa · 120 PDV'],['m','Cobertura · 16 ciudades'],['d','Precio · $ 2.890'],['d','Saldo cargado']],
  equipo: [['f','Foto · Almacén El Sol'],['f','Foto · Súper San Martín'],['d','Frentes: 14'],['d','Exhibición: sí'],['d','Misión enviada']],
  distri: [['d','Misión aprobada'],['d','Campaña aceptada'],['m','PDV confirmado · Colón'],['d','Gondolero vinculado']],
  repo: [['d','Visita completada'],['d','Visita en el panel del cliente']],
  gond: [['f','Foto · Kiosco El Trébol'],['f','Foto · Despensa Mary'],['f','Foto · Autoservicio La Esquina'],['d','Precio · $ 2.890'],['d','Quiebre: Coco 1 L'],['d','+100 pts'],['m','PDV nuevo · Villaguay'],['d','Presencia: sí']],
  fixer: [['f','Foto · Almacén Las Acacias'],['f','Foto · Supermercado Costanera'],['d','Misión entregada']]
};
const ECO_W = 1300, ECO_H = 1000;
function ecoTextW(label, fs, pad) { return label.length * fs * 0.56 + pad; }
const SLOTS = [
  { l: '7%', t: '0%', w: '70%', z: 1, r: '18px' },
  { l: '58%', t: '36%', w: '40%', z: 3, r: '16px' },
  { l: '0%', t: '27%', w: '17%', z: 4, r: '22px' }
];
const SLOT_PICK = [0, 1, 3];
const VIEWS = [
  { t: 'Marca', cap: 'Panel de marca: dashboard, resultados de campaña, mapa de cobertura y la app de campo que alimenta todo.', shots: [[IMG.mDash, 'Dashboard de marca'], [IMG.mRes, 'Resultados de una campaña'], [IMG.mMapa, 'Mapa de puntos de venta'], [IMG.gCamp, 'App de campo']] },
  { t: 'Distribuidora', cap: 'Panel de distribuidora: dashboard operativo, campañas de marcas por aprobar, red de gondoleros y la app de campo.', shots: [[IMG.dDash, 'Dashboard de distribuidora'], [IMG.dCamp, 'Campañas: pendientes y activas'], [IMG.dGond, 'Red: cómo se suma un gondolero'], [IMG.gDet, 'App de campo: detalle de campaña']] },
  { t: 'Repositora', cap: 'Panel de repositora: inicio, góndolas relevadas por su equipo, invitación del equipo y el perfil en la app.', shots: [[IMG.rDash, 'Dashboard de repositora'], [IMG.rGond, 'Góndolas relevadas por su equipo'], [IMG.rFix, 'Equipo: invitación y vinculación'], [IMG.gPerf, 'App de campo: perfil']] }
];
const EXECS = [
  { t: 'Mi equipo', how: 'Tu equipo entra con un link de invitación y carga cada misión desde el celular.', data: 'Completos' },
  { t: 'Distribuidoras', how: 'Los gondoleros de las distribuidoras con las que trabajás la ven en su recorrido.', data: 'Ubicación' },
  { t: 'Repositora', how: 'El equipo de tu repositora la releva en sus visitas.', data: 'Completos' }
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
  { tab: 'Distribuidoras', kicker: 'Distribuidora', color: '#C4871F', href: "/distribuidoras", cta: 'Todo para distribuidoras', img: IMG.dGond, alt: 'Red de gondoleros de una distribuidora', title: 'Las campañas de tus marcas y las tuyas, en un solo panel.', body: 'Ves dónde falta producto. Ejecutás las campañas de tus marcas con tu propia gente y lanzás campañas internas cuando quieras.', bullets: ['Panel sin costo, en vivo', 'Invitación por link o por código', 'Aprobás o pedís cambios a cada campaña de marca', 'Tu cartera protegida, siempre', 'Panel y campañas internas sin costo'] },
  { tab: 'Repositoras', kicker: 'Repositora', color: '#2F6FE0', href: "/repositoras", cta: 'Todo para repositoras', img: IMG.rGond, alt: 'Góndolas relevadas por el equipo de una repositora', title: 'Cada visita de tu equipo, en el panel de tu cliente.', body: 'Usá Gondolapp como soporte de tu servicio: cada visita con foto y respuestas, que tu cliente ve en su propio panel.', bullets: ['Las campañas de tus marcas, con tu equipo de calle', 'Tu cliente las ve en su panel', 'Tu equipo, invitado por link o por código', 'Sin costo: paga la marca que te contrata'] },
  { tab: 'Gondoleros', kicker: 'Gondolero · la app de campo', color: '#1F9D5A', href: "/red", cta: 'Hacer misiones', img: IMG.gLog, alt: 'Mi álbum y niveles en la app', phone: true, phones: [[IMG.gDet, 'Detalle de campaña y tus misiones'], [IMG.aConf, 'Resumen antes de enviar, con la foto'], [IMG.gLog, 'Mi álbum y niveles']], title: 'Lo que ya hacés en tu recorrido, ahora suma Puntos.', body: 'La app de campo: campañas de las distribuidoras a cuya red te sumaste, misión en 30 segundos y Puntos canjeables por productos.', bullets: ['100 Puntos por misión aprobada', 'Se instala desde un link, sin store', 'Niveles Casual, Activo y Pro', 'Mi álbum de figuritas y ranking del mes', 'Canje en tu distribuidora'] },
  { tab: 'Equipo de calle', kicker: 'Equipo de calle · la app de campo', color: '#E0702D', href: "/repositoras", cta: 'Para repositoras', img: IMG.gPerf, alt: 'Perfil en la app de campo', phone: true, phones: [[IMG.aUbic, 'Ubicación en el comercio'], [IMG.aCam, 'Cámara guiada: encuadre y nivel'], [IMG.gPerf, 'Perfil']], title: 'La misma app, para el equipo de una repositora.', body: 'Tu equipo releva desde el celular en sus visitas: foto, respuestas, ubicación y hora. No suma Puntos: la app es gratis para quien releva.', bullets: ['Se instala desde un link, sin store', 'Foto, respuestas, ubicación y hora', 'Lo invitás por link o por código', 'La app es gratis para quien releva'] }
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

class Component extends DCLogic {
  state = { eco: '', tick: 0, wSh: { ubic: true, nombre: false, dir: false, fotos: true }, view: 0, exec: 0, mode: 1, mets: { presencia: true, quiebre: true, precio: true, frentes: false, exhibicion: false }, role: 0, step: 0, auto: true, faqTab: 0, faq: 0, plat: false };
  componentDidMount() {
    this.ecoN = ECO.nodes.map((n) => ({ ...n, vx: 0, vy: 0, ph: Math.random() * 6.28, ph2: Math.random() * 6.28 }));
    this.ecoIdx = {}; this.ecoN.forEach((n, i) => { this.ecoIdx[n.id] = i; });
    this.ecoDrag = null;
    this.t3 = setInterval(() => this.ecoStep(), 33);
    this.t2 = setInterval(() => { if (this.props.autoplay === false || !this.state.auto) return; this.setState({ step: (this.state.step + 1) % STEPS.length }); }, 6000);
  }
  componentWillUnmount() { clearInterval(this.t2); clearInterval(this.t3); }
  ecoStep() {
    const N = this.ecoN, t = Date.now() / 1000;
    for (const n of N) {
      const g = n.kind === 'marca' ? 0.004 : 0.0012;
      n.fx = g * (ECO_W / 2 - n.x) + Math.cos(t * 0.7 + n.ph) * 0.45;
      n.fy = g * (ECO_H / 2 - n.y) + Math.sin(t * 0.6 + n.ph2) * 0.45;
    }
    for (let i = 0; i < N.length; i++) for (let j = i + 1; j < N.length; j++) {
      const a = N[i], b = N[j];
      let dx = a.x - b.x, dy = a.y - b.y; let d2 = dx * dx + dy * dy; if (d2 < 400) { d2 = 400; }
      const d = Math.sqrt(d2);
      const am = a.kind === 'marca', bm = b.kind === 'marca';
      const ae = a.kind === 'distri' || a.kind === 'repo', be = b.kind === 'distri' || b.kind === 'repo';
      const k = (am && bm) ? 42000 : (am || bm) ? 12000 : (ae && be) ? 9000 : (ae || be) ? 4200 : 2600;
      const f = k / d2; const ux = dx / d, uy = dy / d;
      a.fx += ux * f; a.fy += uy * f; b.fx -= ux * f; b.fy -= uy * f;
    }
    for (const e of ECO.edges) {
      const a = N[this.ecoIdx[e[0]]], b = N[this.ecoIdx[e[1]]];
      const dx = b.x - a.x, dy = b.y - a.y; const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const f = (d - e[3]) * 0.03; const ux = dx / d, uy = dy / d;
      a.fx += ux * f; a.fy += uy * f; b.fx -= ux * f; b.fy -= uy * f;
    }
    for (const n of N) {
      if (n.id === this.ecoDrag) { n.vx = 0; n.vy = 0; continue; }
      n.vx = (n.vx + n.fx) * 0.8; n.vy = (n.vy + n.fy) * 0.8;
      n.x = Math.min(ECO_W - 80, Math.max(80, n.x + n.vx));
      n.y = Math.min(ECO_H - 36, Math.max(36, n.y + n.vy));
    }
    // content particles
    const P = this.ecoP || (this.ecoP = []);
    for (const q of P) { q.age += 0.033; q.x += q.vx; q.y += q.vy; q.vx *= 0.995; q.vy *= 0.995; q.x += Math.sin(t * 1.3 + q.ph) * 0.15; }
    this.ecoP = P.filter((q) => q.age < q.life);
    if (this.ecoP.length < 26 && Math.random() < 0.11) {
      const src = N[Math.floor(Math.random() * N.length)];
      const pool = ECO_CONTENT[src.kind]; const item = pool[Math.floor(Math.random() * pool.length)];
      const ax = src.x - ECO_W / 2, ay = src.y - ECO_H / 2; const al = Math.sqrt(ax * ax + ay * ay) || 1;
      const ang = Math.atan2(ay, ax) + (Math.random() - 0.5) * 1.4; const sp = 0.45 + Math.random() * 0.35;
      this.ecoP.push({ id: Date.now() + Math.random(), x: src.x + Math.cos(ang) * 24, y: src.y + Math.sin(ang) * 24, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, age: 0, life: 5.5 + Math.random() * 2, ph: Math.random() * 6.28, kind: item[0], label: item[1], c: ECO.colors[src.kind] });
    }
    this.setState({ tick: this.state.tick + 1 });
  }
  ecoPoint(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: (p.clientX - r.left) / r.width * ECO_W, y: (p.clientY - r.top) / r.height * ECO_H };
  }
  renderVals() {
    const s = this.state;
    const primary = this.props.primary ?? '#3A5C42';
    const mint = this.props.mint ?? '#7EE2A8';
    const autoplay = this.props.autoplay !== false;
    const colors = ECO.colors, light = ECO.light;
    const N = this.ecoN || ECO.nodes;
    const pct = (x, y) => ({ l: (x / ECO_W * 100).toFixed(2) + '%', t: (y / ECO_H * 100).toFixed(2) + '%' });
    const dims = (n) => {
      if (n.kind === 'marca') return { fs: 15, pad: '10px 14px', r: '13px', w: ecoTextW(n.label, 15, 50) };
      if (n.kind === 'distri' || n.kind === 'repo') return { fs: 13, pad: '7px 12px', r: '11px', w: ecoTextW(n.label, 13, 45) };
      return { fs: 11, pad: '5px 10px', r: '13px', w: ecoTextW(n.label, 11, 39) };
    };
    const ecoNodes = N.map((n) => {
      const d = dims(n); const k = n.kind; const c = colors[k]; const hov = s.eco === n.id;
      const st = k === 'marca' ? { bg: c, fg: '#FFFFFF', bd: '0', dot: 'none' }
        : (k === 'distri' || k === 'repo') ? { bg: '#FFFFFF', fg: c, bd: '2px solid ' + c, dot: 'none' }
        : { bg: light[k], fg: '#0F1A14', bd: (k === 'equipo' ? '1.2px dashed ' : '1.2px solid ') + c, dot: 'block' };
      const ic = k === 'marca' ? '#FFFFFF' : c; const isz = k === 'marca' ? '16px' : (k === 'distri' || k === 'repo') ? '15px' : '13px';
      return { id: n.id, label: n.label, ...pct(n.x, n.y), fs: d.fs + 'px', pad: d.pad, r: d.r, c, ...st, ic, is: isz,
        isFab: k === 'marca', isTruck: k === 'distri', isShelf: k === 'repo', isPerson: k === 'gond' || k === 'fixer' || k === 'equipo',
        sh: hov ? '0 0 0 4px ' + c + '44, 0 10px 30px -12px rgba(15,26,20,.4)' : '0 1px 2px rgba(15,26,20,.08)',
        down: (e) => { if (e.preventDefault) e.preventDefault(); this.ecoDrag = n.id; },
        enter: () => this.setState({ eco: n.id }) };
    });
    const ecoEdges = ECO.edges.map((e, i) => {
      const A = N[this.ecoIdx ? this.ecoIdx[e[0]] : 0], B = N[this.ecoIdx ? this.ecoIdx[e[1]] : 0];
      const src = e[2] === 'out' ? A : B, dst = e[2] === 'out' ? B : A;
      const dx = dst.x - src.x, dy = dst.y - src.y; const len = Math.sqrt(dx * dx + dy * dy);
      return { ...pct(src.x, src.y), w: (len / ECO_W * 100).toFixed(2) + '%', a: (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + 'deg', c: colors[dst.kind], pd: (3 + (i * 7) % 5) + 's', beg: '-' + ((i * 13) % 7) + 's' };
    });
    const ecoLabels = Object.keys(ECO.teams).map((mid) => {
      const ts = N.filter((n) => n.kind === 'equipo' && n.parent === mid); const m = N[this.ecoIdx ? this.ecoIdx[mid] : 0];
      const cx = ts.reduce((a, n) => a + n.x, 0) / ts.length, cy = ts.reduce((a, n) => a + n.y, 0) / ts.length;
      const ox = cx - m.x, oy = cy - m.y; const ol = Math.sqrt(ox * ox + oy * oy) || 1;
      return { label: ECO.teams[mid], ...pct(cx + ox / ol * 52, cy + oy / ol * 52) };
    });
    const ecoP = (this.ecoP || []).map((q) => {
      const fi = Math.min(1, q.age / 0.6), fo = Math.min(1, (q.life - q.age) / 1.6); const op = Math.min(fi, fo) * 0.95;
      const sc = 0.7 + 0.3 * fi - 0.1 * (1 - fo);
      return { id: q.id, ...pct(q.x, q.y), op: op.toFixed(2), sc: sc.toFixed(2), label: q.label, c: q.c, bd: q.c + '66', isFoto: q.kind === 'f', isMapa: q.kind === 'm' };
    });
    const hvOff = () => this.setState({ eco: '' });
    const ecoMove = (e) => { if (!this.ecoDrag) return; const p = this.ecoPoint(e); const n = this.ecoN[this.ecoIdx[this.ecoDrag]]; n.x = Math.min(ECO_W - 80, Math.max(80, p.x)); n.y = Math.min(ECO_H - 36, Math.max(36, p.y)); };
    const ecoUp = () => { this.ecoDrag = null; };
    const en = N[this.ecoIdx ? (this.ecoIdx[s.eco] ?? 0) : 0]; const et = ECO.types[en.kind]; const ed = dims(en);
    const right = en.x < ECO_W / 2;
    const tp = pct(right ? en.x + ed.w / 2 + 16 : en.x - ed.w / 2 - 16, en.y);
    const tip = { label: en.label, rel: en.rel, t: et.t, que: et.que, fun: et.fun, val: et.val, color: colors[en.kind], l: tp.l, t2: tp.t, tx: right ? '0' : '-100%', ty: en.y / ECO_H < 0.22 ? '0' : (en.y / ECO_H > 0.78 ? '-100%' : '-50%') };
    const tipOp = s.eco ? '1' : '0';
    const sel = (a) => a ? { bg: '#0F1A14', fg: '#FFFFFF' } : { bg: '#FFFFFF', fg: '#0F1A14' };
    const views = VIEWS.map((v, i) => ({ t: v.t, on: i === s.view, pick: () => this.setState({ view: i }), ...sel(i === s.view) }));
    const view = VIEWS[s.view];
    const shots = SLOT_PICK.map((k, i) => ({ src: view.shots[k][0], alt: view.shots[k][1], ...SLOTS[i] }));
    const execs = EXECS.map((e, i) => ({ t: e.t, on: i === s.exec, pick: () => this.setState({ exec: i }), ...sel(i === s.exec) }));
    const modes = MODES.map((m, i) => ({ t: m.t, on: i === s.mode, pick: () => this.setState({ mode: i }), ...sel(i === s.mode) }));
    const metrics = METRICS.map((m) => { const a = !!s.mets[m.id]; return { t: m.t, on: a, sign: a ? '✓' : '+', toggle: () => this.setState({ mets: { ...this.state.mets, [m.id]: !this.state.mets[m.id] } }), bg: a ? mint : '#FFFFFF', fg: '#0F1A14' }; });
    const fields = METRICS.filter((m) => s.mets[m.id]).map((m) => ({ q: m.q, type: m.type, isChips: m.kind === 'chips', isYesNo: m.kind === 'yesno', isInput: m.kind === 'input', ph: m.ph || '', opts: (m.opts || []).map((t) => ({ t })) }));
    const roles = ROLES.map((r, i) => ({ tab: r.tab, on: i === s.role, pick: () => this.setState({ role: i }), ...sel(i === s.role) }));
    const r = ROLES[s.role];
    const role = { ...r, phone: !!r.phone, desk: !r.phone };
    const steps = STEPS.map((st, i) => { const a = i === s.step; return { n: st.n, t: st.t, on: a, ac: '#5B4BD6', pick: () => this.setState({ step: i, auto: false }), bg: a ? '#0F1A14' : '#FFFFFF', fg: a ? '#FFFFFF' : '#0F1A14', anim: a && s.auto && autoplay }; });
    const step = { ...STEPS[s.step], isK1: s.step === 0, isK2: s.step === 1, isK3: s.step === 2, isK4: s.step === 3, isK5: s.step === 4 };
    const faqTabs = FAQ.map((f, i) => ({ label: f.label, on: i === s.faqTab, pick: () => this.setState({ faqTab: i, faq: 0 }), ...sel(i === s.faqTab) }));
    const faqs = FAQ[s.faqTab].items.map((q, i) => ({ q: q.q, a: q.a, open: i === s.faq, sign: i === s.faq ? '−' : '+', toggle: () => this.setState({ faq: this.state.faq === i ? -1 : i }) }));

    // muros / walled garden
    const sh = s.wSh;
    const wGond = [['Gondolero 1', '20%'], ['Gondolero 2', '32%'], ['Gondolero 3', '62%'], ['Gondolero 4', '74%']].map((g) => ({ label: g[0], t: g[1] }));
    const G = '#1F9D5A', A = '#C4871F', V = '#5B4BD6', R = '#D64F3C';
    const wParts = [];
    // campo -> distribuidora (siempre pasa)
    [['foto', '20%', '0s'], ['ubicación', '32%', '2.2s'], ['respuesta', '20%', '4.4s'], ['foto', '62%', '1.1s'], ['precio', '74%', '3.3s'], ['ubicación', '62%', '5.5s']].forEach((p, i) => wParts.push({ id: 'f' + i, label: p[0], c: G, x0: '9%', x1: '21%', y0: p[1], y1: p[1], xb: '21%', yb: p[1], anim: 'wFlow', dur: '6.6s', delay: p[2], mk: 'transparent', mkAnim: 'none', mkTxt: '' }));
    // distribuidora Norte -> compuerta -> Marca A (según checks)
    const gate = [['ubicación', true, '0s'], ['foto', !!sh.fotos, '1.6s'], ['nombre del comercio', !!sh.nombre, '3.2s'], ['dirección', !!sh.dir, '4.8s'], ['teléfono', false, '6.4s']];
    gate.forEach((p, i) => {
      if (p[1]) wParts.push({ id: 'g' + i, label: p[0], c: A, x0: '40%', x1: '74%', y0: '33%', y1: '33%', xb: '74%', yb: '33%', anim: 'wFlow', dur: '8s', delay: p[2], mk: '#1F9D5A', mkAnim: 'wOk', mkTxt: '✓' });
      else wParts.push({ id: 'g' + i, label: p[0], c: R, x0: '40%', x1: '50%', y0: '33%', y1: '33%', xb: '44%', yb: '33%', anim: 'wHit', dur: '8s', delay: p[2], mk: '#D64F3C', mkAnim: 'wBangP', mkTxt: '✕' });
    });
    // distribuidora Sur -> Marca B (fijo: pasa ubicación y foto, choca dirección)
    [['ubicación', true, '0.8s'], ['foto', true, '3.4s'], ['dirección', false, '5.6s']].forEach((p, i) => {
      if (p[1]) wParts.push({ id: 's' + i, label: p[0], c: A, x0: '40%', x1: '74%', y0: '74%', y1: '74%', xb: '74%', yb: '74%', anim: 'wFlow', dur: '8s', delay: p[2], mk: '#1F9D5A', mkAnim: 'wOk', mkTxt: '✓' });
      else wParts.push({ id: 's' + i, label: p[0], c: R, x0: '40%', x1: '50%', y0: '74%', y1: '74%', xb: '44%', yb: '74%', anim: 'wHit', dur: '8s', delay: p[2], mk: '#D64F3C', mkAnim: 'wBangP', mkTxt: '✕' });
    });
    const wHits = [
      { id: 'h1', label: 'Marca B → datos de Marca A ✕', c: V, x0: '88%', x1: '88%', y0: '86%', y1: '52%', xb: '88%', yb: '62%', dur: '7s', delay: '0s' },
      { id: 'h2', label: 'Marca A → cartera de Dist. Norte ✕', c: V, x0: '78%', x1: '50.5%', y0: '22%', y1: '22%', xb: '56%', yb: '22%', dur: '7s', delay: '2.3s' },
      { id: 'h3', label: 'Dist. Sur → cartera de Dist. Norte ✕', c: A, x0: '38%', x1: '38%', y0: '86%', y1: '52%', xb: '38%', yb: '62%', dur: '7s', delay: '4.6s' }
    ];
    const wGate = [['ubic', 'Ubicación', true], ['fotos', 'Fotos', !!sh.fotos], ['nombre', 'Nombre', !!sh.nombre], ['dir', 'Dirección', !!sh.dir]].map((r) => ({ label: r[1], sign: r[2] ? '✓' : '✕', fg: r[2] ? '#1F9D5A' : '#9AA3AE', bg: r[2] ? '#E3F5EA' : '#F2F4F7' }));
    const wToggles = [['ubic', 'Ubicación en el mapa', true], ['fotos', 'Fotos', false], ['nombre', 'Nombre del comercio', false], ['dir', 'Dirección', false]].map((t) => { const on = !!sh[t[0]]; const locked = t[2]; return { label: t[1] + (locked ? ' (siempre)' : ''), on, sign: on ? '✓' : '+', cursor: locked ? 'default' : 'pointer', bg: on ? '#0F1A14' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0F1A14', toggle: () => { if (locked) return; this.setState({ wSh: { ...this.state.wSh, [t[0]]: !this.state.wSh[t[0]] } }); } }; });
    return {
      wGond, wParts, wHits, wToggles, wGate,
      primary, mint,
      plat: s.plat, platBg: s.plat ? '#F2F6F2' : 'transparent', platOpen: () => this.setState({ plat: true }), platClose: () => this.setState({ plat: false }), platToggle: () => this.setState({ plat: !this.state.plat }),
      views, view, shots,
      tagsQue: ['Presencia por SKU', 'Quiebre de stock', 'Frentes', 'Precio en góndola', 'Exhibición / POP', 'Tipo de comercio', 'Cobertura por zona'].map((t) => ({ t })),
      tagsCon: ['Selección múltiple', 'Selección única', 'Sí / No', 'Número', 'Texto libre'].map((t) => ({ t })),
      tagsDe: ['Foto de góndola con su ubicación', 'Respuestas de quien releva', 'Lo que dice el comerciante (texto)', 'Datos abiertos del comercio: nombre, tipo, ubicación'].map((t) => ({ t })),
      imgRes: IMG.mRes, imgMapa: IMG.mMapa, imgBuilder: IMG.builder, imgCam: IMG.aCam, imgMulti: IMG.aMulti, imgAprob: IMG.aprob, imgUbic: IMG.aUbic, imgD1: IMG.d1, imgD2: IMG.d2, imgD3: IMG.d3, imgAntes: IMG.antes, imgHoy: IMG.hoy, imgPh1: IMG.aUbic, imgPh2: IMG.aCam, imgPh3: IMG.aMulti, imgPh4: IMG.aDone,
      ecoNodes, ecoEdges, ecoLabels, ecoP, hvOff, ecoMove, ecoUp, tip, tipOp,
      execs, exec: EXECS[s.exec], modes, mode: MODES[s.mode], metrics, fields, fieldCount: fields.length, noFields: fields.length === 0,
      roles, role, roleBullets: r.bullets.map((t) => ({ t, c: r.color })), rolePhones: (r.phones || [[r.img, r.alt]]).map((p, i) => ({ src: p[0], alt: p[1], mt: ['36px', '0', '60px'][i] || '0' })),
      steps, step, stepBullets: step.bullets.map((t) => ({ t, ac: '#5B4BD6' })),
      faqTabs, faqs
    };
  }
}

export default Component;
export const DEFAULT_PROPS = {"primary":"#3A5C42","mint":"#7EE2A8","autoplay":true};
