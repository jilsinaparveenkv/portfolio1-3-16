import { motion } from "framer-motion";
import { Mail, Phone, Link2, Code2 } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, text: profile.email },
  { icon: Phone, label: "Phone", href: `tel:+91${profile.phone}`, text: `+91 ${profile.phone}` },
  { icon: Link2, label: "LinkedIn", href: profile.linkedin, text: "LinkedIn Profile" },
  { icon: Code2, label: "GitHub", href: profile.github, text: "GitHub Profile" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <div className="w-12 h-1 gradient-warm-bg rounded-full mb-4" />
          <p className="text-muted-foreground mb-10 max-w-md">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {links.map(({ icon: Icon, label, href, text }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl card-glass hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg gradient-warm-bg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-warm-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                    {text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
