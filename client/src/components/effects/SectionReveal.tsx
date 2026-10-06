import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades + lifts content in once as it scrolls into view. This is
 * also what covers "page transitions" (#9) for this site — it's a
 * single-page scroll layout with no routed pages to transition
 * between, so section entrances are the transition.
 */
function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
