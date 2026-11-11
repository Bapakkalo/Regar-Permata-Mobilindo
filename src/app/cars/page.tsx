import type { Metadata } from "next";
import { CarCard } from "@/components/car-card";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Koleksi Mobil",
  description:
    "Lihat koleksi mobil bekas Regar Permata Mobilindo dan tanyakan detail setiap kendaraan.",
};

export default function CarsPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="site-container">
          <span className="eyebrow">Koleksi kendaraan</span>
          <h1>Pilihan mobil untuk perjalanan Anda.</h1>
          <p>
            Pilih kendaraan, lihat informasi yang tersedia, lalu tanyakan detail
            unit kepada dealer.
          </p>
          <span className="breadcrumb">
            Beranda <span>/</span> Mobil
          </span>
        </div>
      </section>
      <section className="section site-container catalog-section">
        <div className="catalog-heading">
          <div className="catalog-title">
            <span className="eyebrow">Koleksi saat ini</span>
            <h2>Kenali setiap unit.</h2>
            <p>
              Harga dan ketersediaan dapat dikonfirmasi langsung. Foto yang
              ditampilkan adalah ilustrasi, bukan foto unit.
            </p>
          </div>
          <span className="catalog-count">
            {String(cars.length).padStart(2, "0")} kendaraan
          </span>
        </div>
        <div className="car-grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} pricingVariant="homepage" />
          ))}
        </div>
      </section>
    </main>
  );
}
