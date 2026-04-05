export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tu gondola habla.
              <br />
              <span className="text-bosque">La estas escuchando?</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Un ecosistema donde vendedores, distribuidoras y marcas trabajan juntos. Cada foto suma. Todos ganan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contacto"
                className="rounded-lg bg-bosque px-8 py-3.5 text-base font-medium text-white hover:bg-pradera transition-colors text-center"
              >
                Quiero una demo
              </a>
              <a
                href="#ecosistema"
                className="rounded-lg border-2 border-bosque px-8 py-3.5 text-base font-medium text-bosque hover:bg-neblina transition-colors text-center"
              >
                Como funciona?
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-neblina rounded-3xl -rotate-3 scale-105" />
              <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <span className="text-5xl">📱</span>
                  <span className="mx-4 text-3xl text-gray-300">+</span>
                  <span className="text-5xl">🖥️</span>
                  <p className="mt-4 text-gray-400 font-medium">App + Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
