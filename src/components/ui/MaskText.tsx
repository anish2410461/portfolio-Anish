import React from "react";
import { motion } from "motion/react";
import { textReveal } from "@/src/lib/animations";
import { cn } from "@/src/lib/utils";

interface MaskTextProps {
  text: string;
  as?: any;
  className?: string;
  delay?: number;
}

export const MaskText = ({ text, as: Component = "span", className, delay = 0 }: MaskTextProps) => {
  const Tag = Component as any;
  const lines = text.split('\n');

  return (
    <Tag className={cn("mask-reveal", className)}>
      {lines.map((line, i) => (
        <span key={i} className="mask-reveal overflow-hidden flex">
          <motion.span
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...textReveal.transition, delay: delay + (i * 0.1) }}
            className="inline-block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
