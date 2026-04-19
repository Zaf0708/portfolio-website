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

      <div className="w-full">
        {/* Hero */}
        <section id="hero" className="w-full">
          <Hero />
        </section>

        {/* Expertise */}
        <section id="expertise" className="w-full">
          <Expertise />
        </section>

        {/* Services */}
        <section id="services" className="w-full">
          <Services />
        </section>

        {/* Projects */}
        <section id="projects" className="w-full">
          <Projects />
        </section>

        {/* Tech */}
        <section id="tech" className="w-full">
          <Tech />
        </section>

        {/* About */}
        <section id="about" className="w-full">
          <About />
        </section>

        {/* Contact */}
        <section id="contact" className="w-full">
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
