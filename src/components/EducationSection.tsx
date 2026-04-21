import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-12 h-1 gradient-warm-bg rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div key={ed.degree} className="p-6 rounded-2xl card-glass">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-warm-bg flex items-center justify-center">
                    <GraduationCap size={18} className="text-warm-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{ed.degree}</h3>
                    <p className="text-muted-foreground text-sm">{ed.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1">{ed.period}</p>
                    {ed.gpa && (
                      <p className="text-primary text-sm font-medium mt-2">GPA: {ed.gpa}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
