const cards = [
  {
    icon: "🏪",
    text: "Las marcas gastan fortunas en trade marketing sin saber si sus productos estan bien exhibidos a 200km de Buenos Aires.",
  },
  {
    icon: "🚛",
    text: "Las distribuidoras gestionan decenas de vendedores con WhatsApp y planillas de Excel.",
  },
  {
    icon: "📊",
    text: "El canal tradicional mueve el 40% del consumo masivo argentino y nadie lo mide bien.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="py-16 md:py-24 bg-[#F8F8F8] px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-xl border border-gray-100 p-8 shadow-sm"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-4xl block mb-4">{card.icon}</span>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
