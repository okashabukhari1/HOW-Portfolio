import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import { SkiperTextRevealH } from './v1/skiper72';
import './Capabilities.css';

export default function Capabilities() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="studio-capabilities-section" id="about" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Top Capabilities Grid */}
        <div className="capabilities-header-grid">
          
          <div className="capabilities-col-title reveal-up">
            <span className="studio-eyebrow">OUR CAPABILITIES</span>
            <h2 className="capabilities-hero-title">
              <span>DESIGN.</span>
              <span>DEVELOP.</span>
              <span className="text-purple-highlight">DELIVER.</span>
            </h2>
          </div>

          <div className="capabilities-col-desc reveal-up">
            <div className="capabilities-lead-wrap">
              <SkiperTextRevealH
                className="capabilities-skiper-text"
                highlight="forward"
              >
                From first concept to final interface, H.O.W. combines visual craft and robust engineering to build digital experiences that move companies forward.
              </SkiperTextRevealH>
            </div>

            <div className="capabilities-steps-flow">
              <div className="step-card">
                <span className="step-badge">01</span>
                <span className="step-label">IDEAS &amp; SCOPE</span>
              </div>
              <ArrowRight size={16} className="step-connector" />
              <div className="step-card">
                <span className="step-badge">02</span>
                <span className="step-label">SHIPPED PRODUCTS</span>
              </div>
              <ArrowRight size={16} className="step-connector" />
              <div className="step-card highlight">
                <span className="step-badge">03</span>
                <span className="step-label">MEASURABLE IMPACT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Philosophy Feature Card */}
        <div className="philosophy-glass-banner reveal-up">
          <div className="philosophy-content-grid">
            <div className="philosophy-left">
              <span className="studio-eyebrow-accent">CORE PHILOSOPHY</span>
              <h3 className="philosophy-heading">Purpose Over Noise.</h3>
              <p className="philosophy-motto">
                "A digital product must earn its place — every screen, interaction, and line of code should exist to serve users and drive real business outcomes."
              </p>
            </div>
            
            <div className="philosophy-right">
              <div className="philosophy-pillar">
                <div className="pillar-num">01</div>
                <div>
                  <h4 className="pillar-title">Unified Room Thinking</h4>
                  <p className="pillar-desc">Design and development happen side by side. Decisions are made with full technical and aesthetic awareness from day one.</p>
                </div>
              </div>

              <div className="philosophy-pillar">
                <div className="pillar-num">02</div>
                <div>
                  <h4 className="pillar-title">Zero Unnecessary Fluff</h4>
                  <p className="pillar-desc">We eliminate extraneous complexity. Clean architecture and intuitive UX outshine bloated templates every single time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
