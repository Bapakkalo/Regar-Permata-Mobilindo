import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" href="/">
              <Image
                alt="Regar Permata Mobilindo — Jual Beli Mobil Bekas"
                className="brand__logo"
                height={768}
                sizes="220px"
                src="/brand-logo.jpg"
                width={1376}
              />
            </Link>
            <p>{siteConfig.description}</p>
            <Link className="footer-contact-link" href="/contact">
              <MessageCircle aria-hidden="true" size={15} /> Hubungi dealer
            </Link>
          </div>
          <div className="footer-column">
            <h2>Navigasi</h2>
            <Link href="/">Beranda</Link>
            <Link href="/cars">Beli Mobil Bekas</Link>
            <Link href="/jual-mobil">Jual Mobil Bekas</Link>
            <Link href="/about">Tentang Kami</Link>
            <Link href="/contact">Kontak</Link>
          </div>
          <div className="footer-column">
            <h2>Layanan & koleksi</h2>
            <Link href="/jual-mobil">Informasi penjualan mobil</Link>
            {cars.map((car) => (
              <Link href={`/cars/${car.slug}`} key={car.id}>
                {car.brand} {car.name} {car.year}
              </Link>
            ))}
            <Link className="footer-all" href="/cars">Lihat semua <ArrowUpRight aria-hidden="true" size={14} /></Link>
          </div>
          <div className="footer-column footer-contact">
            <h2>Kontak</h2>
            {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : null}
            {siteConfig.whatsappNumber ? (
              <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                +{siteConfig.whatsappNumber.replace(/\D/g, "")}
              </a>
            ) : <span>Nomor WhatsApp belum tersedia</span>}
            {siteConfig.address ? <span>{siteConfig.address}</span> : <span>Alamat dealer belum tersedia</span>}
            <WhatsAppButton
              className="footer-whatsapp"
              label="Hubungi Kami"
              message="Halo, saya ingin bertanya mengenai layanan Regar Permata Mobilindo."
            />
          </div>
        </div>
        <section className="footer-cta" aria-labelledby="footer-cta-title">
          <div>
            <h2 id="footer-cta-title">
              Temukan mobil yang tepat untuk perjalanan Anda
            </h2>
            <p>
              Jelajahi koleksi Regar Permata Mobilindo dan pilih kendaraan yang
              paling sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </section>
        <div className="footer-bottom">
          <span>© {siteConfig.name}</span>
          <span>Informasi kendaraan dapat dikonfirmasi langsung kepada dealer.</span>
        </div>
      </div>
    </footer>
  );
}
