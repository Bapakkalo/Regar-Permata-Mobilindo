"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Car } from "@/data/cars";
import { CarImage } from "@/components/car-image";

type CarCardGalleryProps = {
  car: Car;
};

export function CarCardGallery({ car }: CarCardGalleryProps) {
  const photos = [
    { image: car.image, imageAlt: car.imageAlt },
    ...car.gallery,
  ].slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const activePhoto = photos[activeIndex];

  if (!activePhoto) {
    return null;
  }

  return (
    <div className="car-card__gallery" aria-label={`Foto ${car.brand} ${car.name}`}>
      <Link
        className="car-card__image-link"
        href={`/cars/${car.slug}`}
        aria-label={`Lihat detail ${car.brand} ${car.name} ${car.year}`}
        onClick={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            suppressClick.current = false;
          }
        }}
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

          if (startX === null) {
            return;
          }

          const distance = event.clientX - startX;

          suppressClick.current = true;
          window.setTimeout(() => {
            suppressClick.current = false;
          }, 500);
          setActiveIndex((index) =>
            Math.max(
              0,
              Math.min(
                index + (Math.abs(distance) < 40 || distance < 0 ? 1 : -1),
                photos.length - 1,
              ),
            ),
          );
        }}
      >
        <CarImage src={activePhoto.image} alt={activePhoto.imageAlt} />
        <span className="image-note">Foto ilustrasi · bukan foto unit</span>
        {photos.length > 1 ? (
          <span className="car-gallery__count" aria-live="polite">
            Foto {activeIndex + 1} dari {photos.length}
          </span>
        ) : null}
      </Link>
      {photos.length > 1 ? (
        <>
          <button
            aria-label="Foto sebelumnya"
            className="car-gallery__arrow car-gallery__arrow--previous car-card__gallery-arrow"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            aria-label="Foto berikutnya"
            className="car-gallery__arrow car-gallery__arrow--next car-card__gallery-arrow"
            disabled={activeIndex === photos.length - 1}
            onClick={() =>
              setActiveIndex((index) => Math.min(index + 1, photos.length - 1))
            }
            type="button"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </>
      ) : null}
    </div>
  );
}
