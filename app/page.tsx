import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Expertise from "@/components/expertise/Expertise";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Tech from "@/components/tech/Tech";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <Projects />
      <Tech />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
