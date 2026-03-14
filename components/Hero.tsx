"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background zooms out as user scrolls
  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.27]);
  // Heading recedes / shrinks
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.89]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ height: "100vh", minHeight: 857 }}
    >
      {/* Layer 1 — background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: bgScale,
          willChange: "transform",
          background:
            "radial-gradient(ellipse at center, rgba(139,69,69,0.4) 0%, rgba(20,20,20,0.8) 60%, rgba(0,0,0,0.95) 100%)",
        }}
      >
        {/* Fine grid lines for depth */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Layer 2 — Main heading */}
      <motion.div
        className="relative z-10 text-center px-6 select-none"
        style={{
          scale: headingScale,
          opacity: headingOpacity,
          willChange: "transform, opacity",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Side label — absolute positioned relative to heading */}
        <motion.span
          className="hidden lg:block absolute top-2 text-[#888] font-mono text-[14px] uppercase tracking-widest"
          style={{
            left: "calc(100% + 1.5rem)",
            opacity: labelOpacity,
            whiteSpace: "nowrap",
          }}
        >
          Full-Stack&nbsp;/&nbsp;AI
        </motion.span>

        <h1
          className="font-display text-[#e5e5e5] uppercase leading-none"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 12vw)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          ABHISHEK
        </h1>
        <h1
          className="font-display text-[#e5e5e5] uppercase leading-none italic"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 12vw)",
            fontWeight: 100,
            letterSpacing: "-0.03em",
          }}
        >
          Prakash
        </h1>
      </motion.div>

      {/* Layer 3 — descriptor */}
      <motion.p
        className="absolute bottom-14 z-10 text-center text-white/70 font-display max-w-2xl px-6"
        style={{
          fontSize: "1.25rem",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          opacity: labelOpacity,
        }}
      >
        Building scalable products that fuse modern web technologies with
        AI&nbsp;/&nbsp;LLMs — real-time systems, backend infrastructure,
        and intelligent interfaces.
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        style={{ opacity: labelOpacity }}
      >
        <div className="w-px h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
