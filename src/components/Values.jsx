import { useRef } from 'react';
import { valuesData } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Values.css';

export default function Values() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="studio-values-section" ref={sectionRef}>
      <div className="studio-container">
        
        <div className="values-section-head reveal-up">
          <span className="studio-eyebrow">WHY WORK WITH H.O.W.</span>
          <h2 className="studio-section-title">Built On Modern Engineering Standards</h2>
          <p className="studio-section-subtitle">
            We operate as an elite engineering partner, removing bloat and focusing entirely on high-impact execution.
          </p>
        </div>

        <div className="values-cards-grid reveal-stagger-group">
          {valuesData.map((val) => (
            <div key={val.num} className="value-benefit-card reveal-stagger-item">
              <span className="value-num-index">{val.num}</span>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
