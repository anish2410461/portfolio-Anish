import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export const fadeIn = {
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
};

export const textReveal = {
  initial: { y: "100%" },
  animate: { y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
