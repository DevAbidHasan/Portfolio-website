import { Link, Navigate, useParams } from "react-router";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal";
import {
  categoryClass,
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentProjects(slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug) + 1;

  return (
    <article className="project-detail">
      <div className="page-container project-detail-hero-wrap">
        <Reveal animation="fade-up">
          <Link to="/#projects" className="project-detail-back">
            <FiArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>
        </Reveal>

        <div className="project-detail-hero">
          <Reveal className="project-detail-copy" animation="fade-right">
            <div className="project-detail-meta-row">
              <span className="project-detail-index">
                {String(projectIndex).padStart(2, "0")}
              </span>
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className={`project-category-badge ${categoryClass[cat] ?? "project-category-badge--others"}`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-tagline">{project.tagline}</p>

            <dl className="project-detail-facts">
              {project.meta.map(({ label, value }) => (
                <div key={label} className="project-detail-fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="project-detail-actions">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary"
              >
                View live
                <span className="btn-pill-icon" aria-hidden="true">
                  <FiArrowUpRight size={16} />
                </span>
              </a>
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-secondary"
              >
                <FiGithub size={16} />
                Source
              </a>
              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-secondary"
                >
                  <FiGithub size={16} />
                  API
                </a>
              )}
            </div>
          </Reveal>

          <Reveal className="project-detail-media" animation="fade-left" delay={120}>
            <div className="project-detail-image">
              <img
                src={`${project.image}?auto=format&fit=crop&w=1200&q=85`}
                alt={`${project.title} preview`}
                width={1200}
                height={750}
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="project-detail-body surface-muted">
        <div className="page-container project-detail-grid">
          <Reveal className="project-detail-section" animation="fade-up">
            <h2 className="project-detail-section-title">Overview</h2>
            <p className="project-detail-overview">{project.overview}</p>
            <div className="project-detail-stack-row">
              {project.stack.map((tech) => (
                <span key={tech} className="project-stack-tag">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="project-detail-section" animation="fade-up" delay={80}>
            <h2 className="project-detail-section-title">Key features</h2>
            <ul className="project-detail-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="project-detail-section project-detail-section--wide" animation="fade-up" delay={120}>
            <h2 className="project-detail-section-title">Tech stack</h2>
            <div className="project-detail-tech-grid">
              {project.techStacks.map((group) => (
                <div key={group.title} className="project-detail-tech-card">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="page-container project-detail-nav">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="project-detail-nav-link project-detail-nav-link--prev">
            <span className="project-detail-nav-label">Previous</span>
            <span className="project-detail-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/projects/${next.slug}`} className="project-detail-nav-link project-detail-nav-link--next">
            <span className="project-detail-nav-label">Next</span>
            <span className="project-detail-nav-title">
              {next.title}
              <FiArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
};

export default ProjectDetails;
