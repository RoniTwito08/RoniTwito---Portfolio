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
          <a className={styles.navLink} href="#about">About</a>
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

            <div className={styles.ctaRow}>
              <a className={styles.cta} href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer">
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
              <a className={styles.cta} href="#contact">
                Contact
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

        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.aboutText}>
                <p>
                  I'm a Full-Stack Developer passionate about building innovative solutions that combine AI, real-time systems, and user-focused design. With expertise in React, TypeScript, Node.js, and cloud technologies, I've crafted multiple production-grade applications from concept to deployment.
                </p>
                <p>
                  Currently pursuing my M.Sc. in Computer Science (starting March 2026), I blend academic rigor with practical engineering experience. I thrive in collaborative environments and love solving complex problems through clean, scalable code.
                </p>
                <p>
                  I've taken my entrepreneurial ambitions to new heights—literally! I pitched my AI SaaS project <strong>Smarketing</strong> on a Shark Tank-style investment show, seeking funding to scale the platform and bring automated landing page generation with AI-powered Google Ads campaigns to market. This experience reinforced my commitment to building products that solve real business problems and create measurable impact.
                </p>
              </div>
              
              <div className={styles.skillsGrid}>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>Frontend</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>React</span>
                    <span className={styles.tag}>TypeScript</span>
                    <span className={styles.tag}>CSS3</span>
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
                    <span className={styles.tag}>Automation</span>
                  </div>
                </div>
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

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactContainer}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.contactSubtitle}>
              Have a question or want to collaborate? I'd love to hear from you!
            </p>

            <div className={styles.contactGrid}>
              <a href="mailto:ronitwito08@gmail.com" className={styles.contactCard}>
                <div className={styles.contactIcon}>📧</div>
                <h3 className={styles.contactTitle}>Email</h3>
                <p className={styles.contactValue}>ronitwito08@gmail.com</p>
              </a>

              <a href="https://www.linkedin.com/in/roni-twito-990349255/" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <div className={styles.contactIcon}>💼</div>
                <h3 className={styles.contactTitle}>LinkedIn</h3>
                <p className={styles.contactValue}>Let's connect</p>
              </a>

              <a href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <div className={styles.contactIcon}>💻</div>
                <h3 className={styles.contactTitle}>GitHub</h3>
                <p className={styles.contactValue}>Check my projects</p>
              </a>
            </div>
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
