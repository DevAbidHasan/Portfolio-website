import { useMemo, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Dailypress Portal",
    description: "Article platform with auth, submissions, and an admin panel — my only production build so far.",
    image: "https://i.postimg.cc/Gm3Lvm23/Good-Morning-(Facebook-Post).png",
    live: "https://dailypress-bf298.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-server",
    stack: ["React", "Node.js", "MongoDB"],
    categories: ["Web"],
  },
  {
    title: "Portfolio Website",
    description: "This site — built to showcase my work, skills, and contact info while job hunting.",
    image: "https://i.postimg.cc/8zyWJm4T/image.png",
    live: "https://plabon.netlify.app/",
    clientRepo: "https://github.com/DevAbidHasan/Portfolio-website",
    stack: ["React", "Tailwind", "Vite"],
    categories: ["Web"],
  },
  {
    title: "Booknest",
    description: "Practice project — library management with borrowing history, built to sharpen full-stack skills.",
    image: "https://i.ibb.co.com/vCD0RpN1/image.png",
    live: "https://book-nest-75887.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-server",
    stack: ["React", "Express", "MongoDB"],
    categories: ["Web"],
  },
  {
    title: "Plantpal",
    description: "Practice project — plant care tracker with schedules and notes, built for learning and demos.",
    image: "https://i.postimg.cc/KjC1m0DX/image.png",
    live: "https://plantpal-plant-care-tracking.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-server",
    stack: ["React", "Node.js", "Firebase"],
    categories: ["Web"],
  },
];

const filterCategories = ["All", "Web", "AI/ML", "Data", "Others"];

const categoryClass = {
  Web: "project-category-badge--web",
  "AI/ML": "project-category-badge--ai",
  Data: "project-category-badge--data",
  Others: "project-category-badge--others",
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section-block surface-muted projects-section">
      <div className="page-container">
        <div className="projects-layout">
          <Reveal className="projects-intro lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{05}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Projects
            </p>
            <h2 className="section-title">What I&apos;ve built so far</h2>
            <p className="mt-4 text-body">
              Everything here so far is web — full-stack apps and this portfolio. I&apos;m growing
              into AI/ML, data, and other areas over time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/DevAbidHasan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-secondary"
              >
                View all on GitHub
                <span className="btn-pill-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </a>
            </div>
          </Reveal>

          <div className="projects-main">
            <div className="projects-filter-bar">
              <div className="project-filter" role="tablist" aria-label="Project categories">
                {filterCategories.map((cat) => (
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

            <div className="project-list" role="tabpanel" aria-label={`${active} projects`}>
              {filtered.length === 0 ? (
                <Reveal className="project-empty" animation="fade-up">
                  <p className="project-empty-title">No {active} projects yet</p>
                  <p className="project-empty-desc">
                    Nothing in this category for now — pick another filter or check back later.
                  </p>
                </Reveal>
              ) : (
                filtered.map((p, i) => (
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
                        <div className="project-row-tags">
                          {p.categories.map((cat) => (
                            <span
                              key={`${p.title}-${cat}`}
                              className={`project-category-badge ${categoryClass[cat] ?? "project-category-badge--others"}`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
