import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Ecosistema from "@/components/Ecosistema";
import ParaMarcas from "@/components/ParaMarcas";
import ParaDistribuidoras from "@/components/ParaDistribuidoras";
import ParaGondoleros from "@/components/ParaGondoleros";
import ElMapa from "@/components/ElMapa";
import ComoArranca from "@/components/ComoArranca";
import Numeros from "@/components/Numeros";
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
        <Ecosistema />
        <ParaMarcas />
        <ParaDistribuidoras />
        <ParaGondoleros />
        <ElMapa />
        <ComoArranca />
        <Numeros />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollAnimations />
    </>
  );
}
