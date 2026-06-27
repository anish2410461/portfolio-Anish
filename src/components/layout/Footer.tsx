import { personalInfo } from "@/src/lib/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-default">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          <div className="flex flex-col gap-4">
            <a href="#" className="font-display text-2xl text-text-primary tracking-tight">
              {personalInfo.name.split(' ')[0]}.
            </a>
            <p className="text-sm text-text-muted font-light max-w-xs">
              {personalInfo.role} crafting high-performance digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-text-muted hover:text-text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 md:justify-end">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-accent-primary transition-all hover:scale-110"
            >
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-accent-primary transition-all hover:scale-110"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-accent-primary transition-all hover:scale-110"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-border-default/50">
          <p className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with intention.
          </p>
          <p className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">
            {personalInfo.location} · 12.9249° N, 80.2241° E
          </p>
        </div>
      </div>
    </footer>
  );
};
