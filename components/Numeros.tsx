"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 133, label: "Puntos de venta relevados", prefix: "" },
  { value: 16, label: "Ciudades de Entre Rios", prefix: "" },
  { value: 500, label: "Fotos verificadas", prefix: "+" },
  { value: 48, label: "Horas desde el arranque hasta los primeros datos", prefix: "", suffix: "hs" },
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
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
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
    <div ref={ref} className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-bold text-bosque">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Numeros() {
  return (
    <section id="numeros" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 fade-in">
          No es un PowerPoint. Es lo que ya paso.
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="fade-in" style={{ transitionDelay: `${i * 150}ms` }}>
              <Counter value={m.value} prefix={m.prefix} suffix={"suffix" in m ? (m as { suffix?: string }).suffix : ""} />
              <p className="mt-2 text-gray-500 text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
