import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import AIPowered from "@/components/AIPowered";
import Results from "@/components/Results";
import About from "@/components/About";
import ClientPortal from "@/components/ClientPortal";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <AIPowered />
        <Results />
        <About />
        <ClientPortal />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
