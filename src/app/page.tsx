import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Tags,
  Wrench,
} from "lucide-react";
import { CarCard } from "@/components/car-card";
import { CarImage } from "@/components/car-image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/site";

const advantages = [
  {
    icon: BadgeCheck,
    title: "Mobil Berkualitas",
    description: "Kenali detail kendaraan dan konfirmasikan kondisinya langsung.",
  },
  {
    icon: ClipboardCheck,
    title: "Proses Mudah",
    description: "Tanyakan langkah transaksi secara jelas sebelum melanjutkan.",
  },
  {
    icon: Tags,
    title: "Harga Kompetitif",
    description: "Hubungi dealer untuk memperoleh informasi harga terbaru.",
  },
  {
    icon: Handshake,
    title: "Pelayanan Profesional",
    description: "Sampaikan kebutuhan Anda dan dapatkan informasi dari dealer.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Hubungi Kami",
    description: "Tanyakan mobil yang sedang Anda cari.",
  },
  {
    icon: Wrench,
    title: "Cek Unit",
    description: "Lihat langsung kendaraan dan konfirmasikan detailnya.",
  },
  {
    icon: FileCheck2,
    title: "Proses Administrasi",
    description: "Pastikan detail proses dan dokumen bersama dealer.",
  },
  {
    icon: Handshake,
    title: "Serah Terima",
    description: "Lanjutkan setelah informasi dan kesepakatan jelas.",
  },
];

export default function Home() {
  return (
    <main className="homepage">
      <section className="hero">
        <div className="site-container hero__layout">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-dot" /> Regar Permata Mobilindo
            </span>
            <h1>
              Temukan Mobil Impian Anda di{" "}
              <span>Regar Permata Mobilindo</span>
            </h1>
            <p>
              Kami menyediakan pilihan mobil bekas berkualitas dengan proses
              yang mudah, aman, dan transparan.
            </p>
            <div className="hero__actions">
              <Link className="button button--red" href="/cars">
                Lihat Koleksi Mobil <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link className="button button--outline-light" href="/jual-mobil">
                Jual Mobil Bekas <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="hero__assurance">
              <ShieldCheck aria-hidden="true" size={17} />
              Tanyakan detail kendaraan langsung kepada dealer
            </div>
          </div>
          <div className="hero__visual" aria-label="Foto ilustrasi Toyota Rush">
            <CarImage src={cars[0].image} alt={cars[0].imageAlt} priority />
            <div className="hero__image-shade" />
            <span className="image-note">Foto ilustrasi · bukan foto unit</span>
            <Link className="hero__model-tag" href={`/cars/${cars[0].slug}`}>
              <span>Unit pilihan</span>
              <strong>Toyota Rush <i>2024</i></strong>
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="hero__edge">
            <span>01</span>
            <span />
            <span>02</span>
          </div>
        </div>
      </section>

      <section className="section site-container featured-section" id="koleksi">
        <div className="section-intro">
          <div>
            <span className="eyebrow">DAFTAR MOBIL</span>
            <h2>Pilihan Mobil</h2>
            <p>Temukan kendaraan yang sesuai dengan perjalanan Anda berikutnya.</p>
          </div>
          <Link className="text-link" href="/cars">
            Jelajahi semua mobil <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="car-grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} pricingVariant="homepage" />
          ))}
        </div>
      </section>

      <section className="sell-section" id="jual-mobil-beranda">
        <div className="site-container sell-layout">
          <div className="sell-gallery">
            <div className="sell-gallery__main">
              <CarImage
                src="/sell-car-promo.jpg"
                alt="Mobil SUV hitam dengan identitas Regar Permata Mobilindo"
              />
            </div>
          </div>
          <div className="sell-copy">
            <span className="eyebrow">Layanan dealer</span>
            <h2>Ingin Menjual Mobil Anda?</h2>
            <p>
              Kami siap membantu Anda dalam proses penjualan mobil dengan mudah
              dan transparan.
            </p>
            <p className="sell-copy__note">
              Hubungi kami untuk menanyakan informasi dan proses yang tersedia.
              Layanan penilaian kendaraan belum dikonfirmasi.
            </p>
            <Link className="button button--red" href="/jual-mobil">
              Tanyakan Layanan <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <div className="sell-points">
              <span><BadgeCheck aria-hidden="true" size={16} /> Informasi langsung</span>
              <span><ShieldCheck aria-hidden="true" size={16} /> Proses transparan</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section advantages-section">
        <div className="site-container">
          <div className="section-intro">
            <div>
              <span className="eyebrow">REGAR PERMATA MOBILINDO</span>
              <h2>Mengapa Memilih Kami?</h2>
              <p>Informasi kendaraan dan proses yang dapat Anda tanyakan langsung.</p>
            </div>
          </div>
          <div className="advantages-grid">
            {advantages.map(({ icon: Icon, title, description }, index) => (
              <article className="advantage" key={title}>
                <span className="advantage__number">0{index + 1}</span>
                <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="site-container">
          <div className="section-intro section-intro--center">
            <div>
              <span className="eyebrow eyebrow--light">Langkah demi langkah</span>
              <h2>Bagaimana Prosesnya?</h2>
              <p>Kenali alur umum sebelum melanjutkan transaksi.</p>
            </div>
          </div>
          <ol className="process-list">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li className="process-step" key={title}>
                <span className="process-step__marker">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <span className="process-step__number">LANGKAH 0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <p className="process-note">
            Proses dan persyaratan dapat berbeda. Konfirmasikan detail kepada
            dealer sebelum memulai.
          </p>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-container contact-banner__inner">
          <div>
            <span className="eyebrow eyebrow--light">Informasi kendaraan</span>
            <h2>Hubungi Kami Sekarang</h2>
            <p>
              Dapatkan informasi mengenai kendaraan yang tersedia dan jadwalkan
              kunjungan Anda.
            </p>
            <div className="contact-banner__details">
              <span>
                <MessageCircle aria-hidden="true" size={16} />
                {siteConfig.whatsappNumber
                  ? `+${siteConfig.whatsappNumber.replace(/\D/g, "")}`
                  : "Nomor WhatsApp belum tersedia"}
              </span>
              {siteConfig.email ? <span>{siteConfig.email}</span> : null}
              {siteConfig.address ? <span>{siteConfig.address}</span> : null}
            </div>
          </div>
          <div className="contact-banner__actions">
            <WhatsAppButton
              message="Halo, saya ingin bertanya mengenai kendaraan yang tersedia di Regar Permata Mobilindo."
            />
            <Link className="button button--outline-light" href="/contact">
              Informasi Kontak <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
