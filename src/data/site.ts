export const siteConfig = {
  name: "Regar Permata Mobilindo",
  description:
    "Pilihan mobil bekas untuk menemani perjalanan Anda. Informasi unit dapat dikonfirmasi langsung kepada dealer.",
  whatsappNumber: "628121897448",
  instagramUrl: "https://www.instagram.com/Regarpermatamobilindo/",
  email: "",
  address: "",
};

export function getWhatsAppUrl(message: string): string | null {
  const phoneNumber = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!phoneNumber) {
    return null;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
