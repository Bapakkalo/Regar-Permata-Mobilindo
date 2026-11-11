import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Regar Permata Mobilindo, dealer mobil bekas.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-banner page-banner--about">
        <div className="site-container">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat Regar Permata Mobilindo.</p>
          <span className="breadcrumb">
            Beranda <span>/</span> Tentang kami
          </span>
        </div>
      </section>
      <section className="section site-container about-intro">
        <SectionHeading
          eyebrow="Mengenal kami"
          title="Siapa Kami"
        />
        <div className="about-copy">
          <p>
            Regar Permata Mobilindo merupakan dealer jual beli mobil bekas yang
            berdiri sejak tahun 2012. Sejak awal berdiri, kami berkomitmen untuk
            menyediakan kendaraan yang sesuai dengan kebutuhan pelanggan.
          </p>
          <p>
            Kami mengutamakan kualitas kendaraan, keterbukaan informasi, serta
            pelayanan yang mengedepankan kenyamanan dalam setiap proses
            transaksi.
          </p>
          <p>
            Bagi kami, kepercayaan pelanggan adalah hal yang penting. Karena
            itu, kami berupaya memberikan pengalaman jual beli mobil yang
            nyaman, jelas, dan terpercaya.
          </p>
        </div>
      </section>
      <section className="section site-container awards-section">
        <h2 className="awards-section__title">Penghargaan Kami</h2>
        <div className="awards-section__list">
          <article className="awards-section__content">
            <div className="awards-section__media">
              <Image
                alt="Sertifikat BCA Finance Showroom Relationship 2014 untuk Regar Permata Mobilindo"
                className="awards-section__image"
                height={645}
                src="/bca-finance-award-2014.jpg"
                width={828}
              />
            </div>
            <div className="awards-section__copy">
              <SectionHeading
                eyebrow="Penghargaan 2014"
                title="Showroom Relationship"
              />
              <p className="awards-section__description">
                Penghargaan BCA Finance atas kontribusi Regar Permata Mobilindo
                sebagai showroom dengan performa baik pada 2014. Sertifikat
                penghargaan ini bertanggal 17 Februari 2015.
              </p>
            </div>
          </article>
          <article className="awards-section__content">
            <Image
              alt="Piala BCA Finance Showroom Relationship 2015 dengan penghargaan The Best Performance Contribution untuk Regar Permata Mobilindo"
              className="awards-section__image"
              height={1028}
              src="/showroom-relationship-award-2015-cutout.webp"
              width={768}
            />
            <div className="awards-section__copy">
              <SectionHeading
                eyebrow="Penghargaan 2015"
                title="The Best Performance Contribution"
              />
              <p className="awards-section__description">
                Penghargaan Best Performance Contribution dari BCA Finance tahun
                2015 merupakan bentuk apresiasi kepada Regar Permata Mobilindo
                atas pencapaian penjualan kendaraan serta kontribusinya dalam
                memberikan pelayanan terbaik kepada konsumen. Penghargaan ini
                menjadi bukti komitmen showroom dalam menjaga kepercayaan dan
                kepuasan pelanggan.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="section site-container about-cta">
        <div>
          <span className="eyebrow">Langkah berikutnya</span>
          <h2>Sudah menemukan mobil yang ingin ditanyakan?</h2>
        </div>
        <Link className="button button--dark" href="/cars">
          Jelajahi koleksi <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </section>
    </main>
  );
}
