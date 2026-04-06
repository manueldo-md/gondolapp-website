const words = ["marcas", "distribuidoras"];

export default function CycleText() {
  return (
    <span className="bubble-container">
      {words.map((word, i) => (
        <span
          key={word}
          className={`bubble-word grad-text-animated bubble-float-${i}`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
