const steps = [
  { num: "1", title: "Te registras", sub: "15 minutos" },
  { num: "2", title: "Conectas tu equipo", sub: "1 dia" },
  { num: "3", title: "Primera campana activa", sub: "24hs" },
  { num: "4", title: "Primeros datos reales", sub: "Esa semana" },
];

export default function ComoArranca() {
  return (
    <section id="como-arranca" className="py-16 md:py-24 bg-neblina px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 fade-in">
          En 48hs podes estar operando
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-xl p-6 shadow-sm"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-[family-name:var(--font-syne)] text-5xl font-bold text-bosque">{s.num}</span>
              <p className="mt-3 font-bold text-gray-900">{s.title}</p>
              <p className="mt-1 text-gray-500 text-sm">{s.sub}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-500 italic fade-in">
          Sin implementacion. Sin IT. Sin excusas.
        </p>
      </div>
    </section>
  );
}
