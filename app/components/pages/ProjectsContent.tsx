import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getRoute } from "@/app/i18n/routes";
import { getProjects } from "@/data/projects";
import styles from "@/app/mes-projets/mes-projets.module.css";

export default function ProjectsContent({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const projects = getProjects(locale);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>{content.projects.heroTitle}</h1>
          <p className={styles.heroKicker}>
            {content.projects.heroKicker.prefix}
            <span className={styles.emph}>{content.projects.heroKicker.emph}</span>
            {content.projects.heroKicker.suffix}
          </p>
        </div>
      </section>

      <section className={styles.projectList}>
        <div className="container">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              labels={content.projectCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaCard}`}>
          <div>
            <p className="eyebrow">{content.projects.cta.eyebrow}</p>
            <h2>{content.projects.cta.title}</h2>
            <p>{content.projects.cta.lead}</p>
          </div>
          <Link href={getRoute("contact", locale)} className="button">
            {content.projects.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
