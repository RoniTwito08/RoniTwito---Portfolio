import { useEffect } from "react";
import styles from "./ImageLightbox.module.css";

interface ImageLightboxProps {
  image: string;
  title: string;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  image,
  title,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.lightboxImage} />
        </div>

        {totalImages > 1 && (
          <>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={onPrev}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={onNext}
              aria-label="Next image"
            >
              →
            </button>

            <div className={styles.imageInfo}>
              <span className={styles.title}>{title}</span>
              <span className={styles.counter}>
                {currentIndex + 1} / {totalImages}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
