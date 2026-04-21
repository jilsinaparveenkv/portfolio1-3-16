import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

// Helper to assign icons and gradient colors based on the category name
const getCategoryStyling = (category: string) => {
  if (category.toLowerCase().includes("frontend")) {
    return {
      icon: <Layout className="text-[#c084fc]" size={24} />,
      borderHover: "hover:border-[#c084fc]/50",
      shadowHover: "hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]",
      badgeBg: "bg-[#c084fc]/10",
      badgeText: "text-[#c084fc]",
    };
  } else if (category.toLowerCase().includes("backend")) {
    return {
      icon: <Server className="text-[#22d3ee]" size={24} />,
      borderHover: "hover:border-[#22d3ee]/50",
      shadowHover: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
      badgeBg: "bg-[#22d3ee]/10",
      badgeText: "text-[#22d3ee]",
    };
  } else {
    return {
      icon: <Wrench className="text-[#e879f9]" size={24} />,
      borderHover: "hover:border-[#e879f9]/50",
      shadowHover: "hover:shadow-[0_0_30px_rgba(232,121,249,0.15)]",
      badgeBg: "bg-[#e879f9]/10",
      badgeText: "text-[#e879f9]",
    };
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-[#a855f7]">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#a855f7] to-transparent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive toolkit that enables me to build robust, scalable, and visually stunning web applications from end to end.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const style = getCategoryStyling(category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col p-8 rounded-3xl bg-[#1a1a2e] border border-[#2d2d44] transition-all duration-300 ${style.borderHover} ${style.shadowHover} group`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0d0d14] border border-[#2d2d44] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {style.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold border border-transparent transition-colors duration-300 hover:border-current ${style.badgeBg} ${style.badgeText}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
