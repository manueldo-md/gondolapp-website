import Image from "next/image";
import { TAGS_QUE, TAGS_CON, TAGS_DE } from "@/lib/home-data";
import { IMG } from "@/lib/assets";

const SOMBRA = "0 40px 80px -40px rgba(0,0,0,.8)";

/* "Del mapa a la foto": del racimo del mapa a la góndola de ese día */
const PASOS_MAPA = [
  {
    t: "Tocás un racimo",
    d: "El anillo te dice cuántos comercios tienen tu producto y cuántos no. Por zona, por campaña.",
  },
  {
    t: "Ves los comercios, sin el nombre",
    d: "PDV-0013, autoservicio, sin presencia. Quién es el comercio lo sabe la distribuidora, no vos. Esa es la privacidad del ecosistema.",
  },
  {
    t: "Abrís la foto",
    d: "La góndola como estaba ese día, con fecha y GPS validados. Si no hay foto, no hay dato.",
  },
];

const TARJETAS = [
  {
    asset: IMG.mRes,
    alt: "Resultados de campaña en tiempo real",
    t: "Resultados de campaña, en tiempo real",
    d: "Misiones, fotos aprobadas, tipo de negocio y cada pregunta con su distribución, mientras la campaña corre.",
    recorte: false,
  },
  {
    asset: IMG.mMapa,
    alt: "Mapa de resultados por campaña",
    t: "Mapa de resultados",
    d: "Cada comercio con su último estado, pintado por presencia o por tipo de negocio. Los huecos de cobertura, a la vista.",
    recorte: false,
  },
  {
    asset: IMG.informe,
    alt: "Informe HTML exportable: resumen y mapa de dónde se relevó",
    t: "Informe HTML para compartir",
    d: "Un link con los resultados, el mapa y las fotos de respaldo. Para el directorio, para tu distribuidora o para tu cliente.",
    recorte: true,
  },
];

function Chip({ t, variante }: { t: string; variante: "solido" | "borde" | "punteado" }) {
  const base = { fontSize: 14, fontWeight: 700, padding: "9px 14px", borderRadius: 999 } as const;
  if (variante === "solido") return <span style={{ ...base, background: "#2A2F3D", color: "#FFFFFF" }}>{t}</span>;
  if (variante === "borde") return <span style={{ ...base, border: "1px solid #3B4152", color: "#E5E7EB" }}>{t}</span>;
  return <span style={{ ...base, border: "1px dashed #4B5163", color: "#E5E7EB" }}>{t}</span>;
}

export default function TiempoReal() {
  return (
    <section id="resultados" style={{ padding: "112px 0", background: "var(--rt-bg)", color: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 820 }}>
            <div className="kick" style={{ color: "var(--rt-accent)" }}>Tiempo real</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              Lo que sale del ecosistema: datos que podés usar hoy.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: 400, fontSize: 15, lineHeight: 1.55, color: "#C7CBD6", fontWeight: 500 }}>
            Cada misión aprobada actualiza el panel al instante. Por campaña, por zona y por comercio, con la foto de respaldo.
          </p>
        </div>

        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 56 }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".12em", color: "var(--rt-accent)" }}>QUÉ SE MIDE</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {TAGS_QUE.map((t) => <Chip key={t} t={t} variante="solido" />)}
            </div>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".12em", color: "var(--rt-accent)" }}>CON QUÉ TIPO DE PREGUNTA</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {TAGS_CON.map((t) => <Chip key={t} t={t} variante="borde" />)}
            </div>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".12em", color: "var(--rt-accent)" }}>DE DÓNDE SALE</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {TAGS_DE.map((t) => <Chip key={t} t={t} variante="punteado" />)}
            </div>
          </div>
        </div>
      </div>

      {/* Capturas. En móvil es una tira con scroll-snap (brief §6.4). */}
      <div className="hs rt-tira" style={{ marginTop: 64 }}>
        {TARJETAS.map((c) => (
          <div key={c.t} className="rt-item" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {c.recorte ? (
              <div style={{ aspectRatio: "16/10", borderRadius: 18, overflow: "hidden", boxShadow: SOMBRA, background: "#FFFFFF", position: "relative" }}>
                <Image src={c.asset.src} alt={c.alt} fill sizes="(max-width: 900px) 84vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 12.4%" }} />
              </div>
            ) : (
              <Image
                src={c.asset.src} alt={c.alt} width={c.asset.w} height={c.asset.h}
                sizes="(max-width: 900px) 84vw, 30vw"
                style={{ display: "block", width: "100%", height: "auto", borderRadius: 18, boxShadow: SOMBRA, background: "var(--shot-bg)" }}
              />
            )}
            <div>
              <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em" }}>{c.t}</div>
              <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.55, color: "#C7CBD6" }}>{c.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Del mapa a la foto: de un racimo del mapa a la góndola real */}
      <div className="wrap">
        <div className="rt-mapa">
          <div style={{ borderRadius: 18, overflow: "hidden", background: "#FFFFFF", boxShadow: SOMBRA, position: "relative" }}>
            <Image
              src={IMG.mapaRacimos.src}
              alt="Mapa de una campaña: racimos por zona y, debajo, los comercios del racimo con su presencia"
              width={IMG.mapaRacimos.w}
              height={IMG.mapaRacimos.h}
              sizes="(max-width: 768px) 92vw, 56vw"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {/* Señala el racimo "14".
                Los porcentajes apuntan al centro del racimo en la imagen
                (747 × 199 de 1174 × 933) y el translate centra el aro ahí:
                si se posicionara por la esquina, al cambiar el ancho de
                pantalla el aro se correría del racimo. */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "63.6%",
                top: "21.2%",
                transform: "translate(-50%, -50%)",
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "3px solid var(--mint)",
                boxShadow: "0 0 0 6px rgba(126,226,168,.25)",
              }}
            />
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".12em", color: "var(--rt-accent)" }}>
              DEL MAPA A LA FOTO
            </div>
            <h3 style={{ margin: "12px 0 0", fontWeight: 800, fontSize: "clamp(26px, 2.6vw, 36px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Cada punto del mapa es una góndola real.
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 26 }}>
              {PASOS_MAPA.map((p, i) => (
                <div key={p.t} style={{ display: "flex", gap: 14 }}>
                  <div
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "#2A2F3D",
                      color: "var(--rt-accent)",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{p.t}</div>
                    <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.55, color: "#C7CBD6" }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 26, background: "#2A2F3D", borderRadius: 14, padding: 10 }}>
              <Image
                src={IMG.antes.src}
                alt="Foto de la góndola del comercio PDV-0013"
                width={IMG.antes.w}
                height={IMG.antes.h}
                sizes="72px"
                style={{ flexShrink: 0, width: 72, height: 54, objectFit: "cover", borderRadius: 8 }}
              />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#E5E7EB" }}>PDV-0013 · Autoservicio</div>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--rt-accent)", marginTop: 4 }}>
                  22 OCT · 11:42 · GPS VALIDADO · SIN PRESENCIA
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ margin: "28px 0 0", fontSize: 13, color: "#8B91A3" }}>Cifras y pantallas del entorno de demostración.</p>
      </div>

      <style>{`
        /* Del mapa a la foto: imagen ancha a la izquierda, relato a la
           derecha. En el celular se apila con la imagen arriba. */
        .rt-mapa {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(280px, 1fr);
          gap: 40px;
          align-items: center;
          margin-top: 72px;
        }
        @media (max-width: 768px) {
          .rt-mapa { grid-template-columns: 1fr; gap: 28px; }
        }

        /* En escritorio, grilla dentro del contenedor */
        .rt-tira {
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          overflow: visible;
        }
        @media (max-width: 900px) {
          /* En móvil, tira horizontal con scroll-snap */
          .rt-tira {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding: 0 20px;
            margin-left: 0;
            margin-right: 0;
          }
          .rt-item { flex: 0 0 84%; }
        }
      `}</style>
    </section>
  );
}
