import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeInfo,
  Check,
} from "lucide-react";
import { notFound } from "next/navigation";
import { CarGallery } from "@/components/car-gallery";
import { CarLoanCalculator } from "@/components/car-loan-calculator";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  cars,
  formatCarPrice,
  formatMonthlyInstallment,
  getCarBySlug,
} from "@/data/cars";

type CarDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return { title: "Mobil tidak ditemukan" };
  }

  return {
    title: `${car.brand} ${car.name} ${car.year}`,
    description: `Informasi dan detail ${car.brand} ${car.name} ${car.year} di Regar Permata Mobilindo.`,
  };
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const inquiryMessage = `Halo, saya ingin menanyakan ${car.brand} ${car.name} ${car.year}. Mohon informasi harga, kondisi, dan ketersediaan unit.`;

  return (
    <main className="site-container detail-page">
      <nav className="detail-breadcrumb" aria-label="Jejak navigasi">
        <Link href="/cars"><ArrowLeft aria-hidden="true" size={15} /> Kembali ke koleksi</Link>
        <span>Mobil <span>/</span> {car.brand} {car.name} {car.year}</span>
      </nav>
      <div className="detail-layout">
        <div className="detail-visual">
          <CarGallery
            photos={[
              { image: car.image, imageAlt: car.imageAlt },
              ...car.gallery,
            ]}
            vehicleName={`${car.brand} ${car.name}`}
          />
          <p className="detail-image-caption">
            Foto model pembanding. Silakan minta foto unit aktual sebelum
            berkunjung atau mengambil keputusan.
          </p>
        </div>
        <section className="detail-content">
          <span className="eyebrow">Koleksi Regar Permata Mobilindo</span>
          <h1>{car.brand} {car.name}</h1>
          <span className="detail-year">{car.year}</span>
          <p
            className="detail-description"
            style={car.id === "daihatsu-taft-gt-1994" ? { color: "#111315" } : undefined}
          >
            {car.description}
          </p>
          <div className="detail-price">
            <span className="detail-price__amount">
              <span>Harga Cash:</span>
              <span>{formatCarPrice(car.price)}</span>
            </span>
            <a className="detail-price__simulation-link" href="#loan-calculator">
              Simulasi Kredit
            </a>
          </div>
          <div className="spec-section">
            <h2>Informasi kendaraan</h2>
            <dl className="spec-list">
              {car.specifications.map((spec) => (
                <div className="spec-row" key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value ?? "Belum diinformasikan"}</dd>
                </div>
              ))}
            </dl>
          </div>
          <section className="condition-group" aria-labelledby="condition-group-title">
            <div className="condition-panel">
              <BadgeInfo aria-hidden="true" size={19} />
              <div>
                <h2 id="condition-group-title">Kondisi Kendaraan</h2>
                <p>{car.condition}</p>
              </div>
            </div>
            <div className="condition-details">
              {["Eksterior", "Interior", "Mesin", "Dokumen"].map((category) => (
                <article className="condition-detail-card" key={category}>
                  <h3>{category}</h3>
                  <p>
                    {category === "Eksterior"
                      ? "Kondisi bodi dan cat terawat, tidak ditemukan kerusakan signifikan."
                      : category === "Interior"
                        ? "Kondisi jok, dashboard, dan kabin terawat."
                        : category === "Dokumen"
                          ? "STNK dan BPKB tersedia, pajak aktif."
                          : "Hubungi Dealer / Cek Langsung"}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <div className="detail-actions">
            <WhatsAppButton message={inquiryMessage} className="button--wide" />
            <Link className="button button--outline" href="/cars">
              <ArrowLeft aria-hidden="true" size={16} /> Kembali ke katalog
            </Link>
          </div>
          <p className="detail-disclaimer">
            <Check aria-hidden="true" size={15} />
            Tanyakan langsung untuk mendapatkan informasi unit yang terverifikasi.
          </p>
          <Link className="text-link detail-about-link" href="/contact">
            Informasi kontak dealer <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </section>
      </div>
      <CarLoanCalculator car={car} />
      <section className="related-cars">
        <div className="related-cars__heading">
          <div>
            <span className="eyebrow">Pilihan lainnya</span>
            <h2>Koleksi mobil lainnya</h2>
          </div>
          <Link className="text-link" href="/cars">
            Lihat katalog <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="car-grid">
          {cars.filter((otherCar) => otherCar.slug !== car.slug).map((otherCar) => (
            <div key={otherCar.id}>
              <Link
                className="related-car-link"
                href={`/cars/${otherCar.slug}`}
              >
                {otherCar.brand} {otherCar.name} {otherCar.year}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
