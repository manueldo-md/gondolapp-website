const steps = [
  {
    num: "1",
    title: "Detectar",
    text: "Vendedores que ya recorren comercios todos los días sacan fotos de las góndolas con su celular. La inteligencia artificial analiza cada imagen: identifica productos, mide presencia, detecta quiebres y lee precios en tiempo real.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <rect x="30" y="30" width="80" height="140" rx="12" stroke="#2d8f4e" strokeWidth="2.5" fill="#f0faf5" />
        <rect x="38" y="45" width="64" height="100" rx="4" fill="#e0f2eb" />
        <circle cx="70" cy="80" r="14" stroke="#3db89a" strokeWidth="2" fill="none" />
        <circle cx="70" cy="80" r="5" fill="#3db89a" />
        <rect x="58" y="64" width="24" height="4" rx="2" fill="#3db89a" />
        <path d="M120 100 L165 100" stroke="#3db89a" strokeWidth="2" strokeDasharray="6 4" />
        <polygon points="165,95 175,100 165,105" fill="#3db89a" />
        <circle cx="220" cy="100" r="42" stroke="#1a5c2e" strokeWidth="2.5" fill="#f0faf5" />
        <text x="220" y="92" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill="#1a5c2e">IA</text>
        <circle cx="205" cy="112" r="3" fill="#3db89a" />
        <circle cx="220" cy="118" r="3" fill="#3db89a" />
        <circle cx="235" cy="112" r="3" fill="#3db89a" />
        <line x1="205" y1="112" x2="220" y2="118" stroke="#3db89a" strokeWidth="1.5" />
        <line x1="220" y1="118" x2="235" y2="112" stroke="#3db89a" strokeWidth="1.5" />
        <rect x="270" y="70" width="42" height="18" rx="9" fill="#e0f2eb" stroke="#3db89a" strokeWidth="1" />
        <text x="291" y="83" textAnchor="middle" fontSize="8" fill="#1a5c2e" fontFamily="sans-serif" fontWeight="600">Precio</text>
        <rect x="270" y="95" width="42" height="18" rx="9" fill="#e0f2eb" stroke="#3db89a" strokeWidth="1" />
        <text x="291" y="108" textAnchor="middle" fontSize="8" fill="#1a5c2e" fontFamily="sans-serif" fontWeight="600">Stock</text>
        <rect x="270" y="120" width="42" height="18" rx="9" fill="#e0f2eb" stroke="#3db89a" strokeWidth="1" />
        <text x="291" y="133" textAnchor="middle" fontSize="8" fill="#1a5c2e" fontFamily="sans-serif" fontWeight="600">Share</text>
      </svg>
    ),
  },
  {
    num: "2",
    title: "Resolver",
    text: "Donde se detecta un problema, se envía un fixer. Ejecutores independientes que reciben misiones concretas: acomodan la góndola, hacen frenteo y reportan con foto antes y después. Trabajo verificado, no promesas.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <text x="60" y="22" textAnchor="middle" fontSize="10" fill="#999" fontFamily="sans-serif" fontWeight="600">ANTES</text>
        <rect x="15" y="30" width="90" height="80" rx="6" stroke="#ccc" strokeWidth="2" fill="#fafafa" />
        <rect x="22" y="38" width="16" height="28" rx="2" fill="#f0a0a0" transform="rotate(-8 30 52)" />
        <rect x="40" y="42" width="16" height="24" rx="2" fill="#a0c0f0" transform="rotate(5 48 54)" />
        <rect x="60" y="35" width="14" height="30" rx="2" fill="#f0d0a0" transform="rotate(-12 67 50)" />
        <rect x="78" y="40" width="16" height="26" rx="2" fill="#a0e0b0" transform="rotate(8 86 53)" />
        <rect x="62" y="72" width="30" height="26" rx="2" fill="none" stroke="#e0a0a0" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="77" y="89" textAnchor="middle" fontSize="7" fill="#cc6666" fontFamily="sans-serif">vacío</text>
        <path d="M115 70 L150 70" stroke="#3db89a" strokeWidth="2.5" />
        <polygon points="150,65 160,70 150,75" fill="#3db89a" />
        <circle cx="137" cy="56" r="10" fill="#e0f2eb" />
        <text x="137" y="60" textAnchor="middle" fontSize="11">🔧</text>
        <text x="240" y="22" textAnchor="middle" fontSize="10" fill="#1a5c2e" fontFamily="sans-serif" fontWeight="600">DESPUÉS</text>
        <rect x="195" y="30" width="90" height="80" rx="6" stroke="#2d8f4e" strokeWidth="2" fill="#f0faf5" />
        <rect x="202" y="38" width="16" height="28" rx="2" fill="#f0a0a0" />
        <rect x="220" y="38" width="16" height="28" rx="2" fill="#a0c0f0" />
        <rect x="238" y="38" width="16" height="28" rx="2" fill="#f0d0a0" />
        <rect x="256" y="38" width="16" height="28" rx="2" fill="#a0e0b0" />
        <rect x="202" y="72" width="16" height="26" rx="2" fill="#d0a0f0" />
        <rect x="220" y="72" width="16" height="26" rx="2" fill="#f0c0a0" />
        <rect x="238" y="72" width="16" height="26" rx="2" fill="#a0c0f0" />
        <rect x="256" y="72" width="16" height="26" rx="2" fill="#f0a0a0" />
        <circle cx="285" cy="30" r="10" fill="#2d8f4e" />
        <path d="M280 30 L283 33 L290 26" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="240" y="130" textAnchor="middle" fontSize="9" fill="#5a6672" fontFamily="sans-serif">Validado con foto</text>
      </svg>
    ),
  },
  {
    num: "3",
    title: "Mapear",
    text: "Cada foto y cada acción construyen el mapa. Datos reales, geolocalizados y verificados que se acumulan día a día. Inteligencia de mercado que no existía, disponible para quienes mueven el consumo masivo.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <path d="M140 20 C160 18 180 25 185 40 C190 55 195 65 200 80 C205 95 195 110 190 125 C185 140 175 155 170 170 C165 180 155 188 150 185 C145 182 140 175 138 165 C135 155 130 140 128 125 C125 110 120 95 118 80 C115 65 120 45 130 30 Z" stroke="#2d8f4e" strokeWidth="2" fill="#e8f5f0" />
        <circle cx="150" cy="55" r="5" fill="#3db89a" opacity="0.8" />
        <circle cx="160" cy="75" r="7" fill="#2d8f4e" opacity="0.9" />
        <circle cx="145" cy="90" r="4" fill="#3db89a" opacity="0.7" />
        <circle cx="155" cy="110" r="6" fill="#3db89a" opacity="0.8" />
        <circle cx="165" cy="130" r="4" fill="#2d8f4e" opacity="0.7" />
        <circle cx="148" cy="145" r="5" fill="#3db89a" opacity="0.8" />
        <circle cx="160" cy="75" r="12" stroke="#3db89a" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="160" cy="75" r="18" stroke="#3db89a" strokeWidth="0.7" fill="none" opacity="0.2" />
        <rect x="215" y="35" width="90" height="130" rx="8" fill="#fff" stroke="#d0e4d8" strokeWidth="1.5" />
        <rect x="223" y="45" width="74" height="8" rx="4" fill="#e0f2eb" />
        <text x="260" y="52" textAnchor="middle" fontSize="6" fill="#1a5c2e" fontFamily="sans-serif" fontWeight="600">Dashboard</text>
        <rect x="228" y="95" width="10" height="20" rx="2" fill="#3db89a" />
        <rect x="242" y="85" width="10" height="30" rx="2" fill="#2d8f4e" />
        <rect x="256" y="90" width="10" height="25" rx="2" fill="#3db89a" />
        <rect x="270" y="78" width="10" height="37" rx="2" fill="#1a5c2e" />
        <polyline points="228,70 242,64 256,68 270,60 284,55" stroke="#3db89a" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function Solucion() {
  return (
    <section id="solucion" style={{ padding: "6rem 1.5rem", background: "var(--bg-section)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center fade-up" style={{ marginBottom: "4rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>La solución</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            Detectamos, resolvemos y mapeamos
          </h2>
          <p style={{ maxWidth: 600, margin: "1rem auto 0", color: "#5a6672", fontSize: "1.02rem", lineHeight: 1.7 }}>
            No creamos una fuerza de trabajo nueva. Nos montamos sobre la red que ya recorre la calle todos los días.
          </p>
        </div>

        {steps.map((s, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-up ${i < steps.length - 1 ? "mb-16" : ""}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className={i % 2 === 1 ? "order-2 md:order-2" : ""}>
              <div className="step-num" style={{ marginBottom: "1rem" }}>{s.num}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.35rem", color: "var(--green-dark)", marginBottom: "0.75rem", fontFamily: "var(--font-syne)" }}>
                {s.title}
              </h3>
              <p style={{ color: "#5a6672", lineHeight: 1.8, fontSize: "0.97rem" }}>{s.text}</p>
            </div>
            <div
              className={i % 2 === 1 ? "order-1 md:order-1" : ""}
              style={{
                background: "linear-gradient(135deg, #f0faf5, #e6f7f0)",
                borderRadius: 20,
                padding: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 200,
              }}
            >
              {s.svg}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
