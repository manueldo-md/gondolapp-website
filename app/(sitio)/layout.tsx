import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";

/* Marco del sitio: header, pie y las apariciones al scrollear.
   La página teaser vive fuera de este grupo, así que no los hereda.
   El grupo entre paréntesis no aparece en las URLs: /marcas sigue
   siendo /marcas. */

export default function LayoutSitio({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Reveal />
    </>
  );
}
