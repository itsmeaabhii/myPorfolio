import { Instagram, Twitter, Linkedin, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-32 pb-24 px-6 md:px-12 border-t border-[#111111]/50 bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="flex-1">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 select-none font-satoshi hero-text">
            Let's
            <br />
            talk.
          </h2>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:abhishekprakash963@gmail.com"
              className="text-2xl md:text-3xl font-semibold hover:text-[#FF6B50] transition-all w-fit text-[#aaaaaa] hover:text-white font-satoshi border-b border-transparent hover:border-[#FF6B50] pb-1"
            >
              abhishekprakash963@gmail.com
            </a>
            <p className="text-[#666666] flex items-center gap-2 font-satoshi">
              <MapPin className="w-5 h-5" />
              Available for worldwide collaborations.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:mb-6">
          <a
            href="https://github.com/itsmeaabhii"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:-translate-y-2"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/abhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:-translate-y-2"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-prakash-0391402b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:-translate-y-2"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#333333] text-[10px] font-bold uppercase tracking-widest font-satoshi">
        <p>&copy; 2026 Abhishek Prakash. All rights reserved.</p>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-[#666666] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#666666] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
