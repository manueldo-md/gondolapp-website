"use client";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 1000, prefix: "+",  suffix: "",     label: "Puntos de venta relevados",    sub: "En Entre Ríos, activos hoy"              },
  { value: 20,   prefix: "",   suffix: "",     label: "Ciudades cubiertas",            sub: "Y creciendo cada semana"                 },
  { value: 1500, prefix: "+",  suffix: "",     label: "Fotos verificadas por IA",      sub: "Triple validación automática"            },
  { value: 99.5, prefix: "",   suffix: "%",    label: "Tasa de aprobación",            sub: "Los vendedores no hacen doble trabajo"   },
  { value: 48,   prefix: "<",  suffix: " hs",  label: "Hasta los primeros datos",      sub: "Campaña activa en 24 hs"                 },
  { value: 15,   prefix: "",   suffix: "",     label: "Gondoleros activos",            sub: "Red en crecimiento"                      },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800, t0 = performance.now();
        const isDecimal = !Number.isInteger(value);
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const raw = (1 - Math.pow(1 - p, 3)) * value;
          setCount(isDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const display = Number.isInteger(value)
    ? count.toLocaleString("es-AR")
    : count.toFixed(1).replace(".", ",");

  return (
    <div ref={ref} style={{
      fontFamily: "var(--font-heading)",
      fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "var(--g-700)",
      lineHeight: 1,
    }}>
      {prefix}{display}{suffix}
    </div>
  );
}

export default function Numeros() {
  return (
    <section id="numeros" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>

        <div className="blur-in" style={{ marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>En números</span>
          <h2 className="section-title">
            No es un PowerPoint.<br />Es lo que ya pasó.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 460, margin: "0.75rem auto 0" }}>
            Operando en Entre Ríos desde 2025. Estos son los números reales.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {metrics.map((m, i) => (
            <div key={i} className="card blur-in" style={{
              padding: "2rem 1.5rem",
              textAlign: "left",
              transitionDelay: `${i * 80}ms`,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: i % 2 === 0 ? "var(--grad-brand)" : "linear-gradient(90deg, var(--t-600), var(--g-500))",
              }} />
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.88rem", marginTop: 8, marginBottom: 4 }}>
                {m.label}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.4 }}>
                {m.sub}
              </p>
            </div>
          ))}
        </div>

        <p className="blur-in" style={{ marginTop: "2.5rem", fontSize: "0.8rem", color: "var(--slate-400)", transitionDelay: "480ms" }}>
          Datos reales al {new Date().toLocaleDateString("es-AR", { month: "long", year: "numeric" })} · Solo Entre Ríos · Expansión en curso
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #numeros > div > div:last-of-type { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #numeros > div > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
