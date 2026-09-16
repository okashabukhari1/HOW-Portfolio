import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero40 from '../components/Hero40';
import TechMarquee from '../components/TechMarquee';
import { RollingText } from '../components/v1/skiper27';
import { ProjectCard } from '../components/Projects';
import { projectsData } from '../data/studioData';
import { SkiperTextRevealH } from '../components/v1/skiper72';
import Capabilities from '../components/Capabilities';
import Services from '../components/Services';
import Process from '../components/Process';
import Values from '../components/Values';
import Team from '../components/Team';
import '../components/v1/ExpandCardsSection.css';

const showcaseProjects = [
  projectsData.furevercare,
  projectsData['travel-smart'],
  projectsData['picnic-games'],
  projectsData['veloce-mobility'],
  projectsData['nexus-fintech'],
];

export default function HomePage() {
  return (
    <div className="page-home">
      {/* Hero 40 Luxury Section with Skiper27 RollingText */}
      <Hero40 />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Skiper72 Horizontal Word-by-Word Scroll Text Reveal — Section 1 */}
      <section className="home-manifesto-section">
        <div className="studio-container">
          <div className="manifesto-eyebrow">
            <span className="manifesto-dot" />
            <span>STUDIO PHILOSOPHY</span>
          </div>
          <SkiperTextRevealH highlight="unforgettable">
            Every detail matters. Small interactions shape perception, build trust, and transform ordinary digital experiences into unforgettable ones.
          </SkiperTextRevealH>
        </div>
      </section>

      {/* Featured work */}
      <section className="home-expand-cards-section" id="featured-work">
        <div className="expand-cards-header-wrap">
          <div className="expand-cards-head">
            <div>
              <div className="expand-badge">
                <span className="expand-pulse-dot" />
                <span>FEATURED WORK</span>
              </div>
              <h2 className="expand-title">
                <RollingText text="Selected Works & Systems" delay={0.1} />
              </h2>
              <p className="expand-subtitle">
                A selection of digital products where thoughtful design meets dependable engineering.
              </p>
            </div>
            <Link to="/work" className="expand-controls-hint">Browse all projects <ArrowRight size={15} /></Link>
          </div>
        </div>

        <div className="expand-cards-body home-featured-grid projects-showcase-grid reveal-stagger-group">
          {showcaseProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={index === 0 ? 'project-showcase-card--lead' : ''}
            />
          ))}
        </div>

        {/* Bottom Explorer Action Bar */}
        <div className="expand-cards-footer-bar">
          <span style={{ fontSize: '13px', color: '#565371' }}>
            Five selected builds • Full case studies included
          </span>
          <Link to="/work" className="expand-explore-link">
            <span>Explore All 8+ Works</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Skiper72 Kinetic Quote Section — Section 2 */}
      <section className="home-kinetic-quote-section">
        <div className="studio-container">
          <div className="manifesto-eyebrow">
            <span className="manifesto-dot" />
            <span>ARCHITECTURAL PRINCIPLE</span>
          </div>
          <SkiperTextRevealH highlight="extraordinary">
            We bridge visionary visual craft with resilient engineering. Transforming complex systems into intuitive, extraordinary products that endure.
          </SkiperTextRevealH>
        </div>
      </section>

      {/* Core Capabilities */}
      <Capabilities />

      {/* Comprehensive Services */}
      <Services />

      {/* Methodology / Process */}
      <Process />

      {/* Values & Principles */}
      <Values />

      {/* Studio Team */}
      <Team />

    </div>
  );
}
