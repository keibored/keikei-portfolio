import "./CtaSparkles.css";

interface CtaSparklesProps {
  /** Slightly different scatter/timing so buttons don't all look identical.
   *  "c" is a wider 6-point halo meant to sit in a wrapper AROUND a
   *  button (rather than clipped inside it) — used by the Projects
   *  "View Project" CTA. */
  variant?: "a" | "b" | "c";
}

const SPARKLE_COUNT: Record<NonNullable<CtaSparklesProps["variant"]>, number> = {
  a: 4,
  b: 4,
  c: 6,
};

/**
 * A small constellation of sparkles that decorates primary CTA
 * buttons (View Project, Email Me, GitHub, LinkedIn). Reuses the
 * exact four-point mask shape as .sparkle-mark (Hero/Contact) and
 * the same --sparkle-color token — just mounted as a static halo
 * around a button instead of floating loose in a scene.
 *
 * Purely decorative (aria-hidden). Variants "a"/"b" are meant to be
 * mounted inside the button itself (which must set
 * `position: relative; isolation: isolate;` so the sparkles sit
 * behind the label). Variant "c" is meant to be mounted in a
 * `.cta-sparkle-wrap` wrapper AROUND the button instead, since its
 * sparkles are spaced further out than a button's own box.
 */
function CtaSparkles({ variant = "a" }: CtaSparklesProps) {
  const count = SPARKLE_COUNT[variant];

  return (
    <span className={`cta-sparkles cta-sparkles--${variant}`} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className={`cta-sparkle cta-sparkle-${index + 1}`}>
          <span className="cta-sparkle-glyph"></span>
        </span>
      ))}
    </span>
  );
}

export default CtaSparkles;
