import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "@/app/mes-projets/mes-projets.module.css";

export const metadata: Metadata = {
  title: "Mes projets Power Platform",
  description:
    "Portfolio Power Platform: missions Power Apps, Power Automate et automatisation Microsoft 365 pour grands groupes.",
  openGraph: {
    title: "Mes projets Power Platform",
    description:
      "Missions Power Platform en entreprise, automatisation Microsoft 365 et valeur métier.",
    images: ["/og-power-platform-paris.svg"]
  }
};

export default function ProjectsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Mes projets</h1>
          <p className={styles.heroKicker}>
            Jusqu&apos;à <span className={styles.emph}>50 %</span> de temps gagné
            grâce à la Power Platform
          </p>
        </div>
      </section>

      <section className={styles.projectList}>
        <div className="container">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaCard}`}>
          <div>
            <p className="eyebrow">Votre contexte</p>
            <h2>Besoin d&apos;une automatisation Microsoft 365 ?</h2>
            <p>
              Parlons de vos workflows internes: Power Apps pour les interfaces,
              Power Automate pour les validations, et des intégrations Microsoft
              365 adaptées à votre contexte.
            </p>
          </div>
          <Link href="/contact" className="button">
            Discuter de mon projet
          </Link>
        </div>
      </section>
    </main>
  );
}
