import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { personalInfo } from "@/src/lib/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-accent-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-bg-base/90 backdrop-blur-2xl border-bottom border-border-default h-16" 
            : "bg-transparent h-24"
        )}
      >
        <div className="max-w-[1400px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-display text-2xl text-text-primary tracking-tight transition-all hover:tracking-widest group">
            {personalInfo.name.split(' ')[0]}.
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 hover:bg-accent-primary/20 text-accent-primary px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-glow-accent"
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              className="md:hidden text-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -20,
            pointerEvents: isMenuOpen ? "auto" : "none"
          }}
          className="fixed inset-0 top-16 bg-bg-base z-40 md:hidden flex flex-col items-center justify-center gap-8 p-6"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 10 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display text-text-primary"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 10 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="mt-4 bg-accent-primary text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            Resume ↗
          </motion.a>
        </motion.div>
      </header>
    </>
  );
};
