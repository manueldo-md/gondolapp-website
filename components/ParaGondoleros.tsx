const bullets = [
  "Sacas fotos durante tu recorrido habitual",
  "Acumulas puntos y los canjeas por premios reales",
  "Subis de nivel: Casual → Activo → Pro ⭐",
  "Competis en el ranking de tu zona y provincia",
];

export default function ParaGondoleros() {
  return (
    <section id="gondoleros" className="py-16 md:py-24 bg-bosque px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-white fade-in">
              Ganas plata haciendo lo que ya haces
            </h2>
            <div className="mt-8 space-y-4 fade-in" style={{ transitionDelay: "200ms" }}>
              {bullets.map((b, i) => (
                <p key={i} className="text-white/90 text-lg flex items-start gap-3">
                  <span className="text-menta">→</span>
                  {b}
                </p>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center fade-in" style={{ transitionDelay: "300ms" }}>
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[40px] border-4 border-gray-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl" />
              <div className="text-center">
                <span className="text-6xl">📱</span>
                <p className="mt-4 text-gray-400 font-medium text-sm">App del gondolero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
