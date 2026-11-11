import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatCarPrice, formatMonthlyInstallment } from "@/data/cars";
import { CarCardGallery } from "@/components/car-card-gallery";

type CarCardProps = {
  car: Car;
  pricingVariant?: "homepage";
};

export function CarCard({ car, pricingVariant }: CarCardProps) {
  return (
    <article className="car-card">
      <CarCardGallery car={car} />
      <div className="car-card__body">
        <div className="car-card__title-row">
          <div>
            <span className="car-card__brand">{car.brand}</span>
            <h3>{car.name}</h3>
          </div>
          <span className="year-pill">
            <CalendarDays aria-hidden="true" size={13} /> {car.year}
          </span>
        </div>
        <div className="car-card__facts">
          {car.specifications.find((specification) => specification.label === "Transmisi")
            ?.value ? (
            <span className="car-fact">
              {car.specifications.find((specification) => specification.label === "Transmisi")?.value}
            </span>
          ) : null}
          {car.availability ? (
            <span className="car-fact car-fact--available">{car.availability}</span>
          ) : null}
          <div
            className={`car-card__price-group${pricingVariant === "homepage" ? " car-card__price-group--homepage" : ""}`}
          >
            <span
              className={`car-card__amount${pricingVariant === "homepage" ? " car-card__amount--cash" : ""}`}
            >
              <span>Harga Cash:</span>
              <span>{formatCarPrice(car.price)}</span>
            </span>
          </div>
        </div>
        <p>{car.description}</p>
        <Link className="text-link" href={`/cars/${car.slug}`}>
          Lihat detail mobil <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
