import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Qualifications } from "@/components/Qualifications";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
