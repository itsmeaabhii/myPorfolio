import { Code2, Database, Shield, Cpu, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & ML",
      icon: <Cpu className="w-6 h-6 text-[#FF6B50] mb-4" />,
      skills: "TensorFlow, PyTorch, scikit-learn, NLP, Computer Vision",
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#111111] to-[#0a0a0a]",
    },
    {
      title: "Full-Stack",
      icon: <Code2 className="w-5 h-5 text-[#888888] mb-4 group-hover:text-white transition-colors" />,
      skills: "React, Node.js, FastAPI, Flask",
      className: "md:col-span-1 md:row-span-1 bg-[#111111]",
    },
    {
      title: "Security",
      icon: <Shield className="w-5 h-5 text-[#888888] mb-4 group-hover:text-white transition-colors" />,
      skills: "Cryptography, PQC, Encryption",
      className: "md:col-span-1 md:row-span-1 bg-[#111111]",
    },
    {
      title: "Data & Vectors",
      icon: <Database className="w-5 h-5 text-[#888888] mb-4 group-hover:text-white transition-colors" />,
      skills: "PostgreSQL, MongoDB, FAISS, Pinecone",
      className: "md:col-span-1 md:row-span-1 bg-[#111111]",
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-5 h-5 text-[#888888] mb-4 group-hover:text-white transition-colors" />,
      skills: "Docker, AWS, Vercel, Git",
      className: "md:col-span-1 md:row-span-1 bg-[#111111]",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111111]/50">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-satoshi">
          Technical <span className="text-[#666666]">Arsenal.</span>
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#FF6B50] animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase hidden sm:block">
            Capabilities
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`group rounded-3xl p-8 border border-[#222222] hover:border-[#FF6B50]/30 transition-all duration-500 overflow-hidden relative ${category.className}`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>{category.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-satoshi mb-2">
                  {category.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-satoshi group-hover:text-[#aaaaaa] transition-colors">
                  {category.skills}
                </p>
              </div>
            </div>
            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B50]/opacity-0 to-[#FF6B50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
