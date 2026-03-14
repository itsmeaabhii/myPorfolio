"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#manifesto" },
  { label: "Contact", href: "#contact" },
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
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex items-center justify-between"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-white font-display text-lg font-bold tracking-tighter-custom uppercase"
        style={{ letterSpacing: "-0.03em" }}
      >
        AP
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-12">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-white font-display text-[18px] font-medium tracking-tight hover:opacity-60 transition-opacity duration-300"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-10 z-40"
          style={{ mixBlendMode: "normal" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white font-display text-4xl font-bold tracking-tighter-custom uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
