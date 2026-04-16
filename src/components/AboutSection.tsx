import { motion } from "framer-motion";
import { Briefcase, Globe, Code2 } from "lucide-react";
import { profile } from "../data/portfolio";

const highlights = [
  { icon: Briefcase, text: profile.highlights[0] },
  { icon: Globe, text: profile.highlights[1] },
  { icon: Code2, text: profile.highlights[2] },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 gradient-warm-bg rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-muted-foreground leading-relaxed text-base">
              {profile.about}
            </p>
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4 p-4 rounded-xl card-glass">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-warm-bg flex items-center justify-center">
                    <Icon size={18} className="text-warm-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-sm pt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
