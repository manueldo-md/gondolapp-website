"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROLES } from "@/lib/home-data";

export default function Soluciones() {
  const [role, setRole] = useState(0);
  const r = ROLES[role];
  const phones = r.phones ?? [[r.img, r.alt] as const];
  const MT = ["36px", "0", "60px"];

  return (
    <section id="actores" style={{ padding: "112px 0", background: "var(--tint-green)" }}>
      <div className="wrap">
        <div style={{ maxWidth: 900 }}>
          <div className="kick">Soluciones</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
            Una plataforma. Todos los que mueven la góndola.
          </h2>
        </div>

        <div role="tablist" aria-label="Actores" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 40 }}>
          {ROLES.map((it, i) => {
            const on = i === role;
            return (
              <button key={it.tab} type="button" role="tab" aria-selected={on} onClick={() => setRole(i)}
                style={{
                  cursor: "pointer", minHeight: 48, padding: "0 20px", borderRadius: 999, border: 0,
                  background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)",
                  fontFamily: "inherit", fontSize: 15, fontWeight: 700,
                }}>
                {it.tab}
              </button>
            );
          })}
        </div>

        <div key={role} style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center", marginTop: 48, animation: "gin 0.4s ease" }}>
          <div style={{ flex: "1 1 380px", minWidth: 0, maxWidth: 520 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: r.color }}>
              <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 3, background: r.color }} />
              {r.kicker}
            </div>
            <h3 style={{ margin: "12px 0 0", fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>{r.title}</h3>
            <p className="lead" style={{ margin: "16px 0 0", fontSize: 17 }}>{r.body}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
              {r.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.45, fontWeight: 600 }}>
                  <span aria-hidden="true" style={{ flex: "0 0 auto", width: 8, height: 8, borderRadius: 2, background: r.color, marginTop: 7 }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link href={r.href} className="btn btn-dark" style={{ marginTop: 30, minHeight: 50, fontSize: 15 }}>
              {r.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div style={{ flex: "1.3 1 520px", minWidth: 0, display: "flex", justifyContent: "center" }}>
            {r.phone ? (
              <div className="sol-tira">
                {phones.map(([a, alt], i) => (
                  <Image key={alt} src={a.src} alt={alt} width={a.w} height={a.h} sizes="(max-width: 900px) 58vw, 18vw"
                    className="sol-tel" style={{ marginTop: MT[i] ?? "0", borderRadius: 26, boxShadow: "0 50px 100px -40px rgba(15,26,20,.55), 0 0 0 1px rgba(15,26,20,.06)" }} />
                ))}
              </div>
            ) : (
              <Image className="shot bleed" src={r.img.src} alt={r.alt} width={r.img.w} height={r.img.h}
                sizes="(max-width: 900px) 92vw, 50vw" style={{ height: "auto" }} />
            )}
          </div>
        </div>
      </div>

      <style>{`
        .sol-tira { display: flex; gap: 18px; align-items: flex-start; justify-content: center; width: 100%; }
        .sol-tel { display: block; width: 30%; max-width: 230px; height: auto; }
        @media (max-width: 900px) {
          .sol-tira {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            justify-content: flex-start;
            gap: 14px;
          }
          .sol-tira::-webkit-scrollbar { display: none; }
          .sol-tel { flex: 0 0 56%; width: 56%; max-width: none; margin-top: 0 !important; scroll-snap-align: center; }
        }
      `}</style>
    </section>
  );
}
