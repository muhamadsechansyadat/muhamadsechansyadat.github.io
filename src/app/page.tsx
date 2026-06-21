import About from "@/components/About";
import Contact from "@/components/Contact";
import CvModal from "@/components/CvModal";
import EducationLanguages from "@/components/EducationLanguages";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <EducationLanguages />
      <Contact />
      <Footer />
      <CvModal />
    </main>
  );
}
