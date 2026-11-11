"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarImage } from "@/components/car-image";

type GalleryPhoto = {
  image: string;
  imageAlt: string;
};

type CarGalleryProps = {
  photos: GalleryPhoto[];
  vehicleName: string;
};

const MAX_PHOTOS = 5;

export function CarGallery({ photos, vehicleName }: CarGalleryProps) {
  const availablePhotos = photos.slice(0, MAX_PHOTOS);
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const activePhoto = availablePhotos[activeIndex];

  return (
    <div className="car-gallery">
      <div
        className="detail-image"
        onPointerCancel={() => {
          swipeStartX.current = null;
        }}
        onPointerDown={(event) => {
          swipeStartX.current =
            event.pointerType === "touch" ? event.clientX : null;
        }}
        onPointerUp={(event) => {
          const startX = swipeStartX.current;
          swipeStartX.current = null;

          if (
            startX === null ||
            (event.target instanceof Element && event.target.closest("button"))
          ) {
            return;
          }

          const distance = event.clientX - startX;

          if (Math.abs(distance) < 40) {
            return;
          }

          setActiveIndex((index) =>
            Math.max(
              0,
              Math.min(
                index + (distance < 0 ? 1 : -1),
                availablePhotos.length - 1,
              ),
            ),
          );
        }}
      >
        {activePhoto ? (
          <CarImage
            key={activePhoto.image}
            src={activePhoto.image}
            alt={activePhoto.imageAlt}
            priority
          />
        ) : null}
        <button
          aria-label="Foto sebelumnya"
          className="car-gallery__arrow car-gallery__arrow--previous"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          type="button"
        >
          <ChevronLeft aria-hidden="true" size={23} />
        </button>
        <button
          aria-label="Foto berikutnya"
          className="car-gallery__arrow car-gallery__arrow--next"
          disabled={activeIndex === availablePhotos.length - 1}
          onClick={() =>
            setActiveIndex((index) =>
              Math.min(index + 1, availablePhotos.length - 1),
            )
          }
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          type="button"
        >
          <ChevronRight aria-hidden="true" size={23} />
        </button>
        <span className="image-note">Foto ilustrasi · bukan foto unit</span>
        <span className="car-gallery__count" aria-live="polite">
          Foto {activeIndex + 1} dari {MAX_PHOTOS}
        </span>
      </div>
      <div className="detail-gallery" aria-label={`Galeri ${vehicleName}`}>
        {Array.from({ length: MAX_PHOTOS }, (_, index) => {
          const photo = availablePhotos[index];

          if (!photo) {
            return (
              <button
                aria-label={`Slot foto ${index + 1} belum tersedia`}
                className="detail-gallery__slot detail-gallery__slot--empty"
                disabled
                key={`empty-${index}`}
                type="button"
              >
                <span>Foto {index + 1}</span>
                <span>Belum tersedia</span>
              </button>
            );
          }

          return (
            <button
              aria-label={`Tampilkan foto ${index + 1}: ${photo.imageAlt}`}
              aria-pressed={activeIndex === index}
              className={`detail-gallery__slot${activeIndex === index ? " detail-gallery__slot--active" : ""}`}
              key={photo.image}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <CarImage src={photo.image} alt="" />
              <span>Foto {index + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
