"use client";
import { useState, useEffect } from "react";
import { Menu, X, LayoutGrid, Globe, Smartphone, Package, Megaphone, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] px-6 py-6 transition-all duration-300 ${
          scrolled ? "glass-nav py-4" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium tracking-tight">
          <div className="flex items-center gap-10">
            <a href="/" id="nav-logo" className="flex items-center group">
              <div className="w-8 h-8 rounded flex items-center justify-center text-white font-extrabold text-2xl transition-transform group-hover:scale-110 tracking-tighter">
                A.
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8 text-[#888888]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="/Abhishek_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-white font-semibold hover:text-[#FF6B50] transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hidden md:flex px-5 py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#333333] rounded-lg transition-all duration-300"
            >
              Contact Me
            </a>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-10 z-[90]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white font-satoshi text-4xl font-bold tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 px-8 py-4 bg-[#FF6B50] text-black font-bold text-lg rounded-xl"
          >
            Contact Me
          </a>
        </div>
      )}
    </>
  );
}
