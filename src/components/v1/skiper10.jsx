import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import "./skiper10.css";

const NB_COLUMNS = 6;

export function Preloader_004({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      onComplete?.();
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 150);
          return 100;
        }
        return Math.min(prev + 4, 100);
      });
    }, 14);
    return () => clearInterval(interval);
  }, [onComplete, reduceMotion]);

  // Dual stairs animation variants
  const stairTopVariants = {
    initial: {
      top: 0,
    },
    exit: (i) => ({
      top: "-100%",
      transition: {
        duration: 0.55,
        delay: 0.025 * (NB_COLUMNS - 1 - i),
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  const stairBottomVariants = {
    initial: {
      bottom: 0,
    },
    exit: (i) => ({
      bottom: "-100%",
      transition: {
        duration: 0.55,
        delay: 0.025 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <motion.div
      className="skiper10-preloader-root"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { delay: 0.42, duration: 0.2 },
      }}
    >
      {/* Center Brand Identity & Progress Counter */}
      <motion.div
        className="skiper10-center-stage"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      >
        <div className="skiper10-eyebrow">
          <span className="skiper10-dot" />
          <span>H.O.W. DIGITAL STUDIO</span>
        </div>

        <div className="skiper10-digits-row">
          <span className="skiper10-number">{progress}</span>
          <span className="skiper10-percent">%</span>
        </div>

        <div className="skiper10-progress-bar">
          <div
            className="skiper10-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="skiper10-subtext">Preparing spatial experiences</p>
      </motion.div>

      {/* Dual Stairs: Top Cascading Columns */}
      <div className="skiper10-stairs-layer top">
        {[...Array(NB_COLUMNS)].map((_, i) => (
          <motion.div
            key={`stair-top-${i}`}
            custom={i}
            variants={stairTopVariants}
            initial="initial"
            exit="exit"
            className="skiper10-column"
          />
        ))}
      </div>

      {/* Dual Stairs: Bottom Cascading Columns */}
      <div className="skiper10-stairs-layer bottom">
        {[...Array(NB_COLUMNS)].map((_, i) => (
          <motion.div
            key={`stair-bottom-${i}`}
            custom={i}
            variants={stairBottomVariants}
            initial="initial"
            exit="exit"
            className="skiper10-column"
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Preloader_004;
