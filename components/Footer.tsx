const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Como funciona", href: "#ecosistema" },
  { label: "Para marcas", href: "#marcas" },
  { label: "Para distribuidoras", href: "#distribuidoras" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-[family-name:var(--font-syne)] text-xl font-bold">Gondolapp</p>
            <p className="mt-2 text-gray-400 text-sm">El mapa del consumo masivo argentino</p>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-400 space-y-2">
            <p>hola@gondolapp.com</p>
            <p>gondolapp.com</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; 2026 Gondolapp. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
