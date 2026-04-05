const preguntas = [
  "Sabes con quien competis en cada punto de venta?",
  "Como ocupan la gondola tus productos y como la comparten?",
  "Cuantos frentes tenes y que porcentaje del lineal?",
  "Como evaluas precios reales en gondola vs precio sugerido?",
  "Estas perdiendo share of shelf sin saberlo?",
];

const bullets = [
  "Fotos verificadas de tus gondolas en el interior",
  "Share of shelf vs competencia en tiempo real",
  "Precio real en gondola verificado por campo",
  "Auditoria de materiales POP",
  "Campanas de relevamiento activadas en 24hs",
];

export default function ParaMarcas() {
  return (
    <section id="marcas" className="py-16 md:py-24 bg-neblina px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 fade-in">
              Sabes lo que pasa con tus productos en la gondola?
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
              Si alguna de estas no tiene respuesta, el canal tradicional te esta costando plata sin que lo sepas.
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

          <div className="flex-1 w-full max-w-lg fade-in" style={{ transitionDelay: "300ms" }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center min-h-[350px]">
              <div className="text-center">
                <span className="text-5xl">📸</span>
                <p className="mt-4 text-gray-400 font-medium">Dashboard de marca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
