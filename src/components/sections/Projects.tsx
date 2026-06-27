import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/src/lib/data";
import { fadeIn, staggerContainer } from "@/src/lib/animations";
import { cn } from "@/src/lib/utils";

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string }) => {
  const isFeatured = project.featured;
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className={cn(
        "group relative bg-bg-elevated border border-border-default rounded-xl overflow-hidden transition-all duration-500 hover:y-[-4px]",
        isFeatured ? "lg:col-span-2 lg:row-span-1" : "col-span-1"
      )}
    >
      {/* Project Visual / Image Placeholder */}
      <div className="relative h-64 overflow-hidden bg-bg-elevated">
        {project.image && !imageError ? (
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
              imageLoaded ? "opacity-90 group-hover:opacity-100" : "opacity-0"
            )}
            referrerPolicy="no-referrer"
          />
        ) : null}
        
        <div className={cn(
          "project-placeholder absolute inset-0 flex items-center justify-center p-12 transition-opacity duration-300",
          (imageLoaded && !imageError) ? "opacity-0" : "opacity-100"
        )}>
           <div className="w-full h-full rounded-lg border border-border-strong bg-bg-base/40 backdrop-blur-sm shadow-2xl flex items-center justify-center font-display text-4xl text-text-muted opacity-50">
             {project.title.charAt(0)}
           </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent opacity-60" />


        {isFeatured && (
          <div className="absolute top-4 right-4 bg-accent-primary text-text-inverse px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-glow-accent">
            Featured
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-xs text-text-muted mb-1 block">{project.id}</span>
            <h3 className="text-2xl font-display text-text-primary group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary font-light text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-bg-base border border-border-default text-[10px] font-mono text-text-muted uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 border border-accent-primary/0 group-hover:border-accent-primary/20 rounded-xl pointer-events-none transition-all duration-500" />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">Selected Work</span>
          <h2 className="text-h1 text-text-primary mt-2">Projects that push boundaries.</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
