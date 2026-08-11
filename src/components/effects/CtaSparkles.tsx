import "./CtaSparkles.css";

interface CtaSparklesProps {
  /** Slightly different scatter/timing so buttons don't all look identical. */
  variant?: "a" | "b";
}

/**
 * A small constellation of sparkles that decorates primary CTA
 * buttons (View Project, Email Me, GitHub, LinkedIn). Reuses the
 * exact four-point mask shape as .sparkle-mark (Hero/Contact) and
 * the same --sparkle-color token — just mounted as a static halo
 * around a button instead of floating loose in a scene.
 *
 * Purely decorative (aria-hidden). The host button must set
 * `position: relative; isolation: isolate;` so this absolutely
 * positioned layer sits behind the button's own label/icon.
 */
function CtaSparkles({ variant = "a" }: CtaSparklesProps) {
  return (
    <span className={`cta-sparkles cta-sparkles--${variant}`} aria-hidden="true">
      <span className="cta-sparkle cta-sparkle-1">
        <span className="cta-sparkle-glyph"></span>
      </span>
      <span className="cta-sparkle cta-sparkle-2">
        <span className="cta-sparkle-glyph"></span>
      </span>
      <span className="cta-sparkle cta-sparkle-3">
        <span className="cta-sparkle-glyph"></span>
      </span>
      <span className="cta-sparkle cta-sparkle-4">
        <span className="cta-sparkle-glyph"></span>
      </span>
    </span>
  );
}

export default CtaSparkles;
