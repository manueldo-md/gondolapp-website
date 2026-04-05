"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 133, prefix: "", suffix: "", label: "Puntos de venta relevados" },
  { value: 16, prefix: "", suffix: "", label: "Ciudades de Entre Ríos" },
  { value: 500, prefix: "+", suffix: "", label: "Fotos verificadas por IA" },
  { value: 48, prefix: "", suffix: "hs", label: "Desde el arranque hasta los primeros datos" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--green-dark)", lineHeight: 1, fontFamily: "var(--font-syne)" }}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Numeros() {
  return (
    <section id="numeros" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>Piloto en Entre Ríos</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            No es un PowerPoint. Es lo que ya pasó.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i * 150}ms` }}>
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              <p style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: 8, lineHeight: 1.4 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
