export type Car = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  year: number;
  price: number | null;
  monthlyInstallment: number | null;
  creditPrice: number | null;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  gallery: {
    image: string;
    imageAlt: string;
    imageCredit: string;
    imageSource: string;
  }[];
  description: string;
  condition: string;
  availability: string | null;
  specifications: {
    label: string;
    value: string | null;
  }[];
};

export const cars: Car[] = [
  {
    id: "toyota-rush-2024",
    slug: "toyota-rush-2024",
    brand: "Toyota",
    name: "Rush",
    year: 2021,
    price: 210_000_000,
    monthlyInstallment: 3_900_000,
    creditPrice: 222_000_000,
    image: "/cars/toyota-rush.jpg",
    imageAlt: "Toyota Rush GR Sport, foto ilustrasi untuk model tahun 2024",
    imageCredit: "Alex Neman",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:2023_Toyota_Rush_1.5_GR_Sport,_Tunjungan_Plaza_6,_Central_Surabaya.jpg",
    gallery: [
      {
        image: "/cars/toyota-rush-gallery.jpg",
        imageAlt: "Foto ilustrasi pembanding Toyota Rush 1.5 E",
        imageCredit: "Captainmorlypogi1959",
        imageSource:
          "https://commons.wikimedia.org/wiki/File:Toyota_Rush_1.5_E_2023_(1).jpg",
      },
      {
        image: "/cars/toyota-rush-gallery-3.jpg",
        imageAlt: "Foto pembanding Toyota Rush GR 1.5 M/T tahun 2021",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
      {
        image: "/cars/toyota-rush-gallery-4.jpg",
        imageAlt: "Foto pembanding Toyota Rush TRD Sportivo A/T tahun 2018",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
      {
        image: "/cars/toyota-rush-gallery-5.jpg",
        imageAlt: "Foto pembanding Toyota Rush TRD Sportivo M/T tahun 2019",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
    ],
    description:
      "Detail kendaraan, harga, dan ketersediaan unit ini dapat dikonfirmasi langsung kepada dealer sebelum Anda berkunjung.",
    condition:
      "Informasi kondisi unit, kilometer, riwayat servis, dan dokumen belum diberikan. Silakan konfirmasi kepada dealer.",
    availability: null,
    specifications: [
      { label: "Merek", value: "Toyota" },
      { label: "Model", value: "Rush" },
      { label: "Tahun", value: "2021" },
      { label: "Kilometer", value: null },
      { label: "Transmisi", value: "Automatic" },
      { label: "Dokumen", value: null },
    ],
  },
  {
    id: "toyota-rush-2019",
    slug: "toyota-rush-2019",
    brand: "Toyota",
    name: "Rush",
    year: 2019,
    price: 192_000_000,
    monthlyInstallment: 3_600_000,
    creditPrice: 205_000_000,
    image: "/cars/toyota-rush.jpg",
    imageAlt: "Toyota Rush 2019, foto ilustrasi untuk model tahun 2019",
    imageCredit: "Alex Neman",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:2023_Toyota_Rush_1.5_GR_Sport,_Tunjungan_Plaza_6,_Central_Surabaya.jpg",
    gallery: [
      {
        image: "/cars/toyota-rush-gallery.jpg",
        imageAlt: "Foto ilustrasi pembanding Toyota Rush 1.5 E",
        imageCredit: "Captainmorlypogi1959",
        imageSource:
          "https://commons.wikimedia.org/wiki/File:Toyota_Rush_1.5_E_2023_(1).jpg",
      },
      {
        image: "/cars/toyota-rush-gallery-3.jpg",
        imageAlt: "Foto pembanding Toyota Rush GR 1.5 M/T tahun 2021",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
      {
        image: "/cars/toyota-rush-gallery-4.jpg",
        imageAlt: "Foto pembanding Toyota Rush TRD Sportivo A/T tahun 2018",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
      {
        image: "/cars/toyota-rush-gallery-5.jpg",
        imageAlt: "Foto pembanding Toyota Rush TRD Sportivo M/T tahun 2019",
        imageCredit: "Foto kiriman dealer",
        imageSource: "",
      },
    ],
    description:
      "Detail kendaraan, harga, dan ketersediaan unit ini dapat dikonfirmasi langsung kepada dealer sebelum Anda berkunjung.",
    condition:
      "Informasi kondisi unit, kilometer, riwayat servis, dan dokumen belum diberikan. Silakan konfirmasi kepada dealer.",
    availability: null,
    specifications: [
      { label: "Merek", value: "Toyota" },
      { label: "Model", value: "Rush" },
      { label: "Tahun", value: "2019" },
      { label: "Kilometer", value: null },
      { label: "Transmisi", value: "Automatic" },
      { label: "Dokumen", value: null },
    ],
  },
  {
    id: "toyota-avanza-2022",
    slug: "toyota-avanza-2022",
    brand: "Toyota",
    name: "Avanza",
    year: 2022,
    price: 230_000_000,
    monthlyInstallment: 3_900_000,
    creditPrice: 222_000_000,
    image: "/cars/toyota-avanza.jpg",
    imageAlt: "Toyota Avanza generasi terbaru, foto ilustrasi untuk model tahun 2022",
    imageCredit: "Ethan Llamas",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:2022_Toyota_Avanza_(PH).jpg",
    gallery: [
      {
        image: "/cars/toyota-avanza-gallery.jpg",
        imageAlt: "Foto ilustrasi pembanding Toyota Avanza W100",
        imageCredit: "Alex Neman",
        imageSource:
          "https://commons.wikimedia.org/wiki/File:2022_Toyota_Avanza_(W100)_1.5_G,_IIMS_Hybrid,_Grand_City,_Central_Surabaya.jpg",
      },
    ],
    description:
      "Detail kendaraan, harga, dan ketersediaan unit ini dapat dikonfirmasi langsung kepada dealer sebelum Anda berkunjung.",
    condition:
      "Informasi kondisi unit, kilometer, riwayat servis, dan dokumen belum diberikan. Silakan konfirmasi kepada dealer.",
    availability: null,
    specifications: [
      { label: "Merek", value: "Toyota" },
      { label: "Model", value: "Avanza" },
      { label: "Tahun", value: "2022" },
      { label: "Kilometer", value: null },
      { label: "Transmisi", value: "Automatic" },
      { label: "Dokumen", value: null },
    ],
  },
  {
    id: "daihatsu-taft-gt-1994",
    slug: "daihatsu-taft-gt-1994",
    brand: "Daihatsu",
    name: "Taft GT",
    year: 1994,
    price: 145_000_000,
    monthlyInstallment: null,
    creditPrice: null,
    image: "/cars/daihatsu-taft-gt.jpg",
    imageAlt: "Daihatsu Taft GT 1994",
    imageCredit: "",
    imageSource: "",
    gallery: [],
    description: "Full Modifikasi Off-Road",
    condition:
      "Informasi kondisi unit, kilometer, riwayat servis, dan dokumen belum diberikan. Silakan konfirmasi kepada dealer.",
    availability: null,
    specifications: [
      { label: "Merek", value: "Daihatsu" },
      { label: "Model", value: "Taft GT" },
      { label: "Tahun", value: "1994" },
      { label: "Kilometer", value: null },
      { label: "Transmisi", value: null },
      { label: "Dokumen", value: null },
    ],
  },
  {
    id: "daihatsu-taft-rocky-1997",
    slug: "daihatsu-taft-rocky-1997",
    brand: "Daihatsu",
    name: "Taft Rocky",
    year: 1997,
    price: 165_000_000,
    monthlyInstallment: null,
    creditPrice: null,
    image: "/cars/daihatsu-taft-rocky.jpg",
    imageAlt: "Daihatsu Taft Rocky 1997",
    imageCredit: "",
    imageSource: "",
    gallery: [],
    description:
      "Detail kendaraan, harga, dan ketersediaan unit ini dapat dikonfirmasi langsung kepada dealer sebelum Anda berkunjung.",
    condition:
      "Informasi kondisi unit, kilometer, riwayat servis, dan dokumen belum diberikan. Silakan konfirmasi kepada dealer.",
    availability: null,
    specifications: [
      { label: "Merek", value: "Daihatsu" },
      { label: "Model", value: "Taft Rocky" },
      { label: "Tahun", value: "1997" },
      { label: "Kilometer", value: null },
      { label: "Transmisi", value: null },
      { label: "Dokumen", value: null },
    ],
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatCarPrice(price: number | null): string {
  if (price === null) {
    return "Hubungi untuk informasi harga";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMonthlyInstallment(amount: number | null): string {
  if (amount === null) {
    return "Hubungi untuk informasi cicilan";
  }

  const amountInMillions = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 1,
  }).format(amount / 1_000_000);

  return `Rp ${amountInMillions} Jt/bln`;
}
