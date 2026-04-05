const nodos = [
  { icon: "🧑‍💼", label: "GONDOLERO", desc: "Saca la foto en su recorrido habitual" },
  { icon: "🚛", label: "DISTRIBUIDORA", desc: "Valida y ve sus comercios en tiempo real" },
  { icon: "🏷️", label: "MARCA", desc: "Recibe datos verificados de sus gondolas" },
  { icon: "🗺️", label: "GONDOLAPP", desc: "Cruza todo y construye el mapa del consumo masivo" },
];

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900">
          Cuatro actores. Un solo sistema.
        </h2>
        <p className="mt-4 text-gray-500 italic text-lg">
          Nadie hace trabajo extra. Nadie se pisa.
          <br />
          Todos se benefician del trabajo del otro.
        </p>
      </div>

      <div className="mx-auto max-w-md mt-12 relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-menta" />

        {nodos.map((n, i) => (
          <div
            key={i}
            className="fade-in relative flex items-center gap-6 py-6"
            style={{ transitionDelay: `${i * 300}ms` }}
          >
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-bosque text-2xl">
              <span>{n.icon}</span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-syne)] font-bold text-bosque text-sm tracking-wider">
                {n.label}
              </p>
              <p className="text-gray-600 mt-1">{n.desc}</p>
            </div>
            {i < nodos.length - 1 && (
              <div className="absolute left-[31px] top-[76px] text-menta text-lg">↓</div>
            )}
          </div>
        ))}

        {/* Return arrow */}
        <div className="fade-in text-center mt-2">
          <span className="inline-block text-menta text-lg">↻ El ciclo se repite</span>
        </div>
      </div>
    </section>
  );
}
