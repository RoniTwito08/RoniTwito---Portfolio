import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./MobileCarousel.module.css";
import ImageLightbox from "./ImageLightbox";

interface MobileCarouselProps {
  images: string[];
  title: string;
}

export default function MobileCarousel({ images, title }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.phoneArea}>
          <button className={styles.navBtn} onClick={prevImage} aria-label="Previous screenshot">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.phoneOuter}>
            <div className={styles.glowPulse} />
            <div
              className={styles.phoneFrame}
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label={`View ${title} screenshot ${currentIndex + 1} fullscreen`}
              onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
            >
              <div className={styles.notch} />
              <img
                key={currentIndex}
                className={styles.phoneImage}
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                draggable={false}
              />
              <div className={styles.homeBar} />
              <div className={styles.expandHint}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </div>
          </div>

          <button className={styles.navBtn} onClick={nextImage} aria-label="Next screenshot">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className={styles.dotsRow}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>

        <span className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {lightboxOpen &&
        createPortal(
          <ImageLightbox
            images={images}
            title={title}
            initialIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
          />,
          document.body
        )}
    </>
  );
}
