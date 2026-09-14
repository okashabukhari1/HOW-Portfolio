import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import { animateStaggerCards } from '../utils/animeAnimations';
import './Projects.css';

const categories = ["All", "Platforms", "Web Applications", "Games & Discovery"];

export default function Projects({ limit }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  useEffect(() => {
    animateStaggerCards('.project-showcase-card');
  }, [activeFilter]);

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
            <article key={proj.id} className="project-showcase-card reveal-stagger-item">
              
              {/* Media Visual Container */}
              <Link
                to={`/work/${proj.id}`}
                className="project-media-stage"
              >
                <div className="project-card-badge">{proj.num}</div>
                <img 
                  src={proj.heroImage} 
                  alt={proj.title} 
                  className="project-stage-img"
                  loading="lazy"
                />
                <div className="project-stage-overlay">
                  <span className="stage-overlay-text">
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="project-card-body">
                <span className="project-category-tag">{proj.category}</span>
                <h3 className="project-headline-title">{proj.title}</h3>
                <p className="project-summary-copy">{proj.tagline}</p>

                <div className="project-chips-row">
                  {proj.technology.map((tech) => (
                    <span key={tech} className="tech-badge-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="project-card-bottom">
                <Link className="btn-case-study" to={`/work/${proj.id}`}>
                  <span>View Case Study</span>
                  <ArrowRight size={15} className="btn-arrow" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
