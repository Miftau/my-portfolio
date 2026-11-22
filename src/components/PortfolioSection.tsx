"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Eye,
  Sparkles,
  X,
} from "lucide-react";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectFilterCategory,
  type ProjectItem,
} from "@/data/portfolio";

interface PortfolioSectionProps {
  active: boolean;
}

export default function PortfolioSection({ active }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterCategory>("All");
  const [selectOpen, setSelectOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  const handleCategoryChange = (category: ProjectFilterCategory) => {
    setSelectedCategory(category);
    setSelectOpen(false);
  };

  return (
    <article
      className={`portfolio${active ? " active" : ""}`}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <p className="portfolio-intro">
          Selected production platforms, AI-powered labs, mobile applications,
          and digital experiences engineered for reliability, scale, and
          measurable business impact.
        </p>

        <ul className="filter-list" role="tablist" aria-label="Project categories">
          {PROJECT_CATEGORIES.map((category) => (
            <li className="filter-item" key={category}>
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            type="button"
            className={`filter-select${selectOpen ? " active" : ""}`}
            aria-expanded={selectOpen}
            onClick={() => setSelectOpen((prev) => !prev)}
          >
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
              <ChevronDown size={16} aria-hidden="true" />
            </div>
          </button>

          <ul className="select-list">
            {PROJECT_CATEGORIES.map((category) => (
              <li className="select-item" key={category}>
                <button
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item active" key={project.id}>
              <div className="project-card">
                <button
                  type="button"
                  className="project-media-trigger"
                  onClick={() => setActiveProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <Eye size={20} aria-hidden="true" />
                    </div>

                    {project.featured && (
                      <span className="project-featured-badge">
                        <Sparkles size={11} aria-hidden="true" />
                        Recent
                      </span>
                    )}

                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                  </figure>
                </button>

                <div className="project-body">
                  <div className="project-meta-row">
                    <p className="project-category">{project.subtitle}</p>
                  </div>

                  <h3 className="project-title">
                    <button
                      type="button"
                      className="project-title-btn"
                      onClick={() => setActiveProject(project)}
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="project-summary">{project.summary}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-details-btn"
                      onClick={() => setActiveProject(project)}
                    >
                      Case Details
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link"
                      >
                        <span>{project.ctaLabel ?? "Live Demo"}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div
        className={`modal-container${activeProject ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!activeProject}
        aria-label={activeProject?.title ?? "Project details"}
      >
        <div
          className={`overlay${activeProject ? " active" : ""}`}
          onClick={() => setActiveProject(null)}
        />

        {activeProject && (
          <section className="project-modal">
            <button
              type="button"
              className="modal-close-btn"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="project-modal-banner">
              <img src={activeProject.image} alt={activeProject.imageAlt} />
            </div>

            <div className="project-modal-body">
              <div className="project-modal-header">
                <div>
                  <div className="project-modal-kicker">
                    <span>{activeProject.category}</span>
                    {activeProject.featured && (
                      <span className="project-modal-badge">
                        Featured Recent Project
                      </span>
                    )}
                  </div>
                  <h3 className="h3 project-modal-title">
                    {activeProject.title}
                  </h3>
                  <p className="project-modal-subtitle">
                    {activeProject.subtitle}
                  </p>
                </div>

                {activeProject.url && (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-cta"
                  >
                    <span>{activeProject.ctaLabel ?? "Visit Live Project"}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>

              <p className="project-modal-description">
                {activeProject.description}
              </p>

              <div className="project-modal-highlights">
                <h4 className="project-modal-section-title">
                  Key Capabilities &amp; Deliverables
                </h4>
                <ul>
                  {activeProject.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2
                        size={16}
                        className="highlight-icon"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-tags">
                {activeProject.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
