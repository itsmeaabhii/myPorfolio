import {
  LayoutGrid,
  Globe,
  Smartphone,
  Package,
  Megaphone,
  ArrowUpRight,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Skills from "@/components/Skills";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Manifesto />
            <Skills />
            <ProjectGrid />
            <Footer />
        </>
    );
}
