const preguntas = [
  "Como relevas productos para mostrarle datos reales a tus marcas?",
  "Como evaluas los materiales POP en cada punto de venta?",
  "Como medis precios en gondola sin mandar a alguien a recorrer?",
  "Sabes que oportunidades de exhibicion estas perdiendo hoy?",
  "Podes mostrarle a una marca nueva por que conviene trabajar con vos?",
];

const bullets = [
  "Panel de control de tus vendedores en tiempo real",
  "Alertas automaticas de quiebre de stock",
  "Relevamiento profesional para presentar a tus marcas",
  "Tus gondoleros ganan puntos — vos ganas datos",
  "El argumento que te faltaba para captar nuevas marcas",
];

export default function ParaDistribuidoras() {
  return (
    <section id="distribuidoras" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 w-full max-w-lg fade-in">
            <div className="bg-neblina rounded-2xl p-8 flex items-center justify-center min-h-[350px]">
              <div className="text-center">
                <span className="text-5xl">📸</span>
                <p className="mt-4 text-gray-500 font-medium">Panel distribuidora</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 fade-in">
              Sabes que oportunidades tenes en las gondolas?
            </h2>

            <div className="mt-8 space-y-3 fade-in" style={{ transitionDelay: "150ms" }}>
              {preguntas.map((p, i) => (
                <p key={i} className="text-gray-600 italic">
                  <span className="text-bosque mr-2">•</span>
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 text-gray-600 fade-in" style={{ transitionDelay: "300ms" }}>
              Las distribuidoras que tienen datos negocian mejor. Las que no, pierden representaciones.
            </p>

            <div className="mt-8 space-y-3 fade-in" style={{ transitionDelay: "450ms" }}>
              {bullets.map((b, i) => (
                <p key={i} className="text-gray-700 flex items-start gap-2">
                  <span className="text-bosque mt-0.5">✓</span>
                  {b}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
