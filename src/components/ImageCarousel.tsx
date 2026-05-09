import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageCarousel.module.css";
import ImageLightbox from "./ImageLightbox";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselMain}>
          <img
            className={styles.mainImage}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            onClick={() => setLightboxOpen(true)}
          />

          <div
            className={styles.expandHint}
            onClick={() => setLightboxOpen(true)}
            aria-label="Expand image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
              >
                &#8250;
              </button>

              <div className={styles.imageCounter}>
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className={styles.thumbnailRow}>
            {images.map((img, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={img} alt={`${title} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && createPortal(
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
