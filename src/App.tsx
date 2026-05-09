import { useState, useEffect } from "react";
import styles from "./App.module.css";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>RT</div>
          <div className={styles.brandText}>
            <h1 className={styles.h1}>Roni Twito</h1>
            <p className={styles.subtitle}>
              Full-Stack Developer · B.Sc. Computer Science
            </p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a className={styles.navLink} href="#about">
            About
          </a>
          <a className={styles.navLink} href="#projects">
            Projects
          </a>
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.roleTag}>Full-Stack · Backend · AI</div>
            <h2 className={styles.h2}>
              I build AI-powered web apps, real-time platforms, and scalable
              full-stack solutions.
            </h2>
            <p className={styles.p}>
              Computer Science student with hands-on experience shipping
              production projects across AI integration, real-time systems, and
              full-stack web development.
            </p>

            <div className={styles.ctaRow}>
              <a
                className={styles.ctaPrimary}
                href="/Roni_TwitoCV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
              <a
                className={styles.cta}
                href="https://github.com/RoniTwito08"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className={styles.cta}
                href="https://www.linkedin.com/in/roni-twito-990349255/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className={styles.cta} href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>5</span>
                <span className={styles.statLabel}>Full-stack projects</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>AI</span>
                <span className={styles.statLabel}>
                  Integrated in 3 projects
                </span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>Live</span>
                <span className={styles.statLabel}>Deployed on production</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.aboutText}>
                <p>
                  Computer Science graduate with hands-on experience in
                  full-stack development through academic and independent
                  projects. Skilled in React, TypeScript, Node.js, Express,
                  MongoDB, and REST APIs. Built end-to-end web applications
                  including authentication, role-based access, and real-time
                  features.{" "}
                </p>
                <p>
                  I pitched my AI SaaS project, <strong>Smarketing</strong>, on
                  a Shark Tank investment show — an experience that
                  sharpened my ability to communicate technical value and build
                  products with measurable real-world impact. I'm actively
                  seeking junior software engineering and full-stack roles where
                  I can grow within a strong engineering team.
                </p>
              </div>

              <div className={styles.skillsGrid}>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Languages</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Python</span>
                    <span className={styles.tag}>Java</span>
                    <span className={styles.tag}>C++</span>
                    <span className={styles.tag}>TypeScript</span>
                    <span className={styles.tag}>JavaScript</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Frontend</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>React</span>
                    <span className={styles.tag}>TypeScript</span>
                    <span className={styles.tag}>CSS Modules</span>
                    <span className={styles.tag}>Responsive Design</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Backend</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Node.js</span>
                    <span className={styles.tag}>Express</span>
                    <span className={styles.tag}>MongoDB</span>
                    <span className={styles.tag}>REST APIs</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Real-time & AI</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Socket.IO</span>
                    <span className={styles.tag}>AI Integration</span>
                    <span className={styles.tag}>Google Ads API</span>
                    <span className={styles.tag}>Gemini API</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Tools & Platforms</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Git</span>
                    <span className={styles.tag}>Vite</span>
                    <span className={styles.tag}>JWT</span>
                    <span className={styles.tag}>Google OAuth</span>
                    <span className={styles.tag}>Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.sectionDesc}>
              Full-stack projects built with modern web technologies, AI
              integration, and real-world use cases.
            </p>
          </div>

          <div className={styles.grid}>
            {projects
              .slice()
              .sort(
                (a, b) =>
                  Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
              )
              .map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactContainer}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.contactSubtitle}>
              Open to junior software engineering and full-stack opportunities.
              Feel free to reach out!
            </p>

            <div className={styles.contactGrid}>
              <a
                href="mailto:ronitwito08@gmail.com"
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>📧</div>
                <h3 className={styles.contactTitle}>Email</h3>
                <p className={styles.contactValue}>ronitwito08@gmail.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/roni-twito-990349255/"
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>💼</div>
                <h3 className={styles.contactTitle}>LinkedIn</h3>
                <p className={styles.contactValue}>Let's connect</p>
              </a>

              <a
                href="https://github.com/RoniTwito08"
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>💻</div>
                <h3 className={styles.contactTitle}>GitHub</h3>
                <p className={styles.contactValue}>View my repositories</p>
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>
            © {new Date().getFullYear()} Roni Twito · Software Engineer
          </span>
        </footer>
      </main>

      <button
        className={`${styles.scrollToTop} ${showScrollTop ? styles.scrollToTopVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
