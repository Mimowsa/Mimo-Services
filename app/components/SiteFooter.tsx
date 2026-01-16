import Link from "next/link";
import styles from "@/app/components/SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Mimo Services</p>
          <p className={styles.tagline}>
            Freelance Power Platform à Paris, expert Power Apps et Power Automate.
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/mes-projets">Mes projets</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.meta}>
          <p>Paris / Île-de-France</p>
          <p>Disponibilités: missions courte et longue</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>(c) {new Date().getFullYear()} Mimo Services. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
