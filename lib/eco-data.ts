/* Datos del ecosistema, extraidos sin modificar de la maqueta
   (Main.dc.html y Mobile.dc.html). No editar a mano. */

export const ECO_W = 1300;
export const ECO_H = 1000;

export type EcoNode = {
  id: string; kind: string; label: string; x: number; y: number;
  rel: string; parent?: string;
};
export type EcoEdge = [string, string, 'in' | 'out', number];

export const ECO = {
  "nodes": [
    {
      "id": "m0",
      "kind": "marca",
      "label": "ACME Alimentos",
      "x": 509,
      "y": 359,
      "rel": "Ejecuta con: Dist. Ríos del Sur, Repo Punto Góndola. Además, equipo interno de 3 personas. Nunca ve ni toca la red de otra marca."
    },
    {
      "id": "m0t0",
      "kind": "equipo",
      "label": "Promotor Sur",
      "x": 385,
      "y": 290,
      "parent": "m0",
      "rel": "Equipo interno de ACME Alimentos."
    },
    {
      "id": "m0t1",
      "kind": "equipo",
      "label": "Supervisora ER",
      "x": 394,
      "y": 244,
      "parent": "m0",
      "rel": "Equipo interno de ACME Alimentos."
    },
    {
      "id": "m0t2",
      "kind": "equipo",
      "label": "Vendedor Zona 3",
      "x": 440,
      "y": 235,
      "parent": "m0",
      "rel": "Equipo interno de ACME Alimentos."
    },
    {
      "id": "m1",
      "kind": "marca",
      "label": "Dulces Litoral",
      "x": 791,
      "y": 359,
      "rel": "Ejecuta con: Dist. Ríos del Sur, Dist. Centro, Repo Litoral, Dist. Norte. Además, equipo interno de 2 personas. Nunca ve ni toca la red de otra marca."
    },
    {
      "id": "m1t0",
      "kind": "equipo",
      "label": "Promotora Norte",
      "x": 867,
      "y": 241,
      "parent": "m1",
      "rel": "Equipo interno de Dulces Litoral."
    },
    {
      "id": "m1t1",
      "kind": "equipo",
      "label": "KAM Litoral",
      "x": 927,
      "y": 267,
      "parent": "m1",
      "rel": "Equipo interno de Dulces Litoral."
    },
    {
      "id": "m2",
      "kind": "marca",
      "label": "Aceites del Río",
      "x": 791,
      "y": 641,
      "rel": "Ejecuta con: Repo Litoral, Dist. Norte, Repo Góndola Pro, Dist. Litoral. Nunca ve ni toca la red de otra marca."
    },
    {
      "id": "m3",
      "kind": "marca",
      "label": "Snacks Norte",
      "x": 509,
      "y": 641,
      "rel": "Ejecuta con: Dist. Norte, Dist. Costa, Dist. Delta, Repo Punto Góndola. Nunca ve ni toca la red de otra marca."
    },
    {
      "id": "rios",
      "kind": "distri",
      "label": "Dist. Ríos del Sur",
      "x": 619,
      "y": 151,
      "rel": "Trabaja con 2 marcas: ACME Alimentos, Dulces Litoral. Red de campo: 4 personas."
    },
    {
      "id": "riosf0",
      "kind": "gond",
      "label": "HalcónSereno",
      "x": 514,
      "y": 32,
      "parent": "rios",
      "rel": "Vinculado a Dist. Ríos del Sur."
    },
    {
      "id": "riosf1",
      "kind": "gond",
      "label": "BrisaDelLitoral",
      "x": 570,
      "y": -17,
      "parent": "rios",
      "rel": "Vinculado a Dist. Ríos del Sur."
    },
    {
      "id": "riosf2",
      "kind": "gond",
      "label": "LunaDeParaná",
      "x": 639,
      "y": 13,
      "parent": "rios",
      "rel": "Vinculado a Dist. Ríos del Sur."
    },
    {
      "id": "riosf3",
      "kind": "fixer",
      "label": "GóndolaFirme",
      "x": 707,
      "y": -20,
      "parent": "rios",
      "rel": "Vinculado a Dist. Ríos del Sur."
    },
    {
      "id": "centro",
      "kind": "distri",
      "label": "Dist. Centro",
      "x": 814,
      "y": 191,
      "rel": "Trabaja con una marca: Dulces Litoral. Red de campo: 3 personas."
    },
    {
      "id": "centrof0",
      "kind": "gond",
      "label": "CeiboVeloz",
      "x": 800,
      "y": 37,
      "parent": "centro",
      "rel": "Vinculado a Dist. Centro."
    },
    {
      "id": "centrof1",
      "kind": "gond",
      "label": "RangaBrillante",
      "x": 896,
      "y": 38,
      "parent": "centro",
      "rel": "Vinculado a Dist. Centro."
    },
    {
      "id": "centrof2",
      "kind": "gond",
      "label": "CapitanHielo",
      "x": 950,
      "y": 116,
      "parent": "centro",
      "rel": "Vinculado a Dist. Centro."
    },
    {
      "id": "rlit",
      "kind": "repo",
      "label": "Repo Litoral",
      "x": 959,
      "y": 336,
      "rel": "Trabaja con 2 marcas: Dulces Litoral, Aceites del Río. Red de campo: 3 personas."
    },
    {
      "id": "rlitf0",
      "kind": "fixer",
      "label": "EstanteClaro",
      "x": 1034,
      "y": 200,
      "parent": "rlit",
      "rel": "Vinculado a Repo Litoral."
    },
    {
      "id": "rlitf1",
      "kind": "fixer",
      "label": "FrenteoPro",
      "x": 1112,
      "y": 254,
      "parent": "rlit",
      "rel": "Vinculado a Repo Litoral."
    },
    {
      "id": "rlitf2",
      "kind": "fixer",
      "label": "ManoRápida",
      "x": 1113,
      "y": 350,
      "parent": "rlit",
      "rel": "Vinculado a Repo Litoral."
    },
    {
      "id": "norte",
      "kind": "distri",
      "label": "Dist. Norte",
      "x": 999,
      "y": 531,
      "rel": "Trabaja con 3 marcas: Dulces Litoral, Aceites del Río, Snacks Norte. Red de campo: 4 personas."
    },
    {
      "id": "nortef0",
      "kind": "gond",
      "label": "ZorroAstuto",
      "x": 1134,
      "y": 447,
      "parent": "norte",
      "rel": "Vinculado a Dist. Norte."
    },
    {
      "id": "nortef1",
      "kind": "gond",
      "label": "PumaDorado",
      "x": 1173,
      "y": 511,
      "parent": "norte",
      "rel": "Vinculado a Dist. Norte."
    },
    {
      "id": "nortef2",
      "kind": "gond",
      "label": "TigreSereno",
      "x": 1131,
      "y": 574,
      "parent": "norte",
      "rel": "Vinculado a Dist. Norte."
    },
    {
      "id": "nortef3",
      "kind": "gond",
      "label": "OsaPaciente",
      "x": 1152,
      "y": 646,
      "parent": "norte",
      "rel": "Vinculado a Dist. Norte."
    },
    {
      "id": "rpro",
      "kind": "repo",
      "label": "Repo Góndola Pro",
      "x": 918,
      "y": 725,
      "rel": "Trabaja con una marca: Aceites del Río. Red de campo: 3 personas."
    },
    {
      "id": "rprof0",
      "kind": "fixer",
      "label": "OrdenTotal",
      "x": 1072,
      "y": 744,
      "parent": "rpro",
      "rel": "Vinculado a Repo Góndola Pro."
    },
    {
      "id": "rprof1",
      "kind": "fixer",
      "label": "ReponePlus",
      "x": 1051,
      "y": 836,
      "parent": "rpro",
      "rel": "Vinculado a Repo Góndola Pro."
    },
    {
      "id": "rprof2",
      "kind": "fixer",
      "label": "PasilloClaro",
      "x": 963,
      "y": 873,
      "parent": "rpro",
      "rel": "Vinculado a Repo Góndola Pro."
    },
    {
      "id": "lit",
      "kind": "distri",
      "label": "Dist. Litoral",
      "x": 741,
      "y": 838,
      "rel": "Trabaja con una marca: Aceites del Río. Red de campo: 3 personas."
    },
    {
      "id": "litf0",
      "kind": "gond",
      "label": "NutriaÁgil",
      "x": 856,
      "y": 941,
      "parent": "lit",
      "rel": "Vinculado a Dist. Litoral."
    },
    {
      "id": "litf1",
      "kind": "gond",
      "label": "GarzaBlanca",
      "x": 785,
      "y": 1005,
      "parent": "lit",
      "rel": "Vinculado a Dist. Litoral."
    },
    {
      "id": "litf2",
      "kind": "fixer",
      "label": "CajaLista",
      "x": 692,
      "y": 985,
      "parent": "lit",
      "rel": "Vinculado a Dist. Litoral."
    },
    {
      "id": "costa",
      "kind": "distri",
      "label": "Dist. Costa",
      "x": 502,
      "y": 817,
      "rel": "Trabaja con una marca: Snacks Norte. Red de campo: 3 personas."
    },
    {
      "id": "costaf0",
      "kind": "gond",
      "label": "YacaréCalmo",
      "x": 524,
      "y": 970,
      "parent": "costa",
      "rel": "Vinculado a Dist. Costa."
    },
    {
      "id": "costaf1",
      "kind": "gond",
      "label": "CarpinchoFeliz",
      "x": 429,
      "y": 974,
      "parent": "costa",
      "rel": "Vinculado a Dist. Costa."
    },
    {
      "id": "costaf2",
      "kind": "gond",
      "label": "HorneroPro",
      "x": 371,
      "y": 899,
      "parent": "costa",
      "rel": "Vinculado a Dist. Costa."
    },
    {
      "id": "delta",
      "kind": "distri",
      "label": "Dist. Delta",
      "x": 347,
      "y": 675,
      "rel": "Trabaja con una marca: Snacks Norte. Red de campo: 3 personas."
    },
    {
      "id": "deltaf0",
      "kind": "gond",
      "label": "SurubíVeloz",
      "x": 277,
      "y": 813,
      "parent": "delta",
      "rel": "Vinculado a Dist. Delta."
    },
    {
      "id": "deltaf1",
      "kind": "gond",
      "label": "TeroAlerta",
      "x": 197,
      "y": 762,
      "parent": "delta",
      "rel": "Vinculado a Dist. Delta."
    },
    {
      "id": "deltaf2",
      "kind": "fixer",
      "label": "StockAlDía",
      "x": 192,
      "y": 667,
      "parent": "delta",
      "rel": "Vinculado a Dist. Delta."
    },
    {
      "id": "rpg",
      "kind": "repo",
      "label": "Repo Punto Góndola",
      "x": 308,
      "y": 427,
      "rel": "Trabaja con 2 marcas: ACME Alimentos, Snacks Norte. Red de campo: 3 personas."
    },
    {
      "id": "rpgf0",
      "kind": "fixer",
      "label": "ExhibeBien",
      "x": 163,
      "y": 483,
      "parent": "rpg",
      "rel": "Vinculado a Repo Punto Góndola."
    },
    {
      "id": "rpgf1",
      "kind": "fixer",
      "label": "LinealOk",
      "x": 138,
      "y": 391,
      "parent": "rpg",
      "rel": "Vinculado a Repo Punto Góndola."
    },
    {
      "id": "rpgf2",
      "kind": "fixer",
      "label": "GóndolaViva",
      "x": 198,
      "y": 318,
      "parent": "rpg",
      "rel": "Vinculado a Repo Punto Góndola."
    }
  ],
  "edges": [
    [
      "m0",
      "m0t0",
      "in",
      150
    ],
    [
      "m0",
      "m0t1",
      "in",
      150
    ],
    [
      "m0",
      "m0t2",
      "in",
      150
    ],
    [
      "m1",
      "m1t0",
      "in",
      150
    ],
    [
      "m1",
      "m1t1",
      "in",
      150
    ],
    [
      "m0",
      "rios",
      "out",
      190
    ],
    [
      "m1",
      "rios",
      "out",
      190
    ],
    [
      "rios",
      "riosf0",
      "in",
      150
    ],
    [
      "rios",
      "riosf1",
      "in",
      150
    ],
    [
      "rios",
      "riosf2",
      "in",
      150
    ],
    [
      "rios",
      "riosf3",
      "in",
      150
    ],
    [
      "m1",
      "centro",
      "out",
      190
    ],
    [
      "centro",
      "centrof0",
      "in",
      150
    ],
    [
      "centro",
      "centrof1",
      "in",
      150
    ],
    [
      "centro",
      "centrof2",
      "in",
      150
    ],
    [
      "m1",
      "rlit",
      "out",
      190
    ],
    [
      "m2",
      "rlit",
      "out",
      190
    ],
    [
      "rlit",
      "rlitf0",
      "in",
      150
    ],
    [
      "rlit",
      "rlitf1",
      "in",
      150
    ],
    [
      "rlit",
      "rlitf2",
      "in",
      150
    ],
    [
      "m1",
      "norte",
      "out",
      190
    ],
    [
      "m2",
      "norte",
      "out",
      190
    ],
    [
      "m3",
      "norte",
      "out",
      190
    ],
    [
      "norte",
      "nortef0",
      "in",
      150
    ],
    [
      "norte",
      "nortef1",
      "in",
      150
    ],
    [
      "norte",
      "nortef2",
      "in",
      150
    ],
    [
      "norte",
      "nortef3",
      "in",
      150
    ],
    [
      "m2",
      "rpro",
      "out",
      190
    ],
    [
      "rpro",
      "rprof0",
      "in",
      150
    ],
    [
      "rpro",
      "rprof1",
      "in",
      150
    ],
    [
      "rpro",
      "rprof2",
      "in",
      150
    ],
    [
      "m2",
      "lit",
      "out",
      190
    ],
    [
      "lit",
      "litf0",
      "in",
      150
    ],
    [
      "lit",
      "litf1",
      "in",
      150
    ],
    [
      "lit",
      "litf2",
      "in",
      150
    ],
    [
      "m3",
      "costa",
      "out",
      190
    ],
    [
      "costa",
      "costaf0",
      "in",
      150
    ],
    [
      "costa",
      "costaf1",
      "in",
      150
    ],
    [
      "costa",
      "costaf2",
      "in",
      150
    ],
    [
      "m3",
      "delta",
      "out",
      190
    ],
    [
      "delta",
      "deltaf0",
      "in",
      150
    ],
    [
      "delta",
      "deltaf1",
      "in",
      150
    ],
    [
      "delta",
      "deltaf2",
      "in",
      150
    ],
    [
      "m0",
      "rpg",
      "out",
      190
    ],
    [
      "m3",
      "rpg",
      "out",
      190
    ],
    [
      "rpg",
      "rpgf0",
      "in",
      150
    ],
    [
      "rpg",
      "rpgf1",
      "in",
      150
    ],
    [
      "rpg",
      "rpgf2",
      "in",
      150
    ],
    [
      "rios",
      "rpg",
      "out",
      230
    ]
  ],
  "types": {
    "marca": {
      "t": "Marca",
      "que": "Carga saldo y lanza campañas: qué medir, dónde, con quién y hasta cuántos comercios.",
      "fun": "Financia la red. Decide con datos de presencia, quiebre, frentes, precio y exhibición.",
      "val": "Aporta el presupuesto que mueve la red y recibe el dato que antes no existía."
    },
    "equipo": {
      "t": "Equipo interno de la marca",
      "que": "Vendedores, promotores o supervisores de la propia marca que relevan en campañas internas. Entran por un link de invitación; usuarios ilimitados.",
      "fun": "Ejecutan sin aprobación previa: toda misión entra, y la marca puede excluir la que no sirva. No cobran puntos: ya son empleados. Ideal para seguimiento continuo.",
      "val": "Cobertura inmediata y el detalle completo de cada comercio. La primera campaña interna es gratis; después se paga por campaña, con misiones incluidas."
    },
    "distri": {
      "t": "Distribuidora",
      "que": "Recibe campañas de sus marcas, las aprueba o pide cambios, elige qué datos comparte y las ejecuta con sus vendedores.",
      "fun": "Coordina la red de campo y aprueba cada misión antes de que cuente. Puede lanzar campañas internas y contratar una repositora.",
      "val": "Trae la gente que ya recorre la calle y gana un argumento nuevo frente a sus marcas. No paga: cobra el canje."
    },
    "repo": {
      "t": "Repositora",
      "que": "Ejecuta campañas de reposición continua con sus fixers: visitas programadas, foto antes y después, medición.",
      "fun": "Brazo profesional de reposición para marcas y distribuidoras. Aprueba a sus fixers y sus postulaciones.",
      "val": "Convierte un servicio de confianza en un servicio con datos que el cliente ve en vivo."
    },
    "gond": {
      "t": "Vendedor (gondolero)",
      "que": "En su recorrido habitual saca la foto de la góndola, con GPS, y responde dos o tres preguntas.",
      "fun": "Es el sensor de la red. Cada misión aprobada le paga 100 puntos; sube de nivel, destraba logros y canjea en su distribuidora.",
      "val": "Genera el dato en 30 segundos sin cambiar su trabajo. La red existe gracias a él."
    },
    "fixer": {
      "t": "Fixer",
      "que": "Repone, acomoda y frentea la góndola; lo prueba con foto antes y después.",
      "fun": "Es el brazo ejecutor. Se postula a campañas abiertas y lo aprueba quien ejecuta la campaña.",
      "val": "Cierra el ciclo: del dato a la góndola ordenada. Cobra por misión validada."
    }
  },
  "colors": {
    "marca": "#5B4BD6",
    "equipo": "#5B4BD6",
    "distri": "#C4871F",
    "repo": "#2F6FE0",
    "gond": "#1F9D5A",
    "fixer": "#E0702D"
  },
  "light": {
    "marca": "#EEEBFB",
    "equipo": "#EEEBFB",
    "distri": "#FBF1E0",
    "repo": "#E7EFFC",
    "gond": "#E3F5EA",
    "fixer": "#FCEBE0"
  },
  "teams": {
    "m0": "Equipo interno · ACME Alimentos",
    "m1": "Equipo interno · Dulces Litoral"
  }
} as unknown as {
  nodes: EcoNode[];
  edges: EcoEdge[];
  types: Record<string, { t: string; que: string; fun: string; val: string }>;
  colors: Record<string, string>;
  light: Record<string, string>;
  teams: Record<string, string>;
};

/* Particulas que nacen de cada tipo de nodo: ['f'|'d'|'m', etiqueta] */
export const ECO_CONTENT = {
  "marca": [
    [
      "d",
      "Presencia 89%"
    ],
    [
      "d",
      "Reporte descargado"
    ],
    [
      "d",
      "Campaña activa · 120 PDV"
    ],
    [
      "m",
      "Cobertura · 16 ciudades"
    ],
    [
      "d",
      "Precio prom. $2.890"
    ],
    [
      "d",
      "Saldo cargado"
    ]
  ],
  "equipo": [
    [
      "f",
      "Foto · Almacén El Sol"
    ],
    [
      "f",
      "Foto · Súper San Martín"
    ],
    [
      "d",
      "Frentes: 14"
    ],
    [
      "d",
      "Exhibición: sí"
    ],
    [
      "d",
      "Misión enviada"
    ]
  ],
  "distri": [
    [
      "d",
      "Misión aprobada"
    ],
    [
      "d",
      "Campaña aceptada"
    ],
    [
      "d",
      "Canje confirmado"
    ],
    [
      "m",
      "PDV confirmado · Colón"
    ],
    [
      "d",
      "Vendedor vinculado"
    ]
  ],
  "repo": [
    [
      "d",
      "Visita completada"
    ],
    [
      "d",
      "Informe actualizado"
    ],
    [
      "d",
      "Fixer aprobado"
    ],
    [
      "m",
      "Ruta del día · 12 PDV"
    ]
  ],
  "gond": [
    [
      "f",
      "Foto · Kiosco El Trébol"
    ],
    [
      "f",
      "Foto · Despensa Mary"
    ],
    [
      "f",
      "Foto · Autoservicio La Esquina"
    ],
    [
      "d",
      "Precio $2.890"
    ],
    [
      "d",
      "Quiebre: Coco 1 L"
    ],
    [
      "d",
      "+100 pts"
    ],
    [
      "m",
      "PDV nuevo · Villaguay"
    ],
    [
      "d",
      "Presencia: sí"
    ]
  ],
  "fixer": [
    [
      "f",
      "Foto · Almacén Las Acacias"
    ],
    [
      "f",
      "Foto · Supermercado Costanera"
    ],
    [
      "d",
      "Antes / después"
    ],
    [
      "d",
      "Góndola ordenada"
    ],
    [
      "d",
      "Misión entregada"
    ]
  ]
} as Record<string, [string, string][]>;

/* ── Movil: cadena de valor de 8 nodos ── */

export const ECO_TYPES = {
  "marca": {
    "t": "Marca",
    "c": "#5B4BD6",
    "que": "Carga saldo y lanza campañas: qué medir, dónde, con quién y hasta cuántos comercios.",
    "fun": "Financia la red. Decide con datos de presencia, quiebre, frentes, precio y exhibición.",
    "val": "Aporta el presupuesto que mueve la red y recibe el dato que antes no existía."
  },
  "equipo": {
    "t": "Equipo interno de la marca",
    "c": "#5B4BD6",
    "que": "Vendedores, promotores o supervisores de la propia marca que relevan en campañas internas. Entran por un link; usuarios ilimitados.",
    "fun": "Ejecutan sin aprobación previa. No cobran puntos: ya son empleados. Ideal para seguimiento continuo.",
    "val": "Cobertura inmediata y el detalle completo de cada comercio. La primera campaña interna es gratis."
  },
  "distri": {
    "t": "Distribuidora",
    "c": "#C4871F",
    "que": "Recibe campañas de sus marcas, las aprueba o pide cambios, elige qué datos comparte y las ejecuta con sus vendedores.",
    "fun": "Coordina la red de campo y aprueba cada misión antes de que cuente. Puede lanzar campañas internas.",
    "val": "Trae la gente que ya recorre la calle y gana un argumento nuevo frente a sus marcas. No paga: cobra el canje."
  },
  "repo": {
    "t": "Repositora",
    "c": "#2F6FE0",
    "que": "Ejecuta campañas de reposición continua con sus fixers: visitas programadas, foto antes y después, medición.",
    "fun": "Brazo profesional de reposición para marcas y distribuidoras. Aprueba a sus fixers.",
    "val": "Convierte un servicio de confianza en un servicio con datos que el cliente ve en vivo."
  },
  "gond": {
    "t": "Vendedor (gondolero)",
    "c": "#1F9D5A",
    "que": "En su recorrido habitual saca la foto de la góndola, con GPS, y responde dos o tres preguntas.",
    "fun": "Es el sensor de la red. Cada misión aprobada le paga 100 puntos; sube de nivel y canjea en su distribuidora.",
    "val": "Genera el dato en 30 segundos sin cambiar su trabajo. La red existe gracias a él."
  },
  "fixer": {
    "t": "Fixer",
    "c": "#E0702D",
    "que": "Repone, acomoda y frentea la góndola; lo prueba con foto antes y después.",
    "fun": "Es el brazo ejecutor. Se postula a campañas abiertas y lo aprueba quien ejecuta la campaña.",
    "val": "Cierra el ciclo: del dato a la góndola ordenada. Cobra por misión validada."
  },
  "datos": {
    "t": "Lo que vuelve a la marca",
    "c": "#0F1A14",
    "que": "Fotos validadas, respuestas, posición en el mapa y métricas por campaña, zona y comercio.",
    "fun": "Es el producto de la red: cada misión aprobada actualiza el panel de la marca al instante.",
    "val": "Decisiones con dato real del punto de venta: reponer, negociar, exhibir, cubrir."
  }
} as Record<string, { t: string; c: string; que: string; fun: string; val: string }>;

export const MNODES = [
  {
    "id": "marca",
    "kind": "marca",
    "label": "Marca",
    "x": 175,
    "y": 38
  },
  {
    "id": "equipo",
    "kind": "equipo",
    "label": "Equipo interno",
    "x": 62,
    "y": 150
  },
  {
    "id": "distri",
    "kind": "distri",
    "label": "Distribuidora",
    "x": 175,
    "y": 150
  },
  {
    "id": "repo",
    "kind": "repo",
    "label": "Repositora",
    "x": 292,
    "y": 150
  },
  {
    "id": "prom",
    "kind": "equipo",
    "label": "Promotores",
    "x": 62,
    "y": 262
  },
  {
    "id": "gond",
    "kind": "gond",
    "label": "Vendedores",
    "x": 175,
    "y": 262
  },
  {
    "id": "fixer",
    "kind": "fixer",
    "label": "Fixers",
    "x": 292,
    "y": 262
  },
  {
    "id": "datos",
    "kind": "datos",
    "label": "Panel de la marca, en vivo",
    "x": 175,
    "y": 388
  }
] as { id: string; kind: string; label: string; x: number; y: number }[];

export const MEDGES = [
  [
    "marca",
    "equipo"
  ],
  [
    "marca",
    "distri"
  ],
  [
    "marca",
    "repo"
  ],
  [
    "equipo",
    "prom"
  ],
  [
    "distri",
    "gond"
  ],
  [
    "repo",
    "fixer"
  ],
  [
    "distri",
    "fixer"
  ],
  [
    "prom",
    "datos"
  ],
  [
    "gond",
    "datos"
  ],
  [
    "fixer",
    "datos"
  ]
] as [string, string][];
