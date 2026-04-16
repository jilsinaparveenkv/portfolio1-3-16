import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="section-container pt-24 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-3">
            {profile.title}
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {["React", "TypeScript", "Node.js", "Supabase"].map((t) => (
              <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-warm-bg text-warm-foreground font-semibold text-sm transition-shadow hover:shadow-[var(--shadow-warm)]"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm transition-colors hover:bg-accent"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
