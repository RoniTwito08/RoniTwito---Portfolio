import styles from "./ProjectCard.module.css";
import ImageCarousel from "./ImageCarousel";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ""}`}>
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.featured && <span className={styles.badge}>Featured</span>}
        </div>
        <p className={styles.tagline}>{project.tagline}</p>
      </div>

      <div className={styles.media}>
        {project.images && project.images.length > 0 ? (
          <ImageCarousel images={project.images} title={project.title} />
        ) : project.imageUrl ? (
          <img className={styles.image} src={project.imageUrl} alt={project.title} />
        ) : (
          <div className={styles.placeholder}>Add screenshot</div>
        )}
      </div>

      <p className={styles.desc}>{project.description}</p>

      <ul className={styles.tech}>
        {project.tech.map((t) => (
          <li key={t} className={styles.techPill}>
            {t}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        {project.githubUrl && (
          <a className={styles.linkBtn} href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a className={styles.primaryBtn} href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
