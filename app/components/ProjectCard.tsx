import Image from "next/image";
import styles from "@/app/components/ProjectCard.module.css";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.header}>
        <div>
          <p className="eyebrow">{project.company}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.period}>{project.period}</p>
        </div>
        <div className={styles.logoWrap}>
          <Image
            src={project.logo}
            alt={`Logo ${project.company}`}
            width={160}
            height={80}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h4 className={styles.label}>Contexte client</h4>
          {project.context.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h4 className={styles.label}>Solution mise en place</h4>
          {project.solution.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h4 className={styles.label}>Résultats et bénéfices</h4>
          {project.results.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={styles.tags}>
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
