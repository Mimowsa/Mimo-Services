import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getRoute } from "@/app/i18n/routes";
import styles from "@/app/a-propos/a-propos.module.css";

export default function AboutContent({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroImage}>
            <Image
              src="/img/about-portrait.jpg"
              alt={content.about.hero.imageAlt}
              width={520}
              height={640}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <p className="eyebrow">{content.about.hero.eyebrow}</p>
            <h1>{content.about.hero.title}</h1>
            <p className={styles.lead}>{content.about.hero.lead}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.whatGrid}`}>
          <div className={styles.sectionIntro}>
            <p className="eyebrow">{content.about.what.eyebrow}</p>
            <h2>{content.about.what.title}</h2>
          </div>
          <div className={styles.cards}>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-process.png"
                alt={content.about.what.cards[0].imageAlt}
                width={48}
                height={48}
              />
              <h3>{content.about.what.cards[0].title}</h3>
              <p>{content.about.what.cards[0].description}</p>
            </article>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-automation.png"
                alt={content.about.what.cards[1].imageAlt}
                width={48}
                height={48}
              />
              <h3>{content.about.what.cards[1].title}</h3>
              <p>{content.about.what.cards[1].description}</p>
            </article>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-users.png"
                alt={content.about.what.cards[2].imageAlt}
                width={48}
                height={48}
              />
              <h3>{content.about.what.cards[2].title}</h3>
              <p>{content.about.what.cards[2].description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className={`container ${styles.valueGrid}`}>
          <div>
            <p className="eyebrow">{content.about.value.eyebrow}</p>
            <h2>{content.about.value.title}</h2>
            <p>{content.about.value.lead}</p>
          </div>
          <div
            className={styles.valueStat}
            aria-label={content.about.value.statAriaLabel}
          >
            <p className={styles.valueStatLabel}>
              {content.about.value.statPrefix}
            </p>
            <p className={styles.valueStatValue}>
              {content.about.value.statValue}
            </p>
            <p className={styles.valueStatLabel}>
              {content.about.value.statLabel}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.credibility}>
        <div className={`container ${styles.credibilityGrid}`}>
          <div>
            <p className="eyebrow">{content.about.credibility.eyebrow}</p>
            <h2>{content.about.credibility.title}</h2>
          </div>
          <div className={styles.logoGrid}>
            <Image src="/img/danone.png" alt="Logo Danone" width={160} height={80} />
            <Image src="/img/edf.png" alt="Logo EDF" width={160} height={80} />
            <Image
              src="/img/parker-hannifin.png"
              alt="Logo Parker Hannifin"
              width={160}
              height={80}
            />
            <Image
              src="/img/ics.png"
              alt="Logo ICS Productions"
              width={160}
              height={80}
            />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaCard}`}>
          <div>
            <p className="eyebrow">{content.about.cta.eyebrow}</p>
            <h2>{content.about.cta.title}</h2>
            <p>{content.about.cta.lead}</p>
          </div>
          <Link href={getRoute("contact", locale)} className="button">
            {content.about.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
