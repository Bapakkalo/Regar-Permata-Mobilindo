import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteNavigation } from "@/components/site-navigation";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header__inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name}, beranda`}>
          <Image
            alt="Regar Permata Mobilindo — Jual Beli Mobil Bekas"
            className="brand__logo"
            height={768}
            priority
            sizes="(max-width: 760px) 130px, (max-width: 1080px) 144px, 190px"
            src="/brand-logo.jpg"
            width={1376}
          />
        </Link>
        <SiteNavigation />
        <Link className="header-cta" href="/contact">
          Hubungi Kami <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </header>
  );
}
