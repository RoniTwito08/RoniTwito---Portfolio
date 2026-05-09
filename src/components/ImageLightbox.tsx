import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./ImageLightbox.module.css";

interface ImageLightboxProps {
  images: string[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({ images, title, initialIndex, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [animClass, setAnimClass] = useState<string>(styles.fadeIn);
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((nextIndex: number, direction: "left" | "right") => {
    setAnimClass(direction === "right" ? styles.enterRight : styles.enterLeft);
    setAnimKey((k) => k + 1);
    setCurrentIndex(nextIndex);
  }, []);

  const goNext = useCallback(() => {
    navigate((currentIndex + 1) % images.length, "right");
  }, [currentIndex, images.length, navigate]);

  const goPrev = useCallback(() => {
    navigate((currentIndex - 1 + images.length) % images.length, "left");
  }, [currentIndex, images.length, navigate]);

  const goTo = useCallback((index: number) => {
    if (index === currentIndex) return;
    navigate(index, index > currentIndex ? "right" : "left");
  }, [currentIndex, navigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  useEffect(() => {
    const strip = thumbnailsRef.current;
    if (!strip) return;
    const active = strip.children[currentIndex] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [currentIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    delta < 0 ? goNext() : goPrev();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>

      {/* ── Header ───────────────────────────────────────────── */}
      <header className={styles.header} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerLeft}>
          <span className={styles.projectName}>{title}</span>
          {images.length > 1 && (
            <span className={styles.counter}>
              <span className={styles.current}>{currentIndex + 1}</span>
              <span className={styles.sep}>/</span>
              <span className={styles.total}>{images.length}</span>
            </span>
          )}
        </div>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* ── Image + arrows ────────────────────────────────────── */}
      <div
        className={styles.imageArea}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.glow} />

        <img
          key={animKey}
          className={`${styles.image} ${animClass}`}
          src={images[currentIndex]}
          alt={`${title} – screenshot ${currentIndex + 1} of ${images.length}`}
          draggable={false}
        />

        {images.length > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.prev}`}
              onClick={goPrev}
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={`${styles.arrow} ${styles.next}`}
              onClick={goNext}
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnail strip ───────────────────────────────────── */}
      {images.length > 1 && (
        <div className={styles.thumbOuter} onClick={(e) => e.stopPropagation()}>
          <div className={styles.thumbStrip} ref={thumbnailsRef}>
            {images.map((src, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === currentIndex ? styles.thumbActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`View screenshot ${i + 1}`}
              >
                <img src={src} alt="" draggable={false} />
                {i === currentIndex && <div className={styles.thumbGlow} />}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
