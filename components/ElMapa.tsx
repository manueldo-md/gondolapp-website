export default function ElMapa() {
  return (
    <section id="mapa" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 fade-in">
          Cada foto construye algo mas grande
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed fade-in" style={{ transitionDelay: "150ms" }}>
          Cada comercio relevado suma al mapa en tiempo real del consumo masivo argentino. Un activo verificado en campo, imposible de replicar desde una oficina.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed fade-in" style={{ transitionDelay: "300ms" }}>
          Nielsen lleva decadas intentando medir el canal tradicional. Nosotros lo hacemos con los vendedores que ya estan ahi.
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12 fade-in" style={{ transitionDelay: "450ms" }}>
        <div className="w-full h-[400px] bg-neblina rounded-2xl flex flex-col items-center justify-center">
          <span className="text-7xl">🗺️</span>
          <p className="mt-4 text-gray-500 font-medium">Mapa de cobertura en tiempo real</p>
        </div>
      </div>
    </section>
  );
}
