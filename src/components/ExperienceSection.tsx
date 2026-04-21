import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-12 h-1 gradient-warm-bg rounded-full mb-10" />

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="p-6 rounded-2xl card-glass">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin size={14} />
                    {exp.location} · {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-warm-bg flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
