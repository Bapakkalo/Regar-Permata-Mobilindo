"use client";

import Image from "next/image";
import { CarFront } from "lucide-react";
import { useState } from "react";

type CarImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function CarImage({ src, alt, priority = false }: CarImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`car-image${hasError ? " car-image--fallback" : ""}`}>
      {hasError ? (
        <div className="car-image__fallback" role="img" aria-label={alt}>
          <CarFront aria-hidden="true" size={48} strokeWidth={1.2} />
          <span>Foto kendaraan belum tersedia</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 700px"
          className="car-image__photo"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
