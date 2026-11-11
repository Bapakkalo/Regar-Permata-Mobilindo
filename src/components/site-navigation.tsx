"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/cars", label: "Beli Mobil Bekas" },
  { href: "/jual-mobil", label: "Jual Mobil Bekas" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navigation.map((item) => {
          const hrefPath = item.href.split("#")[0];
          const active =
            item.href.includes("#")
              ? false
              : hrefPath === "/"
                ? pathname === "/"
                : pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={active ? "nav-link nav-link--active" : "nav-link"}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <details
        className="mobile-nav"
        onToggle={(event) => setIsMenuOpen(event.currentTarget.open)}
        ref={mobileNavRef}
      >
        <summary
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Navigasi seluler"
          className="mobile-nav__toggle"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={21} />
          ) : (
            <Menu aria-hidden="true" size={21} />
          )}
        </summary>
        <nav aria-label="Navigasi seluler" id="mobile-navigation">
          {navigation.map((item) => {
            const hrefPath = item.href.split("#")[0];
            const active =
              !item.href.includes("#") &&
              (hrefPath === "/"
                ? pathname === "/"
                : pathname === hrefPath || pathname.startsWith(`${hrefPath}/`));

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={active ? "nav-link nav-link--active" : "nav-link"}
                href={item.href}
                key={item.href}
                onClick={() => {
                  if (mobileNavRef.current) {
                    mobileNavRef.current.open = false;
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </details>
    </>
  );
}
