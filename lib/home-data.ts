/* Datos de la home, portados tal cual de la maqueta (Main.dc.html).
   Los textos van literales: el brief §9 pide copiarlos sin cambios. */

import { IMG, type Asset } from "./assets";

/* ── Hero: pestañas y collage ───────────────────────────────── */

/* Posiciones del collage (SLOTS en la maqueta): principal, secundaria
   abajo a la derecha, teléfono abajo a la izquierda. */
export const SLOTS = [
  { l: "7%", t: "0%", w: "70%", z: 1, r: 18 },
  { l: "58%", t: "36%", w: "40%", z: 3, r: 16 },
  { l: "0%", t: "27%", w: "17%", z: 4, r: 22 },
] as const;

/* De las 4 capturas de cada vista, la maqueta muestra estas tres. */
export const SLOT_PICK = [0, 1, 3] as const;

export type Vista = {
  t: string;
  cap: string;
  shots: [Asset, string][];
};

export const VIEWS: Vista[] = [
  {
    t: "Marca",
    cap: "Panel de marca: dashboard, resultados de campaña, mapa de cobertura y la app del vendedor que alimenta todo.",
    shots: [
      [IMG.mDash, "Dashboard de marca"],
      [IMG.mRes, "Resultados de una campaña"],
      [IMG.mMapa, "Mapa de puntos de venta"],
      [IMG.gCamp, "App del vendedor"],
    ],
  },
  {
    t: "Distribuidora",
    cap: "Panel de distribuidora: dashboard operativo, campañas de marcas por aprobar, red de gondoleros y la app de campo.",
    shots: [
      [IMG.dDash, "Dashboard de distribuidora"],
      [IMG.dCamp, "Campañas: pendientes y activas"],
      [IMG.dGond, "Red de gondoleros"],
      [IMG.gDet, "App del vendedor: detalle de campaña"],
    ],
  },
  {
    t: "Repositora",
    cap: "Panel de repositora: dashboard de fixers, góndolas relevadas, vinculación de fixers y el perfil del fixer en la app.",
    shots: [
      [IMG.rDash, "Dashboard de repositora"],
      [IMG.rGond, "Góndolas relevadas por los fixers"],
      [IMG.rFix, "Fixers: invitación y vinculación"],
      [IMG.gPerf, "App del fixer: perfil"],
    ],
  },
];

/* ── Qué hace ───────────────────────────────────────────────── */

export const QUE_HACE = [
  {
    n: "01",
    t: "Campañas en minutos",
    d: "Definís qué medir, dónde y quién ejecuta. Única o de seguimiento continuo. Arranca hoy.",
  },
  {
    n: "02",
    t: "La gente que ya tenés",
    d: "Tu equipo, los vendedores de tus distribuidoras o los fixers de tu repositora. Foto, GPS y respuestas en 30 segundos.",
  },
  {
    n: "03",
    t: "Datos validados, en vivo",
    d: "Cuatro controles por misión. Presencia, quiebre, frentes, precio y exhibición, comparables entre campañas.",
  },
];

/* ── Cómo funciona: 5 pasos ─────────────────────────────────── */

export type Paso = {
  n: string;
  t: string;
  title: string;
  desc: string;
  bullets: string[];
};

export const STEPS: Paso[] = [
  {
    n: "01",
    t: "Campaña",
    title: "Definís qué medir, dónde y quién ejecuta.",
    desc: "Elegís las preguntas, la zona, el objetivo y el tope de comercios. Única o de seguimiento continuo.",
    bullets: ["Formulario con 5 tipos de pregunta", "Objetivo y tope de comercios", "Equipo propio, distris o repositora"],
  },
  {
    n: "02",
    t: "Misión",
    title: "Quien está en la calle saca la foto y responde.",
    desc: "En el recorrido de siempre, desde el celular. La foto sale con GPS y hora, y el formulario guía cada respuesta.",
    bullets: ["Foto con GPS y hora", "Respuestas guiadas", "Sin descargar nada del store"],
  },
  {
    n: "03",
    t: "Validación",
    title: "Cada misión pasa cuatro controles.",
    desc: "Lo que llega a tu panel es real: ubicación, foto y respuestas revisadas antes de contar como dato.",
    bullets: ["GPS validado en el servidor", "Inclinación y calidad de la foto", "Aprobación de quien ejecuta"],
  },
  {
    n: "04",
    t: "Datos",
    title: "Las respuestas se vuelven métricas.",
    desc: "Cada pregunta mide algo y se suma al tablero de la marca: presencia, quiebre, frentes, precio, exhibición.",
    bullets: ["Métricas estándar entre campañas", "Evolución por zona y ejecutor", "Mapa de cobertura"],
  },
  {
    n: "05",
    t: "Acción",
    title: "Del dato a la decisión.",
    desc: "Un quiebre reportado llega al responsable, se repone y la siguiente visita lo confirma con foto. En las campañas de reposición, la góndola de hoy contra la de hace dos semanas, lado a lado.",
    bullets: ["Alertas al responsable", "Comparativa antes y ahora, con foto", "Reportes para compartir"],
  },
];

/* ── Tiempo real: chips ─────────────────────────────────────── */

export const TAGS_QUE = [
  "Presencia por SKU",
  "Quiebre de stock",
  "Frentes",
  "Precio en góndola",
  "Exhibición / POP",
  "Tipo de comercio",
  "Cobertura por zona",
];

export const TAGS_CON = ["Selección múltiple", "Selección única", "Sí / No", "Número", "Texto libre"];

export const TAGS_DE = [
  "Foto de góndola validada (GPS + calidad)",
  "Respuestas del vendedor o fixer",
  "Lo que dice el comerciante (texto)",
  "Datos abiertos del comercio: nombre, tipo, ubicación",
];

/* ── Armador de misión ──────────────────────────────────────── */

export const EXECS = [
  { t: "Mi equipo", how: "Tu equipo entra con un link de invitación y carga cada misión desde el celular.", data: "Completos" },
  { t: "Mis distribuidoras", how: "Los vendedores de tus distribuidoras vinculadas la ven en su app y la ejecutan en su recorrido.", data: "Ubicación" },
  { t: "Una repositora", how: "Los fixers de tu repositora la ejecutan en sus visitas de reposición.", data: "Completos" },
];

export const MODES = [
  { t: "Campaña única", badge: "Única", how: "Corre hasta llegar al objetivo o al tope de comercios." },
  { t: "Seguimiento continuo", badge: "Continua", how: "Sin vencimiento, con visitas por semana para ver la evolución." },
];

export type Metrica = {
  id: string;
  t: string;
  q: string;
  type: string;
  kind: "chips" | "yesno" | "input";
  opts?: string[];
  ph?: string;
};

export const METRICS: Metrica[] = [
  { id: "presencia", t: "Presencia", q: "¿Están presentes estos SKUs?", type: "MÚLTIPLE", kind: "chips", opts: ["SKU A", "SKU B", "SKU C"] },
  { id: "quiebre", t: "Quiebre", q: "¿Hay algún SKU en falta?", type: "SÍ / NO", kind: "yesno" },
  { id: "precio", t: "Precio", q: "Precio del SKU principal", type: "NÚMERO", kind: "input", ph: "$ 0" },
  { id: "frentes", t: "Frentes", q: "Cantidad de frentes de tu marca", type: "NÚMERO", kind: "input", ph: "0" },
  { id: "exhibicion", t: "Exhibición / POP", q: "¿Hay exhibición adicional o material POP?", type: "ÚNICA", kind: "chips", opts: ["Punta de góndola", "Exhibidor", "Afiche", "Ninguno"] },
];

/* ── Soluciones: 5 actores ──────────────────────────────────── */

export type Rol = {
  tab: string;
  kicker: string;
  color: string;
  href: string;
  cta: string;
  img: Asset;
  alt: string;
  phone?: boolean;
  phones?: [Asset, string][];
  title: string;
  body: string;
  bullets: string[];
};

export const ROLES: Rol[] = [
  {
    tab: "Marcas",
    kicker: "Marca",
    color: "#5B4BD6",
    href: "/marcas",
    cta: "Todo para marcas",
    img: IMG.mRes,
    alt: "Resultados de una campaña de marca",
    title: "Todas tus campañas, zonas y ejecutores en un solo tablero.",
    body: "Cada respuesta se clasifica con lo que mide, así campañas distintas alimentan el mismo panel y ves la evolución de tu marca en el punto de venta.",
    bullets: [
      "Campañas únicas o de seguimiento continuo",
      "Tu equipo, tus distris o tu repositora",
      "Presencia, quiebre, frentes, precio y exhibición",
      "Cada dato con foto y GPS de respaldo",
      "Reportes descargables y mapa de cobertura",
    ],
  },
  {
    tab: "Distribuidoras",
    kicker: "Distribuidora",
    color: "#C4871F",
    href: "/distribuidoras",
    cta: "Todo para distribuidoras",
    img: IMG.dGond,
    alt: "Red de gondoleros de una distribuidora",
    title: "Tu fuerza de venta en vivo. Y un argumento nuevo frente a tus marcas.",
    body: "Ves quién relevó qué y dónde falta producto. Ejecutás las campañas de tus marcas con tu propia gente y lanzás campañas internas cuando quieras.",
    bullets: [
      "Panel en vivo de todos tus vendedores",
      "Invitación por link o por código",
      "Aprobás o pedís cambios a cada campaña de marca",
      "Tu cartera protegida, siempre",
      "Panel sin costo y 10.000 puntos de bienvenida",
    ],
  },
  {
    tab: "Repositoras",
    kicker: "Repositora",
    color: "#2F6FE0",
    href: "/repositoras",
    cta: "Todo para repositoras",
    img: IMG.rGond,
    alt: "Góndolas relevadas por los fixers de una repositora",
    title: "Convertí cada visita en un informe que tu cliente puede ver.",
    body: "Usá Gondolapp como soporte de tu servicio: visitas periódicas con foto, medición constante y la góndola antes y ahora, en tiempo real para tu cliente.",
    bullets: [
      "Visitas recurrentes programadas",
      "Comparativa de góndola antes y ahora",
      "Tu cliente sigue todo en vivo",
      "Tus fixers, invitados por link o por código",
      "Primera campaña gratis",
    ],
  },
  {
    tab: "Vendedores",
    kicker: "Vendedor · la app de campo",
    color: "#1F9D5A",
    href: "/red",
    cta: "La app del vendedor",
    img: IMG.gLog,
    alt: "Logros y niveles en la app del vendedor",
    phone: true,
    phones: [
      [IMG.gDet, "Detalle de campaña y tus misiones"],
      [IMG.aConf, "Resumen antes de enviar, con la foto"],
      [IMG.gLog, "Logros y niveles"],
    ],
    title: "Lo que ya hacés en tu recorrido, ahora suma premios.",
    body: "La app de campo, en modo vendedor: campañas de tus distribuidoras, misión en 30 segundos y puntos que se canjean. Mismo motor que la de los fixers, con su propio look.",
    bullets: [
      "100 puntos por misión aprobada",
      "Se instala desde un link, sin store",
      "Niveles Casual, Activo y Pro",
      "Ocho logros y rankings mensuales",
      "Canje en tu distribuidora",
    ],
  },
  {
    tab: "Fixers",
    kicker: "Fixer · la app de campo",
    color: "#E0702D",
    href: "/red#fixers",
    cta: "Cómo trabajan los fixers",
    img: IMG.gPerf,
    alt: "Perfil del fixer en la app de campo",
    phone: true,
    phones: [
      [IMG.aUbic, "Validación de ubicación en el comercio"],
      [IMG.aCam, "Cámara guiada: encuadre y nivel"],
      [IMG.gPerf, "Perfil, zonas y empresas"],
    ],
    title: "Campañas de reposición en tu zona. Te postulás, te aprueban, ejecutás.",
    body: "La misma app, en modo fixer: ofertas de campañas abiertas, postulación, misión con foto antes y después. Sin puntos: cobrás por misión a quien te contrata.",
    bullets: [
      "Campañas abiertas en tu zona",
      "Foto antes y después como prueba",
      "Aprueba quien ejecuta la campaña",
      "Trabajás con varias empresas",
      "Reputación que te abre puertas",
    ],
  },
];

/* ── Preguntas ──────────────────────────────────────────────── */

export const FAQ = [
  {
    label: "Marcas",
    items: [
      { q: "¿Puedo usar a mi propio equipo?", a: "Sí. Creás campañas internas e invitás a tu gente por link, sin límite de usuarios. Tu primera campaña interna es gratis." },
      { q: "¿Y si trabajo con distribuidoras?", a: "Las invitás a la plataforma. Sus vendedores ven tu campaña en su app y la relevan en el recorrido que ya hacen." },
      { q: "¿Qué datos del comercio veo?", a: "Con tu equipo o una repositora, todo el detalle. Con la red de una distribuidora, la ubicación en el mapa; su cartera queda protegida." },
      { q: "¿Tiene inteligencia artificial?", a: "Hoy las métricas salen de las respuestas validadas de cada misión. El análisis automático de fotos llega en la próxima etapa." },
    ],
  },
  {
    label: "Distribuidoras",
    items: [
      { q: "¿Me cuesta algo?", a: "El panel no tiene costo y arrancás con 10.000 puntos de bienvenida para tus campañas internas." },
      { q: "¿Otra distribuidora puede ver mis datos?", a: "Nunca. Cada distribuidora ve solo lo suyo, y vos decidís qué compartís con cada marca." },
      { q: "¿Qué pasa con las fotos truchas?", a: "GPS validado en el servidor, control de inclinación y calidad, y tu aprobación antes de que cuente." },
    ],
  },
  {
    label: "Repositoras",
    items: [
      { q: "¿Para qué me sirve?", a: "Para mostrarle a tus clientes cada visita con foto, datos y la comparativa de la góndola antes y ahora, en tiempo real." },
      { q: "¿Le pago a mis fixers por la plataforma?", a: "No. Vos ya les pagás por la reposición; Gondolapp es el soporte de tu servicio." },
    ],
  },
  {
    label: "Vendedores y fixers",
    items: [
      { q: "¿Tengo que descargar algo?", a: "No del store. Es una app que se instala desde un link en segundos." },
      { q: "¿Cuánto gano como vendedor?", a: "100 puntos por misión aprobada, equivalentes a $1.000. Los canjeás por productos en tu distribuidora y, desde el nivel Pro, también por transferencia." },
    ],
  },
];
