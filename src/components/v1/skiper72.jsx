import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./skiper72.css";

/**
 * Skiper72 — SkiperTextRevealH
 * Scroll-triggered horizontal word reveal with skew effect, opacity wipe, and smooth kinetic timing.
 * Free to use with attribution to Skiper UI
 */
export function SkiperTextRevealH({
  children,
  className = "",
  skew = true,
  highlight = "",
  highlightClass = "skiper72-highlight",
  progressRange = [0, 0.9],
}) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.92", "end 0.5"],
  });

  if (typeof children !== "string") {
    return <div className={`skiper72-container ${className}`}>{children}</div>;
  }

  const words = children.trim().split(/\s+/);

  return (
    <div ref={targetRef} className={`skiper72-container ${className}`}>
      <p className="skiper72-paragraph">
        {words.map((word, i) => {
          const step = (progressRange[1] - progressRange[0]) / words.length;
          const start = progressRange[0] + i * step;
          const end = Math.min(start + step * 1.5, 1);

          const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
          const isHighlight =
            highlight && cleanWord === highlight.toLowerCase().trim();

          return (
            <HorizontalWord
              key={`${word}-${i}`}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              skew={skew}
              isHighlight={isHighlight}
              highlightClass={highlightClass}
            />
          );
        })}
      </p>
    </div>
  );
}

function HorizontalWord({
  word,
  range,
  progress,
  skew,
  isHighlight,
  highlightClass,
}) {
  // Horizontal reveal: slides in smoothly from right with skew angle
  const opacity = useTransform(progress, range, [0.38, 1]);
  const x = useTransform(progress, range, [20, 0]);
  const skewX = useTransform(progress, range, skew ? [-8, 0] : [0, 0]);

  return (
    <span className="skiper72-word-wrap">
      <motion.span
        style={{ opacity, x, skewX }}
        className={`skiper72-word ${isHighlight ? highlightClass : ""}`}
      >
        {word}
      </motion.span>{" "}
    </span>
  );
}

export default SkiperTextRevealH;
