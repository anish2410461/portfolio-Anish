import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MaskText } from "@/src/components/ui/MaskText";
import { fadeIn, staggerContainer } from "@/src/lib/animations";
import { personalInfo } from "@/src/lib/data";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full z-10">
        
        {/* Left Column - Content */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-8 lg:gap-10"
        >
          <div className="space-y-6">
            <motion.div variants={fadeIn} className="flex items-center gap-3">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="h-[1px] bg-accent-primary" 
              />
              <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">Full Stack Developer · AI Builder</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-display leading-[1.1] text-text-primary">
              Building intelligent <br />
              <span className="italic text-accent-primary">digital experiences.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-text-secondary font-light max-w-xl leading-relaxed">
              I'm {personalInfo.name} — a Computer Science student at {personalInfo.college},
              building AI-powered applications, scalable systems, and premium
              frontend experiences that sit at the intersection of engineering and craft.
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-6">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-accent-primary text-text-inverse rounded-full font-medium transition-all hover:bg-accent-primary/90 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-accent-primary/10"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-border-default rounded-full font-medium transition-all hover:bg-bg-elevated hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-border-default/50 border border-border-default w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </span>
              <span className="text-xs text-text-secondary font-medium">Open to opportunities</span>
            </div>
            <span className="text-xs text-text-muted opacity-60">Available for internships & collaborations</span>
          </motion.div>
        </motion.div>

        {/* Right Column - Prominent Image Representation in Desk Mode */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Frame */}
          <div className="relative aspect-[3.5/4] max-w-[450px] ml-auto group">
             {/* Background glow behind image */}
             <div className="absolute inset-0 bg-accent-primary opacity-5 blur-[100px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000" />
             
             {/* Portrait Image */}
             <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border-default/50 shadow-2xl bg-bg-elevated">
               <img
                 src="/src/assets/images/anish.png"
                 alt="Anish M"
                 className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
               />
               {/* Overlay blending */}
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-base/80 to-transparent" />
             </div>

             {/* Functional floating UI Card - The "Me" Card from before */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-12 p-6 bg-bg-elevated/90 backdrop-blur-xl border border-border-default rounded-2xl shadow-card min-w-[220px]"
             >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary flex items-center justify-center text-xl font-display text-text-inverse overflow-hidden">
                    {personalInfo.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary">{personalInfo.name}</h3>
                    <p className="text-[10px] text-text-muted font-mono tracking-widest uppercase">Dev Environment</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="p-2 bg-bg-base/50 rounded-lg border border-border-default font-mono text-[9px] text-text-muted">
                    <span className="text-accent-primary">status:</span> "Building"
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
