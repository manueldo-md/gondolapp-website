import Image from "next/image";
import { IMG } from "@/lib/assets";

/* Cuatro pantallas escalonadas. Sin marco de dispositivo dibujado:
   radio 28px y sombra, como pide el brief §10. */
const TELEFONOS = [
  { a: IMG.aUbic, alt: "App del vendedor: validación de ubicación", mt: 48 },
  { a: IMG.aCam, alt: "App del vendedor: cámara guiada", mt: 0 },
  { a: IMG.aMulti, alt: "App del vendedor: pregunta de selección múltiple", mt: 72 },
  { a: IMG.aDone, alt: "App del vendedor: misión completada", mt: 24 },
];

export default function AppCampo() {
  return (
    <section id="app" style={{ padding: "112px 0 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 820 }}>
            <div className="kick">La app de campo</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              Se instala desde un link. Una misión tarda 30 segundos.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: 400, fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", fontWeight: 500 }}>
            La misma app para vendedores, fixers y equipo interno, con el look de cada rol. Foto con GPS, dos o tres
            preguntas, y 100 puntos por misión aprobada para los vendedores.
          </p>
        </div>
      </div>

      <div className="app-tira">
        {TELEFONOS.map((p) => (
          <Image
            key={p.alt}
            src={p.a.src}
            alt={p.alt}
            width={p.a.w}
            height={p.a.h}
            sizes="(max-width: 900px) 60vw, 24vw"
            className="app-tel"
            style={{
              marginTop: p.mt,
              borderRadius: 28,
              boxShadow: "0 50px 100px -40px rgba(15,26,20,.55), 0 0 0 1px rgba(15,26,20,.06)",
            }}
          />
        ))}
      </div>

      <style>{`
        .app-tira {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
          margin: 56px auto 0;
          width: 100%;
          max-width: 1100px;
          padding: 0 32px;
          box-sizing: border-box;
        }
        .app-tel { display: block; width: 24%; max-width: 250px; height: auto; }
        @media (max-width: 900px) {
          /* Tira con scroll-snap y sin escalonado, para que entren bien */
          .app-tira {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            padding: 0 20px;
            justify-content: flex-start;
          }
          .app-tira::-webkit-scrollbar { display: none; }
          .app-tel {
            flex: 0 0 58%;
            width: 58%;
            max-width: none;
            margin-top: 0 !important;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}
