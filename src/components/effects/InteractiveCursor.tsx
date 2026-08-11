import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { usePointerFine } from "../../hooks/usePointerFine";
import "./InteractiveCursor.css";

type CursorVariant = "default" | "button" | "view" | "explore";

const VARIANT_LABEL: Record<CursorVariant, string | null> = {
  default: null,
  button: null,
  view: "view ♡",
  explore: "explore ✦",
};

/**
 * Small lavender cursor follower. Mounted once in App. Reads a
 * `data-cursor="view" | "explore"` attribute off whatever element
 * the pointer is over (event delegation — any component opts in
 * just by adding the attribute, no prop-drilling), and treats any
 * `a`/`button` as the plain "button" variant automatically.
 *
 * Only active on fine-pointer devices with no reduced-motion
 * preference — everyone else keeps the normal system cursor.
 */
function InteractiveCursor() {
  const isPointerFine = usePointerFine();
  const prefersReducedMotion = useReducedMotion();
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  // Raw motion values, updated straight from clientX/clientY with no
  // spring/lerp smoothing — the mark should sit exactly at the mouse
  // position every frame, not ease toward it. Motion values update
  // the DOM directly (bypassing React's render cycle and Framer's
  // own frame scheduler batches the writes), so this stays cheap
  // even on fast mousemove bursts.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const active = isPointerFine && !prefersReducedMotion;

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement;
      const el = target.closest<HTMLElement>("[data-cursor], a, button");

      if (!el) {
        setVariant("default");
        return;
      }

      const explicit = el.getAttribute("data-cursor") as CursorVariant | null;
      setVariant(explicit ?? "button");
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [active, x, y]);

  if (!active) return null;

  const label = VARIANT_LABEL[variant];

  return (
    <motion.div
      className="interactive-cursor-wrap"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className={`interactive-cursor cursor-${variant}`}>
        <span className="cursor-mark"></span>
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </motion.div>
  );
}

export default InteractiveCursor;
