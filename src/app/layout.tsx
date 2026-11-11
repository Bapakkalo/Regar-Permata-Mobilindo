import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Regar Permata Mobilindo | Dealer Mobil Bekas",
    template: "%s | Regar Permata Mobilindo",
  },
  description:
    "Jelajahi koleksi mobil bekas Regar Permata Mobilindo dan tanyakan detail kendaraan langsung kepada dealer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
