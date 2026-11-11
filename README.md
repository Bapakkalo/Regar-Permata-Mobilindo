# Regar Permata Mobilindo

Website dealer mobil bekas Regar Permata Mobilindo menggunakan Next.js App
Router, TypeScript, dan Tailwind CSS 4.

## Menjalankan project

```sh
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Server lokal hanya bisa diakses saat `npm run dev` sedang berjalan.
Build produksi disimpan di direktori `build/`.

## Halaman

- `/` — beranda dan mobil unggulan
- `/cars` — katalog kendaraan
- `/cars/toyota-rush-2024` — detail Toyota Rush 2021
- `/cars/toyota-rush-2019` — detail Toyota Rush 2019
- `/cars/toyota-avanza-2022` — detail Toyota Avanza 2022
- `/cars/daihatsu-taft-gt-1994` — detail Daihatsu Taft GT 1994
- `/cars/daihatsu-taft-rocky-1997` — detail Daihatsu Taft Rocky 1997
- `/about` — tentang dealer
- `/contact` — informasi kontak

## Mengubah data

- `src/data/cars.ts` — harga, kondisi, spesifikasi, dan detail kendaraan.
  Informasi yang belum diberikan sengaja dikosongkan dan ditampilkan sebagai
  belum tersedia.
- `src/data/site.ts` — konfigurasi situs dan nomor WhatsApp dealer.

Nomor WhatsApp belum diisi. Sebelum website dipublikasikan, ganti nilai
`whatsappNumber` di `src/data/site.ts` dengan nomor resmi dalam format angka
internasional, tanpa tanda `+`, spasi, atau tanda baca.

Foto mobil di situs adalah **foto ilustrasi**, bukan foto unit yang dijual.
Sumber dan atribusi foto tercantum di bagian bawah setiap halaman.

## Struktur utama

- `src/app/page.tsx` — halaman utama
- `src/app/layout.tsx` — layout dan metadata website
- `src/app/globals.css` — style global
- `src/app/cars/` — katalog dan halaman detail mobil
- `src/components/` — komponen antarmuka yang digunakan ulang
- `src/data/` — konfigurasi situs dan data mobil

Jalankan `npm run lint`, `npx tsc --noEmit`, dan `npm run build` untuk
memeriksa kode dan membuat build production.

Dokumentasi: [Next.js](https://nextjs.org/docs).
