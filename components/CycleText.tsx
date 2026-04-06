"use client";

import { useState, useEffect } from "react";

const words = ["marcas", "distribuidoras"];

export default function CycleText() {
  const [index, setIndex] = useState(0);
  const [animClass, setAnimClass] = useState("cycle-enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass("cycle-exit");
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length);
        setAnimClass("cycle-enter");
      }, 320);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={index}
      className={`grad-text-animated ${animClass}`}
      style={{ display: "inline-block", minWidth: "12rem" }}
    >
      {words[index]}
    </span>
  );
}
