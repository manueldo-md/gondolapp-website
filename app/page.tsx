import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import AppMovil from "@/components/AppMovil";
import Gamificacion from "@/components/Gamificacion";
import Ecosistema from "@/components/Ecosistema";
import ParaMarcas from "@/components/ParaMarcas";
import ParaDistribuidoras from "@/components/ParaDistribuidoras";
import Numeros from "@/components/Numeros";
import Comparativa from "@/components/Comparativa";
import ComoArranca from "@/components/ComoArranca";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <AppMovil />
        <Gamificacion />
        <Ecosistema />
        <ParaMarcas />
        <ParaDistribuidoras />
        <Numeros />
        <Comparativa />
        <ComoArranca />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollAnimations />
    </>
  );
}
