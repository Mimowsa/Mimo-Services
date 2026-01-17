import Link from "next/link";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getRoute } from "@/app/i18n/routes";
import styles from "@/app/components/SiteFooter.module.css";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Mimo Services</p>
          <p className={styles.tagline}>
            {content.footer.tagline}
          </p>
        </div>
        <div className={styles.links}>
          <Link href={getRoute("projects", locale)}>
            {content.footer.links.projects}
          </Link>
          <Link href={getRoute("about", locale)}>
            {content.footer.links.about}
          </Link>
          <Link href={getRoute("contact", locale)}>
            {content.footer.links.contact}
          </Link>
        </div>
        <div className={styles.meta}>
          <p>{content.footer.meta.location}</p>
          <p>{content.footer.meta.availability}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          (c) {new Date().getFullYear()} Mimo Services.{" "}
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
