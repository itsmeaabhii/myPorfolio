import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tags: string;
  href?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "COGNI CHAT",
    subtitle: "Mini RAG AI System",
    tags: "AI System / FastAPI / Pinecone",
    href: "https://github.com/itsmeaabhii/Cogni_Chat",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "FLUTTER AI CHAT",
    subtitle: "Modern AI-powered chat application",
    tags: "Mobile / Flutter / Firebase",
    href: "https://github.com/itsmeaabhii/flutter-chat-app",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "NATIVE MUSIC",
    subtitle: "Local music library management",
    tags: "Android / Kotlin",
    href: "https://github.com/itsmeaabhii/music-player",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "SECURE MESSENGER",
    subtitle: "RSA & AES encryption system",
    tags: "Cryptography / Security / Python",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
        <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FF6B50]">
          Selected Work
        </h2>
        <span className="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">
          Personal Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group cursor-pointer"
          >
            <a
              href={project.href || "#"}
              target={project.href ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#111111] rounded-2xl relative border border-[#222222] group-hover:border-[#FF6B50]/30 transition-colors duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
              </div>
              <div className="mt-8 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors font-satoshi text-white">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">
                    {project.tags}
                  </p>
                </div>
                <div className="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                  <ArrowUpRight className="text-2xl w-6 h-6 text-white group-hover:text-black" />
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
