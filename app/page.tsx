import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className="badge">Freelance Power Platform - Paris</span>
            <h1>Optimisez vos processus métiers avec la Power Platform</h1>
            <p className={styles.lead}>
              Automatisation rapide, fiable et adaptée pour vos équipes.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="button">
                Demander un audit Power Platform
              </Link>
              <Link href="/mes-projets" className="button secondary">
                Voir les projets
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div>
                <p className={styles.statValue}>Expérience terrain</p>
                <p className={styles.statLabel}>
                  De nombreux projets Power Platform en entreprise
                </p>
              </div>
              <div>
                <p className={styles.statValue}>Multi-métier</p>
                <p className={styles.statLabel}>
                  RH, gestion des stocks, finance, process internes
                </p>
              </div>
              <div>
                <p className={styles.statValue}>M365</p>
                <p className={styles.statLabel}>
                  Intégration native Microsoft 365
                </p>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/pp-flow.png"
              alt="Schéma de flux Power Platform reliant Power Apps et Power Automate"
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
            <p className="eyebrow">Ils m&apos;ont fait confiance</p>
            <h2>Des contextes exigeants, des solutions concrètes</h2>
            <p className={styles.trustLead}>
              Des missions Power Platform menées dans des environnements
              exigeants, avec une priorité claire : fiabilité, adoption et
              impact métier.
            </p>
            <Link href="/mes-projets" className="button secondary">
              Voir les projets
            </Link>
          </div>
          <div className={styles.carousel} aria-label="Logos entreprises">
            <div className={styles.carouselTrack}>
              <div className={styles.logoCard}>
                <img src="/img/danone.png" alt="Logo Danone" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/edf.png" alt="Logo EDF" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/parker-hannifin.png" alt="Logo Parker Hannifin" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/ics.png" alt="Logo ICS Productions" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/danone.png" alt="Logo Danone" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/edf.png" alt="Logo EDF" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/parker-hannifin.png" alt="Logo Parker Hannifin" />
              </div>
              <div className={styles.logoCard}>
                <img src="/img/ics.png" alt="Logo ICS Productions" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={`container ${styles.darkGrid}`}>
          <div className={styles.darkIntro}>
            <p className="eyebrow">Engagement</p>
            <h2>Un consultant qui parle technique et métier</h2>
            <p>
              Mes missions sont cadrées autour d&apos;objectifs clairs : réduction des
              délais, fiabilité des données et meilleure collaboration. Chaque
              livraison est accompagnée d&apos;un plan d&apos;usage et de documentation.
            </p>
          </div>
            <div className={styles.metrics}>
              <div>
                <p className={styles.metricValue}>Jusqu&apos;à 50%</p>
                <p className={styles.metricLabel}>
                  Gain de temps selon les processus automatisés
                </p>
              </div>
              <div>
                <p className={styles.metricValue}>Automatisation</p>
                <p className={styles.metricLabel}>
                  L&apos;application travaille pendant que l&apos;équipe se concentre
                </p>
              </div>
              <div>
                <p className={styles.metricValue}>Fiabilisation</p>
                <p className={styles.metricLabel}>
                  Validations plus solides et suivi plus clair
                </p>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.sectionGrid}`}>
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Approche</p>
            <h2>Une approche pragmatique adaptée aux enjeux réels des entreprises</h2>
            <p>
              Chaque projet Power Platform commence par une compréhension claire
              du besoin métier. L&apos;objectif n&apos;est pas d&apos;automatiser pour
              automatiser, mais de simplifier les processus, fiabiliser les
              validations et livrer des solutions réellement utilisées par les
              équipes.
            </p>
          </div>
          <div className={styles.steps}>
            <div className="card">
              <h3>1. Compréhension du contexte métier</h3>
              <p>
                Analyse des processus existants, des contraintes terrain et des
                usages réels afin d&apos;identifier les leviers d&apos;amélioration les
                plus pertinents.
              </p>
            </div>
            <div className="card">
              <h3>2. Conception de la solution Power Platform</h3>
              <p>
                Définition d&apos;une solution adaptée à l&apos;écosystème Microsoft 365,
                avec un focus sur la clarté, la maintenabilité et l&apos;expérience
                utilisateur.
              </p>
            </div>
            <div className="card">
              <h3>3. Mise en oeuvre et accompagnement</h3>
              <p>
                Déploiement progressif de la solution, tests, documentation et
                accompagnement des équipes pour garantir une adoption durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaCard}`}>
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Parlons de votre projet Power Platform</h2>
            <p>
              Besoin d&apos;une solution Power Apps ou Power
              Automate ? Je réponds sous 48h avec une proposition d&apos;approche.
            </p>
          </div>
          <Link href="/contact" className="button">
            Planifier un échange
          </Link>
        </div>
      </section>
    </main>
  );
}
