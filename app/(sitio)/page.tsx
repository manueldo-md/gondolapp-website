import Hero from "@/components/home/Hero";
import QueHace from "@/components/home/QueHace";
import ComoFunciona from "@/components/home/ComoFunciona";
import Ecosistema from "@/components/home/Ecosistema";
import Muros from "@/components/home/Muros";
import TiempoReal from "@/components/home/TiempoReal";
import AppCampo from "@/components/home/AppCampo";
import Armador from "@/components/home/Armador";
import Soluciones from "@/components/home/Soluciones";
import PreciosTeaser from "@/components/home/PreciosTeaser";
import Preguntas from "@/components/home/Preguntas";
import Demo from "@/components/home/Demo";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Hero />
      <QueHace />
      <ComoFunciona />
      <Ecosistema />
      <Muros />
      <TiempoReal />
      <AppCampo />
      <Armador />
      <Soluciones />
      <PreciosTeaser />
      <Preguntas />
      <Demo />
    </>
  );
}
