import styles from "./App.module.css";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>RT</div>
          <div className={styles.brandText}>
            <h1 className={styles.h1}>Roni Twito</h1>
            <p className={styles.subtitle}>Full-Stack Developer | M.Sc. CS (starting Mar 2026)</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a className={styles.navLink} href="#projects">Projects</a>
          <a className={styles.navLink} href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2 className={styles.h2}>
              I build products end-to-end — AI SaaS, social apps, and real-time systems.
            </h2>
            <p className={styles.p}>
              Portfolio of selected projects with demos, source code, and key features.
            </p>

            <div className={styles.ctaRow} id="contact">
              <a className={styles.ctaPrimary} href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.cta} href="https://www.linkedin.com/in/roni-twito-990349255/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a
                className={styles.cta}
                href="/Roni_TwitoCV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
              <a className={styles.cta} href="mailto:ronitwito08@gmail.com">
                Email
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Highlighted projects</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>AI</span>
                <span className={styles.statLabel}>SaaS automation focus</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>RT</span>
                <span className={styles.statLabel}>Real-time collaboration</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Projects</h2>
          </div>

          <div className={styles.grid}>
            {projects
              .slice()
              .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
              .map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Roni Twito</span>
          <span className={styles.footerRight}>
            <a className={styles.footerLink} href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={styles.footerLink} href="https://www.linkedin.com/in/roni-twito-990349255/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
}
