import { NavbarEn } from "@/components/Navbar-en";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/en/Hero";
import { About } from "@/components/sections/en/About";
import { Services } from "@/components/sections/en/Services";
import { Projects } from "@/components/sections/en/Projects";
import { CaseStudies } from "@/components/sections/en/CaseStudies";
import { Skills } from "@/components/sections/en/Skills";
import { Blog } from "@/components/sections/en/Blog";
import { Contact } from "@/components/sections/en/Contact";

const English = () => {
  return (
    <div className="min-h-screen">
      <NavbarEn />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CaseStudies />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default English;