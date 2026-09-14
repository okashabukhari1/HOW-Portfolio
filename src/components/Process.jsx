import { useRef } from 'react';
import { processSteps } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Process.css';

export default function Process() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="studio-process-section" id="process" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="process-head reveal-up">
          <span className="studio-eyebrow">OUR METHODOLOGY</span>
          <h2 className="studio-section-title">The Engineering Lifecycle</h2>
          <p className="studio-section-subtitle">
            A systematic 5-stage delivery framework designed to transform ambitious product ideas into reliable, scalable reality.
          </p>
        </div>

        {/* 5-Step Process Horizontal Roadmap */}
        <div className="process-steps-track reveal-stagger-group">
          {processSteps.map((step) => (
            <div key={step.num} className="process-step-node reveal-stagger-item">
              <div className="step-top-badge">
                <span className="step-circle">{step.num}</span>
                <span className="step-status-tag">STAGE</span>
              </div>

              <h3 className="step-phase-title">{step.phase}</h3>
              <p className="step-desc-copy">{step.desc}</p>

              <div className="step-deliverable-box">
                <span className="deliverable-label">Deliverable:</span>
                <span className="deliverable-val">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
