import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getRoute } from "@/app/i18n/routes";
import styles from "@/app/page.module.css";

export default function HomeContent({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className="badge">{content.home.hero.badge}</span>
            <h1>{content.home.hero.title}</h1>
            <p className={styles.lead}>{content.home.hero.lead}</p>
            <div className={styles.heroActions}>
              <Link href={getRoute("contact", locale)} className="button">
                {content.home.hero.ctaPrimary}
              </Link>
              <Link
                href={getRoute("projects", locale)}
                className="button secondary"
              >
                {content.home.hero.ctaSecondary}
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div>
                <p className={styles.statValue}>
                  {content.home.stats.items[0].title}
                </p>
                <p className={styles.statLabel}>
                  {content.home.stats.items[0].description}
                </p>
              </div>
              <div>
                <p className={styles.statValue}>
                  {content.home.stats.items[1].title}
                </p>
                <p className={styles.statLabel}>
                  {content.home.stats.items[1].description}
                </p>
              </div>
              <div>
                <p className={styles.statValue}>
                  {content.home.stats.items[2].title}
                </p>
                <p className={styles.statLabel}>
                  {content.home.stats.items[2].description}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/pp-flow.png"
              alt={content.home.hero.imageAlt}
              width={560}
              height={420}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={`container ${styles.trustGrid}`}>
          <div>
            <p className="eyebrow">{content.home.trust.eyebrow}</p>
            <h2>{content.home.trust.title}</h2>
            <p className={styles.trustLead}>{content.home.trust.lead}</p>
            <Link
              href={getRoute("projects", locale)}
              className="button secondary"
            >
              {content.home.trust.cta}
            </Link>
          </div>
          <div
            className={styles.carousel}
            aria-label={content.home.trust.carouselLabel}
          >
            <div className={styles.carouselTrack}>
              <div className={styles.logoCard}>
                <Image src="/img/danone.png" alt="Logo Danone" width={160} height={80} />
              </div>
              <div className={styles.logoCard}>
                <Image src="/img/edf.png" alt="Logo EDF" width={160} height={80} />
              </div>
              <div className={styles.logoCard}>
                <Image
                  src="/img/parker-hannifin.png"
                  alt="Logo Parker Hannifin"
                  width={160}
                  height={80}
                />
              </div>
              <div className={styles.logoCard}>
                <Image src="/img/ics.png" alt="Logo ICS Productions" width={160} height={80} />
              </div>
              <div className={styles.logoCard}>
                <Image src="/img/danone.png" alt="Logo Danone" width={160} height={80} />
              </div>
              <div className={styles.logoCard}>
                <Image src="/img/edf.png" alt="Logo EDF" width={160} height={80} />
              </div>
              <div className={styles.logoCard}>
                <Image
                  src="/img/parker-hannifin.png"
                  alt="Logo Parker Hannifin"
                  width={160}
                  height={80}
                />
              </div>
              <div className={styles.logoCard}>
                <Image src="/img/ics.png" alt="Logo ICS Productions" width={160} height={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={`container ${styles.darkGrid}`}>
          <div className={styles.darkIntro}>
            <p className="eyebrow">{content.home.commitment.eyebrow}</p>
            <h2>{content.home.commitment.title}</h2>
            <p>{content.home.commitment.lead}</p>
          </div>
          <div className={styles.metrics}>
            <div>
              <p className={styles.metricValue}>
                {content.home.commitment.metrics[0].value}
              </p>
              <p className={styles.metricLabel}>
                {content.home.commitment.metrics[0].label}
              </p>
            </div>
            <div>
              <p className={styles.metricValue}>
                {content.home.commitment.metrics[1].value}
              </p>
              <p className={styles.metricLabel}>
                {content.home.commitment.metrics[1].label}
              </p>
            </div>
            <div>
              <p className={styles.metricValue}>
                {content.home.commitment.metrics[2].value}
              </p>
              <p className={styles.metricLabel}>
                {content.home.commitment.metrics[2].label}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.sectionGrid}`}>
          <div className={styles.sectionIntro}>
            <p className="eyebrow">{content.home.approach.eyebrow}</p>
            <h2>{content.home.approach.title}</h2>
            <p>{content.home.approach.lead}</p>
          </div>
          <div className={styles.steps}>
            <div className="card">
              <h3>{content.home.approach.steps[0].title}</h3>
              <p>{content.home.approach.steps[0].description}</p>
            </div>
            <div className="card">
              <h3>{content.home.approach.steps[1].title}</h3>
              <p>{content.home.approach.steps[1].description}</p>
            </div>
            <div className="card">
              <h3>{content.home.approach.steps[2].title}</h3>
              <p>{content.home.approach.steps[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaCard}`}>
          <div>
            <p className="eyebrow">{content.home.cta.eyebrow}</p>
            <h2>{content.home.cta.title}</h2>
            <p>{content.home.cta.lead}</p>
          </div>
          <Link href={getRoute("contact", locale)} className="button">
            {content.home.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
