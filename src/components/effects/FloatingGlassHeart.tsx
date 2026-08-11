import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import "./FloatingGlassHeart.css";

interface FloatingGlassHeartProps {
  offsetX?: MotionValue<number>;
  offsetY?: MotionValue<number>;
}

/**
 * The one "3D object" in the scene — a small glass heart. Pure
 * CSS/SVG (perspective + rotateY + layered gradients for a glass
 * sheen), not WebGL: it's a single small decorative shape, and a
 * full Three.js/R3F scene would be a lot of weight for that. The
 * idle float/spin is plain CSS (and respects prefers-reduced-motion
 * on its own); offsetX/offsetY are optional Framer Motion values
 * Hero feeds in for the mouse-parallax layer.
 */
function FloatingGlassHeart({ offsetX, offsetY }: FloatingGlassHeartProps) {
  return (
    <motion.div
      className="glass-heart"
      style={{ x: offsetX, y: offsetY }}
      data-cursor="explore"
      aria-hidden="true"
    >
      <div className="glass-heart-float">
        <div className="glass-heart-spin">
          <svg viewBox="0 0 24 22" className="glass-heart-svg">
            <defs>
              <linearGradient id="glassHeartFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8D6FF" />
                <stop offset="55%" stopColor="#B58CFF" />
                <stop offset="100%" stopColor="#7B55D3" />
              </linearGradient>
            </defs>
            <path
              d="M12 21.35 L10.55 20.03 C5.4 15.36 2 12.28 2 8.5
                 C2 5.42 4.42 3 7.5 3 C9.24 3 10.91 3.81 12 5.09
                 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5
                 C22 12.28 18.6 15.36 13.45 20.03 Z"
              fill="url(#glassHeartFill)"
              fillOpacity="0.82"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="0.4"
            />
            <ellipse
              className="glass-heart-shine"
              cx="8"
              cy="7.5"
              rx="2.6"
              ry="1.6"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default FloatingGlassHeart;
