"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "I build things",
  "that think.",
  "AI pipelines.",
  "Real-time systems.",
  "Scalable backends.",
  "Clean interfaces.",
];

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.4, 0.8], ["0%", "100%"]);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "100vh", background: "#09090b" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100% 120px",
        }}
      />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{ y: textY, opacity: textOpacity }}
      >
        <p
          className="font-display text-[#e5e5e5] leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 7vw)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
          }}
        >
          I build things
          <br />
          <span className="italic" style={{ fontWeight: 100 }}>
            that think.
          </span>
        </p>

        <p
          className="font-display text-[#555] mt-6 leading-tight"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 3.5vw)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          AI pipelines. Real-time systems.
          <br />
          Scalable backends. Clean interfaces.
        </p>

        {/* Animated horizontal rule */}
        <div className="flex justify-center mt-12">
          <div className="relative overflow-hidden" style={{ maxWidth: 320, width: "100%" }}>
            <motion.div
              className="h-px bg-white/30"
              style={{ width: lineWidth }}
            />
          </div>
        </div>

        <p
          className="text-[#555] font-mono text-sm uppercase tracking-widest mt-8"
        >
          Full-Stack Developer · AI Applications
        </p>
      </motion.div>
    </section>
  );
}
