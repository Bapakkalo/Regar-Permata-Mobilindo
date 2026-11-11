import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Jual Mobil Bekas",
  description:
    "Hubungi Regar Permata Mobilindo untuk menanyakan proses menjual mobil.",
};

export default function SellCarPage() {
  return (
    <main>
      <section className="page-banner page-banner--contact">
        <div className="site-container">
          <span className="eyebrow">Layanan penjualan mobil</span>
          <h1>Ingin Menjual Mobil Anda?</h1>
          <p>
            Hubungi dealer untuk menanyakan proses dan informasi penjualan mobil
            yang tersedia.
          </p>
          <span className="breadcrumb">
            Beranda <span>/</span> Jual Mobil Bekas
          </span>
        </div>
      </section>
      <section className="sell-contact">
        <div className="site-container sell-contact__inner">
          <div>
            <span className="eyebrow">Regar Permata Mobilindo</span>
            <h2>Mulai proses penjualan mobil Anda.</h2>
            <p>
              Kami siap membantu Anda dalam proses penjualan mobil dengan mudah
              dan transparan. Hubungi dealer untuk menanyakan proses serta
              informasi yang tersedia.
            </p>
            <span>
              Layanan penilaian kendaraan belum dikonfirmasi. Hubungi dealer
              untuk mengetahui layanan yang tersedia.
            </span>
          </div>
          <WhatsAppButton
            message="Halo, saya ingin bertanya mengenai proses menjual mobil di Regar Permata Mobilindo."
            label="Hubungi Kami"
          />
        </div>
      </section>
    </main>
  );
}
