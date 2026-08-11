import "./Hero.css";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { FaArrowRight, FaDownload } from "react-icons/fa";

import { usePointerFine } from "../../hooks/usePointerFine";
import FloatingGlassHeart from "../effects/FloatingGlassHeart";
import CtaSparkles from "../effects/CtaSparkles";

const sparklePositions = [
  "spark-1",
  "spark-2",
  "spark-3",
  "spark-4",
  "spark-5",
  "spark-6",
  "spark-7",
  "spark-8",
  "spark-9",
  "spark-10",
  "spark-11",
  "spark-12",
];

function Hero() {
  const isPointerFine = usePointerFine();
  const prefersReducedMotion = useReducedMotion();
  const parallaxActive = isPointerFine && !prefersReducedMotion;

  // -0.5..0.5 range, updated from raw mouse position within the
  // viewport. The room artwork itself never moves (background-
  // position isn't a compositor-only property, and re-fragmenting
  // it into a separate layer would undo the "one background image"
  // fix) — only these existing foreground layers (sparkles, the
  // new glass heart) get a differential transform-based offset.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const sparkleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 50,
    damping: 20,
  });
  const sparkleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), {
    stiffness: 50,
    damping: 20,
  });

  const heartX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), {
    stiffness: 50,
    damping: 20,
  });
  const heartY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    if (!parallaxActive) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [parallaxActive, mouseX, mouseY]);

  return (
    <section className="hero" id="home">

      {/* Subtle floating sparkles + one small glass heart — the
          only things that move in the scene. The room, sidebar,
          and hero text all stay still; these two layers drift at
          different rates on mouse movement for a sense of depth. */}

      <motion.div
        className="hero-sparkles"
        style={parallaxActive ? { x: sparkleX, y: sparkleY } : undefined}
        aria-hidden="true"
      >
        {sparklePositions.map((position) => (
          <span key={position} className={`sparkle-mark ${position}`}></span>
        ))}
      </motion.div>

      <FloatingGlassHeart
        offsetX={parallaxActive ? heartX : undefined}
        offsetY={parallaxActive ? heartY : undefined}
      />

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-subtitle">
            <span className="subtitle-line"></span>
            <span className="subtitle-text">
              Hello World! I'm Keisha
            </span>
            <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
            <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
          </div>

          <h1 className="hero-title">
            I turn blank screens
            <br />
            into <span>something worth scrolling.</span>
          </h1>

          <p className="hero-description">
            I like taking an empty canvas and figuring out what it
            could become — from the first line of code to the tiny
            details that make a website feel alive.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              <CtaSparkles variant="a" />
              <span className="cta-label">
                View My Work
                <FaArrowRight />
              </span>
            </a>

            <a
              href="/Keisha_Dumpit_CV.pdf"
              download
              className="secondary-button"
            >
              Download CV
              <FaDownload />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
