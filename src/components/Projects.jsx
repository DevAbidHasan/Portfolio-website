import { useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site — work, skills, certs, contact.",
    image: "https://i.postimg.cc/8zyWJm4T/image.png",
    live: "https://plabon.netlify.app/",
    clientRepo: "https://github.com/DevAbidHasan/Portfolio-website",
    stack: ["React", "Tailwind", "Vite"],
    category: "Frontend",
  },
  {
    title: "Dailypress Portal",
    description: "Article platform with auth, submissions, and admin panel.",
    image: "https://i.postimg.cc/Gm3Lvm23/Good-Morning-(Facebook-Post).png",
    live: "https://dailypress-bf298.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-server",
    stack: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
  },
  {
    title: "Booknest",
    description: "Library management with borrowing history for users.",
    image: "https://i.ibb.co.com/vCD0RpN1/image.png",
    live: "https://book-nest-75887.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-server",
    stack: ["React", "Express", "MongoDB"],
    category: "Full Stack",
  },
  {
    title: "Plantpal",
    description: "Plant care tracker with schedules and health notes.",
    image: "https://i.postimg.cc/KjC1m0DX/image.png",
    live: "https://plantpal-plant-care-tracking.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-server",
    stack: ["React", "Node.js", "Firebase"],
    category: "Full Stack",
  },
];

const categories = ["All", "Frontend", "Full Stack"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="section-block surface-muted projects-section">
      <div className="page-container">
        <div className="projects-layout">
          <Reveal className="projects-intro lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{04}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Projects
            </p>
            <h2 className="section-title">Work I&apos;ve shipped recently</h2>
            <p className="mt-4 text-body">
              Real apps with auth, APIs, admin panels, and production deployments.
            </p>
            <a
              href="https://github.com/DevAbidHasan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-8 text-xs font-medium transition-colors hover:text-accent"
              style={{ color: "var(--text-secondary)" }}
            >
              View all on GitHub <FiArrowUpRight size={14} />
            </a>
          </Reveal>

          <div className="projects-main">
            <div className="projects-filter-bar lg:sticky lg:top-28">
              <div className="project-filter" role="tablist" aria-label="Project categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active === cat}
                    onClick={() => setActive(cat)}
                    className={`project-filter-btn${active === cat ? " is-active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="project-list" role="tabpanel">
              {filtered.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.title}
                  className="project-row group"
                  delay={i * 100}
                >
                  <span className="project-row-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="project-row-body">
                    <div className="project-row-head">
                      <h3 className="project-row-title">{p.title}</h3>
                      <span className="project-type-badge">{p.category}</span>
                    </div>
                    <p className="project-row-desc">{p.description}</p>
                    <div className="project-row-stack">
                      {p.stack.map((t) => (
                        <span key={t} className="project-stack-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="project-row-links">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row-link project-row-link--live"
                      >
                        Live <FiArrowUpRight size={14} />
                      </a>
                      <a
                        href={p.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row-link"
                      >
                        <FiGithub size={14} /> Code
                      </a>
                      {p.serverRepo && (
                        <a
                          href={p.serverRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-row-link"
                        >
                          <FiGithub size={14} /> API
                        </a>
                      )}
                    </div>
                  </div>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row-thumb"
                    aria-label={`Preview ${p.title}`}
                  >
                    <img
                      src={`${p.image}?auto=format&fit=crop&w=480&q=80`}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
