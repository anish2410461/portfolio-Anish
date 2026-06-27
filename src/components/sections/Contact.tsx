import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { MaskText } from "@/src/components/ui/MaskText";
import { fadeIn } from "@/src/lib/animations";
import { personalInfo } from "@/src/lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="py-48 relative overflow-hidden">
      <div className="gradient-mesh">
        <div className="gradient-blob -bottom-[20%] -left-[10%] opacity-[0.08]" />
        <div className="gradient-blob -top-[20%] -right-[10%] opacity-[0.08]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-6"
        >
          Contact
        </motion.span>

        <MaskText 
          text={"Let's build something\nremarkable together."}
          as="h2"
          className="text-display text-text-primary mb-12"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body-lg text-text-secondary max-w-2xl font-light mb-16 leading-relaxed"
        >
          I'm always open to exploring ambitious ideas, modern digital products,
          and AI-driven experiences. Whether it's an internship, collaboration,
          or just a great conversation — reach out.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 bg-accent-primary text-text-inverse px-10 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-glow-accent"
          >
            Send an Email <Mail className="w-4 h-4" />
          </a>
          <a 
            href={personalInfo.linkedin}
            className="flex items-center gap-2 bg-transparent border border-border-default hover:border-text-secondary text-text-primary px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            LinkedIn <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={personalInfo.github}
            className="flex items-center gap-2 bg-transparent border border-border-default hover:border-text-secondary text-text-primary px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            GitHub <Github className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-md">
          <div className="flex items-center justify-center gap-3 p-4 bg-bg-elevated/50 border border-border-default rounded-full">
            <MapPin className="text-accent-primary w-4 h-4" />
            <span className="text-sm text-text-secondary font-light">{personalInfo.location}</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 bg-bg-elevated/50 border border-border-default rounded-full">
            <Mail className="text-accent-primary w-4 h-4" />
            <span className="text-sm text-text-secondary font-light line-clamp-1">{personalInfo.email}</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
          </span>
          <span className="text-xs text-text-muted font-medium uppercase tracking-[0.2em]">Open to opportunities</span>
        </motion.div>
      </div>
    </section>
  );
};
