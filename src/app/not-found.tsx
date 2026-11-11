import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found site-container">
      <span className="eyebrow">Halaman tidak ditemukan</span>
      <h1>Mobil yang Anda cari belum tersedia di sini.</h1>
      <p>Periksa kembali alamat atau jelajahi kendaraan lain dalam katalog.</p>
      <Link className="button button--dark" href="/cars">
        <ArrowLeft aria-hidden="true" size={16} /> Kembali ke katalog
      </Link>
    </main>
  );
}
