import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import profilePic from "../public/images/profilepic.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 overflow-hidden relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Glowing Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Outer Purple Glow Ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full glow-ring-purple animate-[spin_10s_linear_infinite]" />
            {/* Inner Cyan Glow Ring */}
            <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full glow-ring-cyan animate-[spin_8s_linear_infinite_reverse]" />
            
            {/* Profile Image Container */}
            <div className="relative w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full overflow-hidden border-2 border-cyan-400/50 z-10 bg-[#1a1a2e]">
              <img 
                src={profilePic} 
                alt={`${profile.name} Profile`} 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>

            {/* Decorative dots/blobs from reference */}
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-[#9333ea] opacity-80 blur-[2px]" />
            <div className="absolute bottom-8 -left-8 w-8 h-8 rounded-full bg-[#9333ea] opacity-60 blur-[4px]" />
          </motion.div>

          {/* Right Column - Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
              About <span className="text-[#a855f7]">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a855f7] to-transparent rounded-full mb-8" />

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 text-[#94a3b8]">
              {profile.about}
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2.5 rounded-full border border-[#2d2d44] bg-[#1a1a2e] flex items-center shadow-lg">
                <span className="text-sm font-semibold text-[#a855f7]">1 Years Experience</span>
              </div>
              <div className="px-5 py-2.5 rounded-full border border-[#2d2d44] bg-[#1a1a2e] flex items-center shadow-lg">
                <span className="text-sm font-semibold text-[#10b981]">10+ Projects Completed</span>
              </div>
              <div className="px-5 py-2.5 rounded-full border border-[#2d2d44] bg-[#1a1a2e] flex items-center shadow-lg mt-2 sm:mt-0">
                <span className="text-sm font-semibold text-[#a855f7]">100% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
