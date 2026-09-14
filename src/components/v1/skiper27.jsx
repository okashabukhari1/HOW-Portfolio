import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skiper27.css";

/**
 * Skiper27 - RollingText
 * Center-to-edge staggered 3D letter rolling animation
 * Free to use with attribution to Skiper UI
 */
export function RollingText({
  text = "",
  speed = 0.04,
  duration = 0.8,
  className = "",
  tag: Tag = "span",
  delay = 0,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10% 0px -10% 0px" });

  if (!text || typeof text !== "string") return null;

  const characters = Array.from(text);
  const total = characters.length;
  const centerIndex = (total - 1) / 2;

  return (
    <Tag
      ref={containerRef}
      className={`skiper27-rolling-container ${className}`}
      aria-label={text}
    >
      <span className="skiper27-sr-only">{text}</span>
      <span aria-hidden="true" className="skiper27-chars-track">
        {characters.map((char, index) => {
          if (char === " ") {
            return (
              <span key={`space-${index}`} className="skiper27-space">
                &nbsp;
              </span>
            );
          }

          // Stagger calculation: distance from center to edge
          const distanceFromCenter = Math.abs(index - centerIndex);
          const charDelay = delay + distanceFromCenter * speed;

          return (
            <span key={`${char}-${index}`} className="skiper27-char-box">
              <motion.span
                className="skiper27-char-primary"
                initial={{ y: "100%", rotateX: -90, opacity: 0 }}
                animate={
                  isInView
                    ? { y: "0%", rotateX: 0, opacity: 1 }
                    : { y: "100%", rotateX: -90, opacity: 0 }
                }
                transition={{
                  duration,
                  delay: charDelay,
                  ease: [0.215, 0.61, 0.355, 1], // cubic-bezier smooth roll
                }}
              >
                {char}
              </motion.span>
              <motion.span
                className="skiper27-char-secondary"
                initial={{ y: "0%", rotateX: 0, opacity: 1 }}
                animate={
                  isInView
                    ? { y: "-100%", rotateX: 90, opacity: 0 }
                    : { y: "0%", rotateX: 0, opacity: 1 }
                }
                transition={{
                  duration,
                  delay: charDelay,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </Tag>
  );
}

export default RollingText;
