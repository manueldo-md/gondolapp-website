"use client";
/* La clase del lienzo guarda su propio estado y se redibuja con forzar():
   por eso se lee la instancia (que vive en un ref) durante el render.
   La lógica de los lienzos no tiene tipos: de ahí los any. */
/* eslint-disable react-hooks/refs, @typescript-eslint/no-explicit-any */

import { useEffect, useReducer, useRef } from "react";

/* Motor mínimo para la lógica de los lienzos de diseño (docs/sitio/diseno-v1).

   Cada lienzo trae su lógica como una clase con `state`, `setState`,
   `componentDidMount` y `renderVals()`, y la plantilla lee lo que devuelve
   `renderVals()`. Acá se corre esa misma clase dentro de un componente de
   React, así el sitio se comporta igual que el diseño aprobado sin
   reescribir su lógica. */

type Props = Record<string, unknown>;

export class DCLogic {
  state: any = {};
  props: Props = {};
  _render: () => void = () => {};

  setState(parcial: any) {
    const p = typeof parcial === "function" ? parcial(this.state) : parcial;
    this.state = { ...this.state, ...p };
    this._render();
  }

  componentDidMount?(): void;
  componentWillUnmount?(): void;
  renderVals(): any {
    return {};
  }
}

/* Compara los valores que recibe una sección sin mirar las funciones: la
   lógica del lienzo arma funciones nuevas en cada vuelta, pero si los datos
   no cambiaron la sección no tiene nada que redibujar. */
function iguales(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a === "function" && typeof b === "function") return true;
  if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a as object);
  const kb = Object.keys(b as object);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => iguales((a as any)[k], (b as any)[k]));
}

export function igualSinFunciones(p: { v: unknown }, n: { v: unknown }) {
  return iguales(p.v, n.v);
}

export function useDC(Logica: new () => DCLogic, props: Props) {
  const ref = useRef<DCLogic | null>(null);
  const [, forzar] = useReducer((x: number) => x + 1, 0);
  if (!ref.current) {
    ref.current = new Logica();
    ref.current.props = props;
  }
  const inst = ref.current;
  inst.props = props;
  inst._render = forzar;

  useEffect(() => {
    inst.componentDidMount?.();
    return () => inst.componentWillUnmount?.();
  }, [inst]);

  return inst.renderVals();
}
