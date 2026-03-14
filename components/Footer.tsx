"use client";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/abhishek" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abhishek" },
  { label: "Twitter", href: "https://twitter.com/abhishek" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#fafafa] py-20 px-6"
      style={{ color: "#000" }}
    >
      {/* Big CTA heading */}
      <motion.div
        className="border-b border-black/10 pb-12 mb-16 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="font-display text-black uppercase leading-none tracking-tighter-custom w-full"
          style={{
            fontSize: "clamp(3rem, 12vw, 12vw)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          START A
          <br />
          <span className="italic" style={{ fontWeight: 100 }}>
            Project
          </span>
        </h2>
      </motion.div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
        {/* Col 1 — Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[#888] text-xs uppercase tracking-widest mb-6">
            Find me online
          </p>
          <ul className="flex flex-col gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wavy-link font-display text-black text-lg font-medium"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 2 — Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[#888] text-xs uppercase tracking-widest mb-4">
            Direct
          </p>
          <a
            href="mailto:hello@abhishekprakash.dev"
            className="font-display text-black font-medium leading-tight hover:opacity-60 transition-opacity"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
          >
            hello@abhishek
            <br />
            prakash.dev
          </a>
        </motion.div>

        {/* Col 3 — Rights */}
        <motion.div
          className="md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[#888] text-xs uppercase tracking-widest mb-4">
            MMXXVI
          </p>
          <p className="font-display text-[#555] text-sm leading-relaxed">
            Abhishek Prakash
            <br />
            Full-Stack Developer
            <br />
            All rights reserved © 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
