"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Mismos selectores que la maqueta anima con animation-timeline.
   Acá se resuelven con IntersectionObserver para que funcione en Firefox
   (brief §8). */
const SEL = [
  "section > .wrap > *",
  "section > .hs",
  "footer > .wrap > *",
  ".shot",
  "section img[alt]",
].join(", ");

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.remove("js-reveal");
      return;
    }

    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      },
      /* Dispara cuando el borde superior cruza el 88% del alto de pantalla.
         Con un umbral por porcentaje, un bloque más alto que la pantalla
         podría no alcanzarlo nunca. */
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    const register = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);

      /* Ya visible al cargar: se muestra sin animar, igual que view()
         en la maqueta (evita que el hero parpadee y no castiga el LCP). */
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
        el.classList.add("rv-now", "in");
        return;
      }
      io.observe(el);
    };

    const scan = (root: ParentNode = document) => {
      root.querySelectorAll(SEL).forEach(register);
    };

    scan();

    /* Contenido que aparece después (paneles de pestañas, pasos del
       "cómo funciona") también tiene que poder animarse. */
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(SEL)) register(node);
          scan(node);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
