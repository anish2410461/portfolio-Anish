import { motion } from "motion/react";
import { timeline } from "@/src/lib/data";
import { fadeIn, staggerContainer } from "@/src/lib/animations";

export const Timeline = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">Journey</span>
          <h2 className="text-h1 text-text-primary mt-2">Where I've been. Where I'm going.</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-primary scale-y-100 origin-top" />

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {timeline.map((entry, i) => (
              <motion.div 
                key={entry.id}
                variants={fadeIn}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-accent-primary bg-bg-base z-10">
                  {entry.current && (
                    <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="p-8 bg-bg-elevated border border-border-default rounded-xl hover:border-accent-primary transition-all duration-500 shadow-card">
                    <span className="font-mono text-xs text-accent-primary mb-2 block tracking-wider">
                      {entry.year}
                    </span>
                    <h3 className="text-xl font-medium text-text-primary mb-1">
                      {entry.role}
                    </h3>
                    <p className="text-sm text-text-muted mb-6">
                      {entry.company}
                    </p>
                    <ul className={`space-y-2 text-sm text-text-secondary font-light ${i % 2 !== 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                      {entry.highlights.map((h, idx) => (
                        <li key={idx} className="flex gap-2">
                          {i % 2 === 0 ? <span className="text-accent-primary">▹</span> : null}
                          <span>{h}</span>
                          {i % 2 !== 0 ? <span className="text-accent-primary">◃</span> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
