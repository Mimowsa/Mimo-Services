"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import { getRoute } from "@/app/i18n/routes";
import { getProjects, type Project } from "@/data/projects";
import styles from "@/app/mes-projets/mes-projets.module.css";

export default function ProjectsContent({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const projects = getProjects(locale);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

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
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                labels={content.projectCard}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
      {activeProject ? (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <p className="eyebrow">{activeProject.sector}</p>
                <h3>{activeProject.title}</h3>
              </div>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setActiveProject(null)}
                aria-label={content.projects.closeLabel}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalTags}>
              {activeProject.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.modalContent}>
              <div>
                <h4>{content.projectCard.context}</h4>
                {activeProject.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div>
                <h4>{content.projectCard.solution}</h4>
                {activeProject.solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div>
                <h4>{content.projectCard.results}</h4>
                {activeProject.results.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
