import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/src/lib/animations";
import { personalInfo } from "@/src/lib/data";

const stats = [
  { label: "Academic Excellence", value: "8.31", sub: "CGPA" },
  { label: "LeetCode & Practice", value: "150+", sub: "Problems" },
  { label: "Built & Shipped", value: "8+", sub: "Projects" },
  { label: "Machine Learning & SaaS", value: "AI", sub: "Focus" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Side - Narrative */}
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeIn} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">About Me</span>
              <h2 className="text-h1 text-text-primary">
                Crafting scalable products at the intersection of <span className="italic text-accent-primary">engineering and design.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6 text-text-secondary font-light text-lg leading-relaxed max-w-2xl">
              <p>
                Currently in my second year of Computer Science Engineering at SSN College of Engineering, I've dedicated my time to mastering the full stack and exploring the frontier of Artificial Intelligence. My journey is driven by a desire to build things that are not just functional, but exceptional.
              </p>
              <p>
                My philosophy is simple: engineering is a craft. Whether I'm optimizing a backend database query or orchestrating a cinematic frontend animation, I approach every challenge with precision and intent. I believe that the best digital products are born when technical rigour meets thoughtful design.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Stat Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.02, y: -4, borderColor: "var(--color-accent-primary)" }}
                className="p-8 bg-bg-elevated border border-border-default rounded-lg transition-all duration-300 hover:shadow-glow-accent group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-display text-text-primary group-hover:text-accent-primary transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    {stat.sub}
                  </span>
                </div>
                <p className="mt-4 text-sm text-text-secondary font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-accent-primary/50 to-transparent" />
      </div>
    </section>
  );
};
