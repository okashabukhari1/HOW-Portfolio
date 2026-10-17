import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Projects.css';

const categories = ["All", "Platforms", "Web Applications", "Games & Discovery"];

export function ProjectCard({ project, className = '' }) {
  return (
    <article className={`project-showcase-card reveal-stagger-item ${className}`.trim()}>
      <Link to={`/work/${project.id}`} className="project-card-link" aria-label={`View ${project.title} case study`}>
        <div className="project-media-stage">
          <img
            src={project.showcaseImage || project.heroImage}
            alt={`${project.title} project preview`}
            className="project-stage-img"
            loading="lazy"
          />
          <div className="project-media-topline">
            <span className="project-card-badge">{project.num}</span>
            <span className="project-card-type">{project.categoryFilter}</span>
          </div>
          <span className="project-open-cue" aria-hidden="true"><ArrowUpRight size={20} /></span>
        </div>
      </Link>

      <div className="project-card-body">
        <span className="project-category-tag">{project.category}</span>
        <h3 className="project-headline-title">{project.title}</h3>
        <p className="project-summary-copy">{project.tagline}</p>

        <div className="project-chips-row" aria-label="Technologies used">
          {project.technology.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-badge-chip">{tech}</span>
          ))}
        </div>

        <div className="project-card-bottom">
          <Link className="btn-case-study" to={`/work/${project.id}`}>View case study <ArrowUpRight size={15} /></Link>
          <a className="btn-live-project" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project <ExternalLink size={14} /></a>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ limit }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  const projectsList = Object.values(projectsData);
  const filteredProjects = activeFilter === "All"
    ? projectsList
    : projectsList.filter((p) => p.categoryFilter === activeFilter);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="studio-projects-section" id="work" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="projects-section-head reveal-up">
          <div>
            <span className="studio-eyebrow">SELECTED WORK</span>
            <h2 className="studio-section-title">Case Studies &amp; Products</h2>
          </div>

          {/* Filter Tabs */}
          <div className="project-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="projects-showcase-grid reveal-stagger-group">
          {displayProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
}
