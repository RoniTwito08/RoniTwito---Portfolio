import { useState } from "react";
import styles from "./ImageCarousel.module.css";
import ImageLightbox from "./ImageLightbox";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselMain}>
          <img
            className={styles.mainImage}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: "pointer" }}
          />

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevImage}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextImage}
                aria-label="Next image"
              >
                →
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
                className={`${styles.thumbnail} ${
                  index === currentIndex ? styles.activeThumbnail : ""
                }`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          image={images[currentIndex]}
          title={title}
          currentIndex={currentIndex}
          totalImages={images.length}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
