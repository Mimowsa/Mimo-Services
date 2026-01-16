import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/SiteHeader.module.css";

const navItems = [
  { href: "/mes-projets", label: "Mes projets" },
  { href: "/a-propos", label: "À propos" }
];

export default function SiteHeader() {
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
        <nav className={styles.nav} aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button">
          Me contacter
        </Link>
      </div>
    </header>
  );
}
