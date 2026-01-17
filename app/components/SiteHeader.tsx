"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getAlternatePathname, getRoute } from "@/app/i18n/routes";
import styles from "@/app/components/SiteHeader.module.css";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const content = useMemo(() => getContent(locale), [locale]);
  const alternatePathname = getAlternatePathname(pathname, locale);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={getRoute("home", locale)} className={styles.logo}>
          <span className={styles.logoMark}>
            <Image
              src="/img/logo.png"
              alt={content.header.logoAlt}
              width={36}
              height={36}
            />
          </span>
          <span className={styles.logoText}>Mimo Services</span>
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-label={content.header.menuLabel}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
        <nav
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label={content.header.navLabel}
        >
          {[
            { href: getRoute("projects", locale), label: content.header.nav.projects },
            { href: getRoute("about", locale), label: content.header.nav.about }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Link
            href={alternatePathname}
            className={styles.langToggle}
            aria-label={content.header.languageToggle.ariaLabel}
            onClick={() => setIsOpen(false)}
          >
            {content.header.languageToggle.label}
          </Link>
          <Link
            href={getRoute("contact", locale)}
            className={`button ${styles.desktopCta}`}
          >
            {content.header.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
