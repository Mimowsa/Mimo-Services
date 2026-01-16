"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/app/components/SiteHeader.module.css";

const navItems = [
  { href: "/mes-projets", label: "Mes projets" },
  { href: "/a-propos", label: "À propos" }
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <Image
              src="/img/logo.png"
              alt="Logo Mimo Services"
              width={36}
              height={36}
            />
          </span>
          <span className={styles.logoText}>Mimo Services</span>
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
        <nav
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
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
        <Link href="/contact" className={`button ${styles.desktopCta}`}>
          Me contacter
        </Link>
      </div>
    </header>
  );
}
