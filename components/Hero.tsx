import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BackgroundPaths title="" />
      </div>

      {/* Main minimal text */}
      <div className="relative z-10 pointer-events-none select-none flex flex-col items-center justify-center mb-10">
        <h1 className="hero-text font-bold text-center italic-none">
          abhishek.
        </h1>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#FF6B50] to-transparent mt-4 opacity-70"></div>
      </div>

      {/* Bottom UI Overlays */}
      <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-5 group z-20">
        <div className="flex flex-col">
          <p className="text-sm md:text-base font-medium leading-relaxed text-[#aaaaaa] group-hover:text-white transition-colors">
            What if your project could be
            <br />
            more than just code?
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B50] animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-[#FF6B50] font-bold">Engineering Student & Developer</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-12 text-right z-20">
        <a
          href="mailto:abhishekprakash963@gmail.com"
          className="text-[#aaaaaa] font-medium hover:text-[#FFFFFF] transition-colors border-b border-transparent hover:border-[#FFFFFF] pb-1 text-sm md:text-base"
        >
          abhishekprakash963@gmail.com
        </a>
      </div>
    </header>
  );
}
