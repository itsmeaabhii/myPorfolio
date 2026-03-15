export default function Manifesto() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-2 h-2 rounded-full bg-[#FF6B50] animate-pulse"></div>
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">
          About Me
        </span>
      </div>

      <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white max-w-5xl mb-24 font-satoshi">
        I don't just write code. I design{" "}
        <span className="text-[#666666]">thoughtful, scalable solutions.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Benefit Card 1 */}
        <div className="bg-[#111111] rounded-[2.5rem] p-12 min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:bg-[#161616] transition-all duration-500">
          <div className="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
            Education
          </div>

          <div>
            <p className="text-[#888888] text-lg leading-relaxed font-satoshi mb-8">
              I'm <span className="text-white font-medium">Abhishek</span>, a Computer Science student at IIIT Kalyani, driven by curiosity and a love for building meaningful software. Whether it's developing intelligent AI systems, designing elegant user interfaces, or architecting reliable backend services, I bring clarity, creativity, and commitment to every project.
            </p>
          </div>

          <div className="mt-auto">
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-white font-satoshi">
              IIIT
            </h3>
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#444444] group-hover:text-[#666666] transition-colors font-satoshi">
              Kalyani.
            </h3>
          </div>
        </div>

        {/* Benefit Card 2 */}
        <div className="bg-gradient-to-br from-[#FF6B50]/20 to-[#FF6B50]/5 rounded-[2.5rem] p-8 md:p-12 min-h-[520px] flex flex-col justify-between relative overflow-hidden group border border-[#FF6B50]/10">
          <div className="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#FF6B50] border border-[#FF6B50]/20">
            Philosophy
          </div>
          
          <div>
            <p className="text-[#aaaaaa] text-lg leading-relaxed font-satoshi mb-8">
              I believe in continuous learning, building systems that scale, and maintaining clean code. My focus lies at the intersection of modern frameworks, AI techniques, and industry best practices.
            </p>
          </div>

          {/* Abstract representation */}
          <div className="mt-auto relative h-48 w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
              alt="AI Matrix"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute bottom-6 left-6 z-20 text-white font-satoshi">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#FF6B50]">
                Core Focus
              </div>
              <div className="text-2xl font-bold">AI & Full-Stack Systems</div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
