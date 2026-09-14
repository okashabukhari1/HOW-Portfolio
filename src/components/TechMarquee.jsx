import { techStack } from '../data/studioData';
import './TechMarquee.css';

export default function TechMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <div className="studio-tech-ticker" aria-label="Engineered with modern technologies">
      <div className="tech-ticker-label">
        <span className="ticker-pulse"></span>
        OUR TECHNOLOGY STACK
      </div>
      <div className="tech-ticker-track">
        <div className="tech-ticker-content">
          {marqueeItems.map((tech, index) => (
            <div key={`${tech}-${index}`} className="tech-pill">
              <span className="tech-dot"></span>
              <span className="tech-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
