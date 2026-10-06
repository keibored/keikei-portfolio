import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { usePointerFine } from "../../hooks/usePointerFine";
import "./TiltCard.css";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  /** Optional cursor hint, e.g. "view" — read by InteractiveCursor. */
  dataCursor?: string;
}

/**
 * Wraps a card with a subtle mousemove-driven 3D tilt (a few
 * degrees, never a spin). Renders as the SAME element the card's
 * own class already styles — e.g. `<TiltCard className="project-card">`
 * becomes one `motion.div`, not an extra nested wrapper — so it
 * drops into existing grid/flex layouts without changing them.
 *
 * Falls back to a plain div (no listeners, no transform) on touch
 * devices and when the user prefers reduced motion.
 */
function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  dataCursor,
}: TiltCardProps) {
  const isPointerFine = usePointerFine();
  const prefersReducedMotion = useReducedMotion();
  const active = isPointerFine && !prefersReducedMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 22,
  });

  if (!active) {
    return (
      <div className={className} data-cursor={dataCursor}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className={`tilt-card ${className}`}
      data-cursor={dataCursor}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
