import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/studioData';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) return <Navigate to="/work" replace />;

  return (
    <article className="project-detail-page">
      <header className="project-detail-hero">
        <div className="studio-container">
          <Link to="/work" className="project-back-link"><ArrowLeft size={16} /> All work</Link>
          <div className="project-detail-hero-grid">
            <div>
              <span className="project-detail-index">{project.num}</span>
              <p className="project-detail-category">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="project-detail-lead">{project.tagline}</p>
              <div className="project-detail-techs">
                {project.technology.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link">Visit live project <ExternalLink size={16} /></a>
            </div>
            <div className="project-detail-image-wrap">
              <img src={project.heroImage} alt={`${project.title} project preview`} />
            </div>
          </div>
        </div>
      </header>

      <div className="studio-container project-detail-content">
        <section className="project-detail-overview">
          <span className="studio-eyebrow">Overview</span>
          <h2>Designed to move the experience forward.</h2>
          <p>{project.overview}</p>
        </section>

        <section className="project-detail-features">
          <span className="studio-eyebrow">Engineering &amp; UX</span>
          <h2>Key features</h2>
          <div className="project-detail-feature-grid">
            {project.keyFeatures.map((feature) => (
              <div key={feature} className="project-detail-feature-card"><Check size={18} /><p>{feature}</p></div>
            ))}
          </div>
        </section>

        <section className="project-detail-approach">
          <span className="studio-eyebrow">Development approach</span>
          <h2>How it was built</h2>
          <p>{project.developmentApproach}</p>
          <Link to="/contact" className="project-detail-cta">Build something similar <ArrowUpRight size={17} /></Link>
        </section>
      </div>
    </article>
  );
}
