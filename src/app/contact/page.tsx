import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Regar Permata Mobilindo untuk menanyakan harga dan informasi kendaraan.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-banner page-banner--contact">
        <div className="site-container">
          <span className="eyebrow">Kami siap membantu</span>
          <h1>Ada mobil yang ingin Anda tanyakan?</h1>
          <p>
            Tanyakan harga, informasi unit, atau jadwalkan kunjungan langsung
            dengan dealer.
          </p>
          <span className="breadcrumb">
            Beranda <span>/</span> Kontak
          </span>
        </div>
      </section>
      <section className="site-container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Hubungi dealer</span>
          <h2>Mulai percakapan tentang mobil pilihan Anda.</h2>
          <p>
            Tim {siteConfig.name} dapat membantu menjawab pertanyaan tentang
            kendaraan yang ada di katalog.
          </p>
          <div className="contact-copy__actions">
            <WhatsAppButton message="Halo, saya ingin bertanya mengenai koleksi mobil Regar Permata Mobilindo." />
            <a
              className="button button--instagram"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <rect
                  height="17"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="17"
                  x="3.5"
                  y="3.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
              </svg>
              Instagram
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
          {!siteConfig.whatsappNumber ? (
            <p className="contact-note">
              Nomor WhatsApp dealer belum diatur. Tambahkan nomor resmi pada
              src/data/site.ts sebelum website dipublikasikan.
            </p>
          ) : null}
        </div>
        <div className="contact-card">
          <div className="contact-card__icons">
            <div
              className="contact-card__icon contact-card__icon--whatsapp"
              aria-label="WhatsApp"
              role="img"
            >
              <MessageCircle aria-hidden="true" size={23} />
            </div>
            <div
              className="contact-card__icon contact-card__icon--instagram"
              aria-label="Instagram"
              role="img"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="23"
                viewBox="0 0 24 24"
                width="23"
              >
                <rect
                  height="17"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="17"
                  x="3.5"
                  y="3.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
              </svg>
            </div>
          </div>
          <h2>Informasi kontak</h2>
          <p>
            {siteConfig.whatsappNumber
              ? `+${siteConfig.whatsappNumber.replace(/\D/g, "")}`
              : "Nomor WhatsApp belum tersedia"}
          </p>
          {!siteConfig.whatsappNumber ? (
            <span className="contact-placeholder">
              Isi nomor resmi dealer sebelum situs dipublikasikan.
            </span>
          ) : null}
          <div className="contact-card__divider" />
          {siteConfig.email ? (
            <div className="contact-card__address">
              <Mail aria-hidden="true" size={18} />
              <span>
                <strong>Alamat surel</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </span>
            </div>
          ) : null}
          {siteConfig.address ? (
            <div className="contact-card__address">
              <MapPin aria-hidden="true" size={18} />
              <span>
                <strong>Alamat dealer</strong>
                <span>{siteConfig.address}</span>
              </span>
            </div>
          ) : null}
          <div className="contact-card__address contact-card__address--visit">
            <MapPin aria-hidden="true" size={18} />
            <span>
              <strong>Informasi kunjungan</strong>
              <span>
                No.32 Blok EA2, Ruko permata, Jl. Raya Regency II, Kuta Jaya,
                Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560, Indonesia
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="contact-bottom">
        <div className="site-container contact-bottom__inner">
          <p>Ingin melihat kendaraan yang tersedia?</p>
          <Link className="text-link" href="/cars">
            Buka katalog mobil <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
