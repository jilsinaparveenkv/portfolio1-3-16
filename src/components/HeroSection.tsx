import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import heroBg from "../public/images/bg2.jpg";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d0d14]"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(13, 13, 20, 0.6), rgba(13, 13, 20, 0.95)), url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Subtle purple background blobs to enhance the purple glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[rgba(138,43,226,0.2)] blur-[150px] pointer-events-none" />

      <div className="section-container flex flex-col items-center text-center z-10 pt-32 pb-12 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-lg">
            Hi, I'm <span className="text-[#c084fc] drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">{profile.name}</span> <br className="hidden sm:block"/>
            <span className="text-[#d8b4fe] font-medium text-3xl sm:text-4xl lg:text-5xl mt-2 block">— Full Stack Developer</span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mb-12 mx-auto leading-relaxed drop-shadow">
            Full Stack Developer crafting modern, responsive web apps with clean UI and robust backend architecture
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333ea] to-[#d8b4fe] text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <Sparkles size={16} />
              Hire Me
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1a1a2e]/80 backdrop-blur-sm text-white font-semibold text-sm border border-[#2d2d44] transition-all hover:bg-[#25253d] hover:scale-105"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-white font-medium text-sm transition-all hover:text-[#c084fc] group ml-2"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
