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

      <div className="pt-20 flex flex-col">
        {/* Hero */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        {/* Expertise */}
        <section id="expertise" className="min-h-screen">
          <Expertise />
        </section>

        {/* Services */}
        <section id="services" className="min-h-screen">
          <Services />
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        {/* Tech */}
        <section id="tech" className="min-h-screen">
          <Tech />
        </section>

        {/* About */}
        <section id="about" className="min-h-screen">
          <About />
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

        {/* Footer */}
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
