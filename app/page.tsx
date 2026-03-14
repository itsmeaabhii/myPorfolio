import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Manifesto />
      <Footer />
    </main>
  );
}
