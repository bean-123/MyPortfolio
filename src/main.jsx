import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Shield,
  Code2,
  Network,
  GraduationCap,
  Award,
  ExternalLink,
  Terminal,
  Layers3,
  LockKeyhole,
} from "lucide-react";
import { projects, skillGroups, links } from "./data/content";
import ProjectVisual from "./components/ProjectVisual";
import "./styles.css";

const icons = [Shield, Code2, Network];
function App() {
  const [menuOpen, setMenuOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const close = () => setMenuOpen(false);
  return (
    <>
      <header className={"header" + (scrolled ? " scrolled" : "")}>
        <a
          className="logo"
          href="#home"
          onClick={close}
          aria-label="Amy Platt, back to top"
        >
          AP<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={"nav" + (menuOpen ? " open" : "")}
          aria-label="Main navigation"
        >
          <a onClick={close} href="#home">
            HOME
          </a>
          <a onClick={close} href="#work">
            WORK
          </a>
          <a onClick={close} href="#about">
            ABOUT
          </a>
          <a onClick={close} href="#journey">
            EDUCATION
          </a>
          <a onClick={close} href="#contact">
            CONTACT
          </a>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-shimmer" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">
              AMY PLATT <span>/ SOFTWARE & SECURITY</span>
            </p>
            <h1>
              Software <span className="title-rule" />
              <br />
              <span className="tilde">~</span> Developer
              <span className="accent">.</span>
            </h1>
            <p className="hero-description">
              Full-stack software developer with real-world internship
              experience, building toward a career in cybersecurity. I develop
              applications, explore Linux and networking, and care about how
              systems work—and how to secure them.
            </p>
            <p className="hero-meta">
              Based in Helsinki, Finland <span>·</span> Open to junior software
              development & cybersecurity opportunities
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a className="button button-outline" href={links.email}>
                <Mail size={16} /> Contact me
              </a>
            </div>
          </div>
          <a className="scroll-hint" href="#work">
            SCROLL TO EXPLORE <ArrowDown size={16} />
          </a>
        </section>
        <section className="section work" id="work">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-index">01 / SELECTED WORK</span>
              <h2>
                Things I've built<span className="accent">.</span>
              </h2>
              <p>
                Practical work spanning full-stack development and systems
                security.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => {
                const Icon = [Layers3, Code2, Terminal][i];
                return (
                  <article className="project-card reveal" key={p.title}>
                    <div className="project-kicker">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {p.type}
                      </span>
                      <Icon size={19} aria-hidden="true" />
                    </div>
                    <ProjectVisual kind={p.visual} title={p.title} />
                    <h3>{p.title}</h3>
                    <dl className="project-facts">
                      <div>
                        <dt>Problem</dt>
                        <dd>{p.problem}</dd>
                      </div>
                      <div>
                        <dt>What I built</dt>
                        <dd>{p.built}</dd>
                      </div>
                      <div>
                        <dt>My role</dt>
                        <dd>{p.role}</dd>
                      </div>
                      <div>
                        <dt>Outcome</dt>
                        <dd>{p.outcome}</dd>
                      </div>
                    </dl>
                    <div className="tags" aria-label="Technology stack">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.url ? (
                      <a
                        className="project-link"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.action} <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="project-link muted">
                        Practical learning & labs
                      </span>
                    )}
                  </article>
                );
              })}
            </div>
            <div className="more-work">
              <span>
                These are selected highlights, not my full project history.
              </span>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                More projects on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="visual-note">
              Project previews are conceptual illustrations, not application
              screenshots.
            </p>
          </div>
        </section>
        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <span className="section-index">02 / ABOUT ME</span>
              <h2>
                Hello there,
                <br />
                I'm Amy<span className="accent">.</span>
              </h2>
              <p>
                During my software development internship, I built Ellarion
                Tales, a full-stack event platform with user accounts,
                multi-step registration, administrative content management and
                payment-related workflows. Working across frontend, database and
                integrations taught me how many details have to fit together to
                make a real product work.
              </p>
              <p>
                I'm now studying Software Engineering online at Metropolia,
                including C++, Linux and information security. Alongside
                development, I've been practising Red Hat system administration,
                network troubleshooting and cybersecurity labs. I want to bring
                both perspectives—building software and understanding its
                security—to my next role.
              </p>
              <div className="about-quote">
                Curious about how systems work. Motivated to make them better
                and safer.
              </div>
            </div>
            <div className="toolbox reveal">
              <span className="section-index">SKILLS & TOOLBOX</span>
              <div className="skill-groups">
                {skillGroups.map((g, i) => {
                  const Icon = icons[i];
                  return (
                    <article className="skill-group" key={g.title}>
                      <div className="skill-title">
                        <Icon size={20} strokeWidth={1.5} />
                        <h3>{g.title}</h3>
                      </div>
                      <div className="tags">
                        {g.items.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="toolbox-note">
                Tools listed reflect practical use, coursework or foundational
                exposure—not equal proficiency in every technology.
              </p>
            </div>
          </div>
        </section>
        <section className="section journey" id="journey">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-index">
                03 / EDUCATION & CREDENTIALS
              </span>
              <h2>
                Always learning<span className="accent">.</span>
              </h2>
              <p>
                Formal education, practical coursework and industry training.
              </p>
            </div>
            <div className="credential-grid">
              <article className="credential reveal">
                <GraduationCap size={23} />
                <span className="credential-label">CURRENT · 2026–</span>
                <h3>Software Engineering</h3>
                <p>Metropolia University of Applied Sciences</p>
                <small>
                  Online bachelor's degree studies · C++, Unix/Linux and
                  information security coursework.
                </small>
              </article>
              <article className="credential reveal">
                <GraduationCap size={23} />
                <span className="credential-label">GRADUATED · 2026</span>
                <h3>Software Development</h3>
                <p>Business College Helsinki</p>
                <small>
                  Vocational software development qualification covering
                  applications, programming and databases.
                </small>
              </article>
              <article className="credential certificate reveal">
                <Award size={23} />
                <span className="credential-label">
                  RED HAT ACADEMY · OCT 6, 2026
                </span>
                <h3>Red Hat System Administration I</h3>
                <p>RH124 · RHEL 9.3 · 40 credit hours</p>
                <small>
                  Course attendance covering Linux command-line administration,
                  users, permissions, SSH, services and networking.
                </small>
                <div className="certificate-actions">
                  <span>Certificate of Attendance</span>
                  <a
                    href="https://www.credly.com/badges/f7ab9ded-6a55-4aec-bef1-cd340c166f77/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-index">04 / GET IN TOUCH</span>
              <h2>
                Let's connect<span className="accent">.</span>
              </h2>
              <p>
                Based in Helsinki · Open to junior developer and entry-level
                cybersecurity opportunities.
              </p>
            </div>
            <div className="contact-links reveal">
              <a href={links.email}>
                <Mail size={22} />
                <span>
                  Email me<small>amy.platt@hotmail.com</small>
                </span>
                <ArrowUpRight size={17} />
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github size={22} />
                <span>
                  GitHub<small>bean-123</small>
                </span>
                <ArrowUpRight size={17} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} />
                <span>
                  LinkedIn<small>Professional profile</small>
                </span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Amy Platt · Built with React</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
