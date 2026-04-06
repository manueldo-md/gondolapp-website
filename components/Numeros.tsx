"use client";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 133, prefix: "", suffix: "", label: "Puntos de venta relevados" },
  { value: 16, prefix: "", suffix: "", label: "Ciudades de Entre Ríos" },
  { value: 500, prefix: "+", suffix: "", label: "Fotos verificadas por IA" },
  { value: 48, prefix: "", suffix: "hs", label: "Hasta los primeros datos" },
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
        const dur = 1500, t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now-t0)/dur, 1);
          setCount(Math.round((1-Math.pow(1-p,3))*value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:800, letterSpacing:"-0.03em", color:"var(--g-700)", lineHeight:1 }}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Numeros() {
  return (
    <section id="numeros" style={{ padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
        <div className="blur-in" style={{ marginBottom:"3rem" }}>
          <h2 className="section-title">
            No es un PowerPoint. Es lo que ya pasó.
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"2rem" }}>
          {metrics.map((m,i)=>(
            <div key={i} className="card blur-in" style={{ padding:"2rem 1.5rem", transitionDelay:`${i*120}ms` }}>
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              <p style={{ color:"var(--text-muted)", fontSize:"0.88rem", marginTop:8, lineHeight:1.4 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
