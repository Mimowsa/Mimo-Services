import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/a-propos/a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos du freelance Power Platform",
  description:
    "Profil de freelance Power Platform à Paris: expertise Power Apps, Power Automate, Microsoft 365 et missions en grands groupes.",
  openGraph: {
    title: "À propos du freelance Power Platform",
    description:
      "Expert Power Platform, interventions en Île-de-France.",
    images: ["/og-power-platform-paris.svg"]
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroImage}>
            <Image
              src="/img/about-portrait.jpg"
              alt="Portrait professionnel du consultant Power Platform"
              width={520}
              height={640}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <p className="eyebrow">À propos</p>
            <h1>Développeur Power Platform</h1>
            <p className={styles.lead}>
              J&apos;aide les entreprises à automatiser leurs processus et à gagner
              du temps grâce à l&apos;écosystème Microsoft 365.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.whatGrid}`}>
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Ce que je fais</p>
            <h2>Des solutions claires, adoptées et utiles au quotidien</h2>
          </div>
          <div className={styles.cards}>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-process.png"
                alt="Icône digitalisation des processus"
                width={48}
                height={48}
              />
              <h3>Digitalisation des processus</h3>
              <p>
                Transformation de processus manuels en workflows clairs et
                automatisés.
              </p>
            </article>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-automation.png"
                alt="Icône automatisation Power Platform"
                width={48}
                height={48}
              />
              <h3>Automatisation Power Platform</h3>
              <p>
                Power Apps, Power Automate et intégrations Microsoft 365.
              </p>
            </article>
            <article className={styles.iconCard}>
              <Image
                src="/img/icon-users.png"
                alt="Icône accompagnement des équipes"
                width={48}
                height={48}
              />
              <h3>Accompagnement des équipes</h3>
              <p>
                Des solutions pensées pour être adoptées et maintenues dans le
                temps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className={`container ${styles.valueGrid}`}>
          <div>
            <p className="eyebrow">Pourquoi travailler avec moi</p>
            <h2>Une approche orientée valeur métier</h2>
            <p>
              Mon approche est orientée valeur métier: comprendre le besoin
              avant d&apos;automatiser, simplifier avant de complexifier, et livrer
              des solutions réellement utilisées.
            </p>
          </div>
          <div className={styles.valueStat} aria-label="Jusqu&apos;à 50% de temps gagné">
            <p className={styles.valueStatLabel}>Jusqu&apos;à</p>
            <p className={styles.valueStatValue}>50%</p>
            <p className={styles.valueStatLabel}>de temps gagné</p>
          </div>
        </div>
      </section>

      <section className={styles.credibility}>
        <div className={`container ${styles.credibilityGrid}`}>
          <div>
            <p className="eyebrow">Crédibilité</p>
            <h2>Références grands comptes</h2>
          </div>
          <div className={styles.logoGrid}>
            <Image
              src="/img/danone.png"
              alt="Logo Danone"
              width={160}
              height={80}
            />
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
            <p className="eyebrow">Et maintenant</p>
            <h2>Parlons de votre contexte</h2>
            <p>
              Vous avez des processus manuels ou des workflows peu lisibles ?
              Voyons comment la Power Platform peut vous aider.
            </p>
          </div>
          <Link href="/contact" className="button">
            Démarrer la discussion
          </Link>
        </div>
      </section>
    </main>
  );
}
