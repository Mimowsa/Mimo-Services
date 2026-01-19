import styles from "@/app/components/ProjectCard.module.css";
import type { Project } from "@/data/projects";

type ProjectLabels = {
  context: string;
  solution: string;
  results: string;
  more: string;
};

export default function ProjectCard({
  project,
  labels,
  onOpen
}: {
  project: Project;
  labels: ProjectLabels;
  onOpen: () => void;
}) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.header}>
        <p className="eyebrow">{project.sector}</p>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <div className={styles.tags}>
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      <button
        type="button"
        className={styles.openButton}
        onClick={onOpen}
        aria-label={labels.more}
      >
        <span>{labels.more}</span>
        <span className={styles.icon} aria-hidden />
      </button>
    </article>
  );
}
