import { motion } from "motion/react";
import { skillCategories } from "@/src/lib/data";
import { fadeIn, staggerContainer } from "@/src/lib/animations";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">Technical Skills</span>
          <h2 className="text-h1 text-text-primary mt-2">Tools I work with.</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeIn} className="flex flex-col gap-6">
              <h3 className="text-xl font-medium text-text-primary border-l-2 border-accent-primary pl-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: "var(--color-accent-primary)", backgroundColor: "var(--color-bg-subtle)" }}
                    className="px-4 py-2 rounded-full bg-bg-elevated border border-border-default text-xs font-medium text-text-secondary transition-all cursor-default hover:text-text-primary hover:shadow-glow-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
