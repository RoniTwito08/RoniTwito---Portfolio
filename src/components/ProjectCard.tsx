import styles from "./ProjectCard.module.css";
import ImageCarousel from "./ImageCarousel";
import MobileCarousel from "./MobileCarousel";
import type { Project } from "../data/projects";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const hasMobile = Boolean(project.mobileImages?.length);

  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ""}`}>
      {project.featured && <div className={styles.accent} />}

      {/* ── Left panel: image / carousel ── */}
      <div className={styles.cardLeft}>
        <div className={styles.leftOrb} />
        {hasMobile ? (
          <MobileCarousel images={project.mobileImages!} title={project.title} />
        ) : project.images?.length ? (
          <ImageCarousel images={project.images} title={project.title} />
        ) : project.imageUrl ? (
          <img className={styles.singleImage} src={project.imageUrl} alt={project.title} />
        ) : null}
      </div>

      {/* ── Right panel: content ── */}
      <div className={styles.cardRight}>

        {/* Badges */}
        <div className={styles.badgeRow}>
          {project.featured && <span className={styles.badgeFeatured}>Featured</span>}
          {hasMobile       && <span className={styles.badgeMobile}>Mobile App</span>}
          {project.tags?.map((tag) => (
            <span key={tag} className={styles.badgeTag}>{tag}</span>
          ))}
        </div>

        {/* Title block */}
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.subtitle && (
            <p className={styles.subtitle}>{project.subtitle}</p>
          )}
          <p className={styles.tagline}>{project.tagline}</p>
        </div>

        {/* Bullets or description */}
        {project.bullets ? (
          <ul className={styles.bulletList}>
            {project.bullets.map((b, i) => (
              <li key={i} className={styles.bulletItem}>
                <span className={styles.bulletDot} aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.desc}>{project.description}</p>
        )}

        {/* Footer: tech + actions */}
        <div className={styles.cardFooter}>
          <ul className={styles.techList}>
            {project.tech.map((t) => (
              <li key={t} className={styles.techPill}>{t}</li>
            ))}
          </ul>

          {(project.githubUrl || project.liveUrl) && (
            <div className={styles.actions}>
              {project.githubUrl && (
                <a
                  className={styles.linkBtn}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  className={styles.primaryBtn}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalIcon />
                  {hasMobile ? "App Preview" : "Live Demo"}
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </article>
  );
}
