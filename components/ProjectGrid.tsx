"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  href?: string;
  year: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "CogniChat",
    subtitle: "Mini RAG AI System",
    tags: ["FastAPI", "Pinecone", "Gemini", "Cohere"],
    href: "https://cogni-chat-phi.vercel.app/",
    year: "2024",
    color: "#1a1010",
  },
  {
    title: "NexusCode",
    subtitle: "Real-time Collaborative Code Editor",
    tags: ["Next.js", "TypeScript", "Yjs", "WebSockets"],
    year: "2024",
    color: "#0d1117",
  },
  {
    title: "Java RAG",
    subtitle: "Spring Boot + Lucene Pipeline",
    tags: ["Java", "Spring Boot", "Apache Lucene", "Ollama"],
    year: "2024",
    color: "#0f0e0a",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.href || "#"}
      target={project.href ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative block overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "16/10",
        background: project.color,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover background overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(139,69,69,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Image placeholder with architectural lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border-t border-white/10"
            style={{ top: `${(i + 1) * 16}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      {/* Image scale effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `linear-gradient(135deg, ${project.color} 0%, #18181b 100%)`,
        }}
      />

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 pb-10">
        {/* Tag line */}
        <motion.div
          className="flex gap-3 mb-3"
          animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[#888] font-mono text-[12px] uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="flex items-end justify-between">
          <div>
            <h3
              className="font-display text-[#e5e5e5] uppercase leading-none"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </h3>
            <p className="text-[#888] font-display text-base font-light italic mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Arrow button */}
          <motion.div
            className="flex items-center justify-center bg-white text-black shrink-0"
            style={{ width: 44, height: 44 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={20} strokeWidth={2} />
          </motion.div>
        </div>
      </div>

      {/* Year label */}
      <span className="absolute top-6 right-6 text-[#555] font-mono text-xs tracking-widest">
        {project.year}
      </span>
    </motion.a>
  );
}

export default function ProjectGrid() {
  return (
    <section id="work" className="bg-white py-24 px-6">
      {/* Heading */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="font-display text-black uppercase leading-none"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 8vw)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          SELECTED{" "}
          <span
            className="italic"
            style={{ fontWeight: 100 }}
          >
            Works
          </span>
        </h2>
        <p className="text-[#888] font-mono text-sm mt-4 uppercase tracking-widest">
          — AI Systems · Real-time · Backend Infrastructure
        </p>
      </motion.div>

      {/* 2-col grid */}
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
        }}
      >
        {/* First card spans full width on large screens */}
        <div className="lg:col-span-2">
          <ProjectCard project={projects[0]} index={0} />
        </div>
        <ProjectCard project={projects[1]} index={1} />
        <ProjectCard project={projects[2]} index={2} />
      </div>
    </section>
  );
}
