const steps = [
  {
    num: "1", title: "Detectar",
    text: "Vendedores que ya recorren comercios todos los días sacan fotos de las góndolas con su celular. La IA analiza cada imagen: identifica productos, mide presencia, detecta quiebres y lee precios.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <rect x="30" y="30" width="80" height="140" rx="12" stroke="var(--g-600)" strokeWidth="2" fill="var(--g-50)" />
        <rect x="38" y="45" width="64" height="100" rx="4" fill="#dcfce7" />
        <circle cx="70" cy="80" r="14" stroke="var(--t-600)" strokeWidth="2" fill="none" />
        <circle cx="70" cy="80" r="5" fill="var(--t-600)" />
        <rect x="58" y="64" width="24" height="4" rx="2" fill="var(--t-600)" />
        <path d="M120 100 L165 100" stroke="var(--t-400)" strokeWidth="2" strokeDasharray="5 4" />
        <polygon points="165,95 175,100 165,105" fill="var(--t-400)" />
        <circle cx="220" cy="100" r="40" stroke="var(--g-700)" strokeWidth="2" fill="var(--g-50)" />
        <text x="220" y="93" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="12" fill="var(--g-700)">IA</text>
        <circle cx="207" cy="112" r="3" fill="var(--t-600)" /><circle cx="220" cy="118" r="3" fill="var(--t-600)" /><circle cx="233" cy="112" r="3" fill="var(--t-600)" />
        <line x1="207" y1="112" x2="220" y2="118" stroke="var(--t-400)" strokeWidth="1.5" /><line x1="220" y1="118" x2="233" y2="112" stroke="var(--t-400)" strokeWidth="1.5" />
        {[["Precio",72],["Stock",96],["Share",120]].map(([l,y],i)=>(
          <g key={i}>
            <rect x="272" y={y as number} width="44" height="18" rx="9" fill="var(--g-50)" stroke="var(--g-600)" strokeWidth="1" />
            <text x="294" y={(y as number)+13} textAnchor="middle" fontSize="8" fill="var(--g-700)" fontFamily="sans-serif" fontWeight="600">{l}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    num: "2", title: "Resolver",
    text: "Donde se detecta un problema, se envía un fixer. Ejecutores independientes que reciben misiones concretas: acomodan la góndola, hacen frenteo y reportan con foto antes y después.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <text x="60" y="20" textAnchor="middle" fontSize="9" fill="var(--slate-400)" fontFamily="sans-serif" fontWeight="700">ANTES</text>
        <rect x="15" y="28" width="90" height="80" rx="8" stroke="var(--slate-200)" strokeWidth="1.5" fill="var(--slate-50)" />
        <rect x="22" y="36" width="16" height="28" rx="2" fill="#fca5a5" transform="rotate(-8 30 50)" />
        <rect x="40" y="40" width="16" height="24" rx="2" fill="#93c5fd" transform="rotate(5 48 52)" />
        <rect x="60" y="34" width="14" height="30" rx="2" fill="#fcd34d" transform="rotate(-10 67 49)" />
        <rect x="62" y="70" width="30" height="26" rx="2" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="77" y="87" textAnchor="middle" fontSize="7" fill="#ef4444" fontFamily="sans-serif">vacío</text>
        <path d="M115 68 L150 68" stroke="var(--t-400)" strokeWidth="2.5" /><polygon points="150,63 160,68 150,73" fill="var(--t-400)" />
        <circle cx="137" cy="55" r="9" fill="var(--g-50)" stroke="var(--g-200,#bbf7d0)" strokeWidth="1" />
        <text x="137" y="59" textAnchor="middle" fontSize="10">🔧</text>
        <text x="240" y="20" textAnchor="middle" fontSize="9" fill="var(--g-600)" fontFamily="sans-serif" fontWeight="700">DESPUÉS</text>
        <rect x="195" y="28" width="90" height="80" rx="8" stroke="var(--g-600)" strokeWidth="1.5" fill="var(--g-50)" />
        {[202,220,238,256].map((x,i)=>(
          <rect key={i} x={x} y="36" width="16" height="28" rx="2" fill={["#fca5a5","#93c5fd","#fcd34d","#86efac"][i]} />
        ))}
        {[202,220,238,256].map((x,i)=>(
          <rect key={i} x={x} y="70" width="16" height="26" rx="2" fill={["#c4b5fd","#fdba74","#93c5fd","#fca5a5"][i]} />
        ))}
        <circle cx="285" cy="30" r="9" fill="var(--g-600)" />
        <path d="M280 30 L283 33 L290 26" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "3", title: "Mapear",
    text: "Cada foto construye el mapa. Datos reales, geolocalizados y verificados acumulados día a día. Inteligencia de mercado que no existía, disponible para quienes mueven el consumo masivo.",
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 320, width: "100%" }}>
        <path d="M140 20 C160 18 180 25 185 40 C190 55 195 65 200 80 C205 95 195 110 190 125 C185 140 175 155 170 170 C165 180 155 188 150 185 C145 182 140 175 138 165 C135 155 130 140 128 125 C125 110 120 95 118 80 C115 65 120 45 130 30 Z" stroke="var(--g-600)" strokeWidth="1.5" fill="var(--g-50)" />
        {[[150,55,5],[160,75,7],[145,90,4],[155,110,6],[165,130,4],[148,145,5]].map(([cx,cy,r],i)=>(
          <circle key={i} cx={cx} cy={cy} r={r} fill="var(--g-600)" opacity="0.7" />
        ))}
        <circle cx="160" cy="75" r="13" stroke="var(--t-400)" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="160" cy="75" r="20" stroke="var(--t-400)" strokeWidth="0.7" fill="none" opacity="0.2" />
        <rect x="215" y="30" width="90" height="135" rx="10" fill="#fff" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="223" y="42" width="74" height="7" rx="3.5" fill="var(--g-50)" />
        <text x="260" y="49" textAnchor="middle" fontSize="6" fill="var(--g-700)" fontFamily="sans-serif" fontWeight="700">Dashboard</text>
        {[["95","h20"],["58%","h30"],["25","h15"],["41%","h35"]].map(([v,h],i)=>(
          <g key={i}>
            <rect x={228+i*14} y={120-(parseInt(h.slice(1)))} width="10" height={parseInt(h.slice(1))} rx="2" fill={i%2===0?"var(--g-600)":"var(--t-600)"} />
          </g>
        ))}
        <polyline points="228,80 242,73 256,76 270,68 284,62" stroke="var(--t-400)" strokeWidth="1.5" fill="none" />
        {[228,242,256,270,284].map((x,i)=>(
          <circle key={i} cx={x} cy={[80,73,76,68,62][i]} r="2.5" fill="var(--t-400)" />
        ))}
      </svg>
    ),
  },
];

export default function Solucion() {
  return (
    <section id="solucion" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>La solución</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.2 }}>
            Detectamos, resolvemos y mapeamos
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0.75rem auto 0" }}>
            Sin crear nueva fuerza de trabajo. Nos montamos sobre la red que ya recorre la calle.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {steps.map((s, i) => (
            <div key={i} className={`blur-in`} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              transitionDelay: `${i * 100}ms`,
            }}>
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div className="step-circle" style={{ marginBottom: "1.25rem" }}>{s.num}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
              <div style={{
                order: i % 2 === 1 ? 1 : 2,
                background: "linear-gradient(135deg, var(--g-50), #f0fdfa)",
                borderRadius: 20,
                border: "1px solid rgba(22,163,74,0.12)",
                padding: "2.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: 200,
              }}>
                {s.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive fix for mobile */}
      <style>{`
        @media (max-width: 768px) {
          #solucion .blur-in > div { grid-template-columns: 1fr !important; }
          #solucion .blur-in > div > div { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
