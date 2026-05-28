import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./IntroScreen.module.css";

interface Props {
  skipDelay?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number, duration = 0.75) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease },
});

export default function IntroScreen({ skipDelay = 3500 }: Props) {
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    // Name animation: delay 0.85s + duration 0.8s ≈ 1.65s to land
    const t = setTimeout(() => setCursorVisible(true), 1650);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className={styles.intro}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(14px)",
        transition: { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
    >
      {/* ── Ambient orbs ── */}
      <div className={styles.ambient} aria-hidden="true">
        <motion.div
          className={styles.orb1}
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.orb2}
          animate={{ x: [0, -45, 20, 0], y: [0, 35, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.orb3}
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Grid texture ── */}
      <div className={styles.grid} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles.content}>
        <motion.span className={styles.greeting} {...fadeUp(0.35, 0.7)}>
          Hi, I'm
        </motion.span>

        <motion.h1 className={styles.name} {...fadeUp(0.85, 0.82)}>
          Roni Twito
          {cursorVisible && <span className={styles.cursor} aria-hidden="true" />}
        </motion.h1>

        <motion.p className={styles.role} {...fadeUp(1.6, 0.65)}>
          Full Stack &amp; AI Engineer
        </motion.p>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.55, ease }}
        />

      </div>

      {/* ── Auto-enter progress bar ── */}
      <motion.div
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: skipDelay / 1000, ease: "linear" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
