import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./skiper10.css";

const NB_COLUMNS = 6;

export function Preloader_004({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 300);
          }
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Dual stairs animation variants
  const stairTopVariants = {
    initial: {
      top: 0,
    },
    exit: (i) => ({
      top: "-100%",
      transition: {
        duration: 0.75,
        delay: 0.04 * (NB_COLUMNS - 1 - i),
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
        duration: 0.75,
        delay: 0.04 * i,
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
        transition: { delay: 0.65, duration: 0.3 },
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
