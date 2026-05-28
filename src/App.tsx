import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./App.module.css";
import ProjectCard from "./components/ProjectCard";
import IntroScreen from "./components/IntroScreen";
import { projects } from "./data/projects";
import { useScrollReveal } from "./hooks/useScrollReveal";

const exploringItems = [
  {
    icon: "🧠",
    title: "LLM APIs & RAG Pipelines",
    desc: "Building AI-first features with OpenAI, Claude & Gemini; retrieval-augmented generation systems",
  },
  {
    icon: "🎓",
    title: "M.Sc. — AI & Machine Learning",
    desc: "Deep learning, neural networks, and optimization algorithms at graduate research level",
  },
  {
    icon: "🐳",
    title: "Docker & Cloud Infrastructure",
    desc: "Containerizing full-stack apps, CI/CD pipelines, and scalable production deployments",
  },
  {
    icon: "📱",
    title: "Advanced React Native & Expo",
    desc: "Expo Router, complex animations, and polished cross-platform mobile experiences",
  },
];

function getInitialIntroState(): boolean {
  try {
    return !sessionStorage.getItem("portfolio_entered");
  } catch {
    return false;
  }
}

export default function App() {
  /* ── Intro state ── */
  const isFirstVisit = useRef(getInitialIntroState());
  const [showIntro, setShowIntro] = useState(isFirstVisit.current);
  const [portfolioVisible, setPortfolioVisible] = useState(!isFirstVisit.current);
  const autoEnterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipDelay = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1200
      : 3500
  ).current;

  /* ── Scroll-to-top button ── */
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* ── Scroll reveal refs ── */
  const aboutReveal = useScrollReveal();
  const exploringReveal = useScrollReveal();
  const projectsReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  /* ── Lock scroll during intro ── */
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  /* ── Scroll-to-top listener ── */
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Auto-enter after animations complete ── */
  useEffect(() => {
    if (!isFirstVisit.current) return;
    autoEnterTimerRef.current = setTimeout(() => {
      try { sessionStorage.setItem("portfolio_entered", "1"); } catch {}
      setShowIntro(false);
      setTimeout(() => setPortfolioVisible(true), 180);
    }, skipDelay);
    return () => {
      if (autoEnterTimerRef.current) clearTimeout(autoEnterTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Intro overlay ── */}
      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" skipDelay={skipDelay} />}
      </AnimatePresence>

      {/* ── Main portfolio ── */}
      <motion.div
        className={styles.page}
        initial={isFirstVisit.current ? { opacity: 0 } : false}
        animate={{ opacity: portfolioVisible ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.logo}>RT</div>
            <div className={styles.brandText}>
              <h1 className={styles.h1}>Roni Twito</h1>
              <p className={styles.subtitle}>
                M.Sc. Computer Science · AI Specialization
              </p>
            </div>
          </div>

          <nav className={styles.nav}>
            <a className={styles.navLink} href="#about">About</a>
            <a className={styles.navLink} href="#projects">Projects</a>
            <a className={styles.navLink} href="#contact">Contact</a>
          </nav>
        </header>

        <main className={styles.main}>
          {/* ── Hero ── */}
          <section className={styles.hero}>
            <div className={styles.heroLeft}>
              <div className={styles.availabilityBadge}>
                <span className={styles.availabilityDot} />
                Open to opportunities
              </div>

              <div className={styles.roleTag}>Full-Stack · AI Engineering · Mobile</div>

              <h2 className={styles.h2}>
                I engineer AI-powered applications{" "}
                <span className={styles.h2Highlight}>across the full stack.</span>
              </h2>

              <p className={styles.p}>
                M.Sc. Computer Science student (AI specialization) with hands-on
                experience shipping production applications — full-stack web,
                React Native mobile, and AI-integrated systems.
              </p>

              <div className={styles.ctaRow}>
                <a
                  className={styles.ctaPrimary}
                  href="/Roni_TwitoCV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  View CV
                </a>
                <div className={styles.ctaSecondary}>
                  <a className={styles.cta} href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a className={styles.cta} href="https://www.linkedin.com/in/roni-twito-990349255/" target="_blank" rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a className={styles.cta} href="#contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroCard}>
                <div className={styles.heroStat}>
                  <span className={styles.statNum}>TV</span>
                  <span className={styles.statLabel}>Shark Tank-style national pitch</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statNum}>M.Sc.</span>
                  <span className={styles.statLabel}>CS · AI Specialization</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statNum}>6+</span>
                  <span className={styles.statLabel}>Full-stack apps shipped</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── About ── */}
          <section
            ref={aboutReveal.ref}
            className={`${styles.aboutSection} ${styles.sectionReveal} ${aboutReveal.visible ? styles.revealed : ""}`}
            id="about"
          >
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.aboutText}>
                  <p>
                    M.Sc. Computer Science student specializing in AI, with hands-on experience in
                    full-stack development across production and independent projects. Skilled in React,
                    TypeScript, Node.js, Express, MongoDB, and REST APIs — building end-to-end
                    applications with authentication, real-time features, and AI integrations.
                  </p>
                  <p>
                    I pitched my AI SaaS project, <strong>Smarketing</strong>, on a Shark Tank-style
                    national investment show — an experience that sharpened my ability to communicate
                    technical value and build products with measurable real-world impact. I'm actively
                    seeking junior software engineering and full-stack roles where I can grow within a
                    strong engineering team.
                  </p>
                </div>

                <div className={styles.skillsGrid}>
                  <div className={styles.skillGroup}>
                    <h3 className={styles.skillTitle}>Languages</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.tag}>TypeScript</span>
                      <span className={styles.tag}>JavaScript</span>
                      <span className={styles.tag}>Python</span>
                      <span className={styles.tag}>Java</span>
                      <span className={styles.tag}>C++</span>
                    </div>
                  </div>
                  <div className={styles.skillGroup}>
                    <h3 className={styles.skillTitle}>Frontend & Mobile</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.tag}>React</span>
                      <span className={styles.tag}>React Native</span>
                      <span className={styles.tag}>Expo</span>
                      <span className={styles.tag}>CSS Modules</span>
                      <span className={styles.tag}>Responsive Design</span>
                    </div>
                  </div>
                  <div className={styles.skillGroup}>
                    <h3 className={styles.skillTitle}>Backend & Databases</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.tag}>Node.js</span>
                      <span className={styles.tag}>Express</span>
                      <span className={styles.tag}>MongoDB</span>
                      <span className={styles.tag}>PostgreSQL</span>
                      <span className={styles.tag}>Supabase</span>
                      <span className={styles.tag}>REST APIs</span>
                    </div>
                  </div>
                  <div className={styles.skillGroup}>
                    <h3 className={styles.skillTitle}>AI & Real-time</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.tag}>LLM APIs</span>
                      <span className={styles.tag}>RAG Pipelines</span>
                      <span className={styles.tag}>Socket.IO</span>
                      <span className={styles.tag}>Gemini API</span>
                      <span className={styles.tag}>Google Ads API</span>
                    </div>
                  </div>
                  <div className={styles.skillGroup}>
                    <h3 className={styles.skillTitle}>Tools & Platforms</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.tag}>Docker</span>
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

          {/* ── Currently Exploring ── */}
          <section
            ref={exploringReveal.ref}
            className={`${styles.exploringSection} ${styles.sectionReveal} ${exploringReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Currently Exploring</h2>
              <p className={styles.sectionDesc}>
                Actively expanding expertise at the frontier of AI engineering and modern infrastructure
              </p>
            </div>
            <div className={styles.exploringGrid}>
              {exploringItems.map((item) => (
                <div key={item.title} className={styles.exploringCard}>
                  <div className={styles.exploringIconWrapper}>{item.icon}</div>
                  <div className={styles.exploringContent}>
                    <h4 className={styles.exploringTitle}>{item.title}</h4>
                    <p className={styles.exploringDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section
            ref={projectsReveal.ref}
            className={`${styles.section} ${styles.sectionReveal} ${projectsReveal.visible ? styles.revealed : ""}`}
            id="projects"
          >
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              <p className={styles.sectionDesc}>
                Full-stack projects with AI integration, real-time systems, and real-world use cases —
                built and shipped to production.
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

          {/* ── Contact ── */}
          <section
            ref={contactReveal.ref}
            className={`${styles.contactSection} ${styles.sectionReveal} ${contactReveal.visible ? styles.revealed : ""}`}
            id="contact"
          >
            <div className={styles.contactContainer}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.contactSubtitle}>
                Open to junior software engineering and full-stack opportunities.
                Let's build something great together.
              </p>

              <div className={styles.contactGrid}>
                <a href="mailto:ronitwito08@gmail.com" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h3 className={styles.contactTitle}>Email</h3>
                  <p className={styles.contactValue}>ronitwito08@gmail.com</p>
                </a>

                <a href="https://www.linkedin.com/in/roni-twito-990349255/" target="_blank" rel="noreferrer" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className={styles.contactTitle}>LinkedIn</h3>
                  <p className={styles.contactValue}>Let's connect</p>
                </a>

                <a href="https://github.com/RoniTwito08" target="_blank" rel="noreferrer" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <h3 className={styles.contactTitle}>GitHub</h3>
                  <p className={styles.contactValue}>View my repositories</p>
                </a>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <span>
              © {new Date().getFullYear()} Roni Twito · Full-Stack Engineer & AI Builder
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
      </motion.div>
    </>
  );
}
