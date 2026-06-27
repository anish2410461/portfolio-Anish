import { motion, AnimatePresence } from "motion/react";
import { certifications } from "@/src/lib/data";
import { ShieldCheck, X, ExternalLink } from "lucide-react";
import { fadeIn, staggerContainer } from "@/src/lib/animations";
import { useState } from "react";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="py-24 bg-bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">Credentials</span>
          <h2 className="text-h1 text-text-primary mt-2">Continuous learning.</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeIn}
              whileHover={{ y: -4, borderColor: "var(--color-accent-primary)" }}
              onClick={() => setSelectedCert(cert)}
              className="p-0 bg-bg-elevated border border-border-default rounded-lg relative overflow-hidden group transition-all duration-500 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                {cert.imageUrl?.endsWith('.pdf') ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-bg-elevated flex flex-col items-center justify-center gap-3 border-b border-border-default">
                    <div className="w-14 h-14 rounded-xl bg-[#0530AD] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg font-mono">IBM</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Certificate · PDF</span>
                  </div>
                ) : (
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 p-2 bg-bg-base/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ShieldCheck size={18} className="text-accent-primary" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-medium text-text-primary leading-tight group-hover:text-accent-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary line-clamp-3 font-light leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-text-muted">
                      {cert.year}
                    </span>
                    <span className="text-[10px] font-mono text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view →
                    </span>
                  </div>
                </div>
              </div>
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/0 group-hover:from-accent-primary/5 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-bg-base/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-bg-elevated border border-border-default rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-[110] p-2 bg-bg-base/50 hover:bg-bg-base backdrop-blur-md rounded-full border border-border-default transition-all hover:rotate-90 group"
              >
                <X size={24} className="text-text-primary group-hover:text-accent-primary" />
              </button>

              {/* Image Side */}
              <div className="w-full lg:w-3/5 relative bg-black/20 flex items-center justify-center p-4 lg:p-0 overflow-hidden">
                {selectedCert.imageUrl?.endsWith('.pdf') ? (
                  <iframe
                    src={selectedCert.imageUrl}
                    title={selectedCert.name}
                    className="w-full h-full min-h-[400px] border-0"
                  />
                ) : (
                  <>
                    <img 
                      src={selectedCert.imageUrl} 
                      alt={selectedCert.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto bg-bg-elevated">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-accent-primary" size={24} />
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                      Verified Credential
                    </span>
                  </div>
                  <h3 className="text-3xl font-medium text-text-primary leading-tight mb-2">
                    {selectedCert.name}
                  </h3>
                  <p className="text-xl text-accent-primary font-medium">
                    {selectedCert.issuer}
                  </p>
                </div>

                <div className="flex-grow">
                  <div className="h-px w-full bg-border-default mb-8" />
                  <p className="text-text-secondary leading-relaxed font-light text-lg">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border-default flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-text-muted uppercase">Issue Date</span>
                      <span className="text-text-primary font-medium">{selectedCert.year}</span>
                    </div>
                  </div>

                  {selectedCert.id === "c5" && (
                    <a 
                      href="https://www.credly.com/go/7PklihUA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-accent-primary text-text-inverse py-4 px-8 rounded-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                    >
                      Verify on Credly
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
