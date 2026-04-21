import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-12 h-1 gradient-warm-bg rounded-full mb-10" />
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video border border-border">
                  <img
                    src={project.imageUrl || `https://picsum.photos/seed/${project.title.replace(/\s+/g, '')}/800/600`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-warm-bg text-warm-foreground font-semibold text-sm transition-shadow hover:shadow-[var(--shadow-warm)]"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
