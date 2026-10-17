import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Layers, Globe, ShoppingBag, Palette, Cpu, Gauge } from 'lucide-react';
import { servicesData } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Services.css';

const serviceIcons = [
  <Globe size={22} />,
  <Layers size={22} />,
  <ShoppingBag size={22} />,
  <Palette size={22} />,
  <Cpu size={22} />,
  <Gauge size={22} />
];

export default function Services({ limit, showPlansCta = false }) {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="studio-services-section" id="services" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="services-section-head reveal-up">
          <span className="studio-eyebrow">OUR EXPERTISE</span>
          <div className="services-title-row">
            <h2 className="studio-section-title">
              What We Build &amp; Scale
            </h2>
            <p className="studio-section-subtitle">
              We offer a complete suite of digital engineering and design services to help ambitious companies build, launch, and dominate.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-cards-grid reveal-stagger-group">
          {displayServices.map((svc, idx) => (
            <div key={svc.num} className="service-awwwards-card reveal-stagger-item">
              <div className="service-card-header">
                <span className="service-num-badge">{svc.num}</span>
                <span className="service-icon-glyph">{serviceIcons[idx % serviceIcons.length]}</span>
              </div>
              
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-description">{svc.desc}</p>

              <div className="service-tag-cloud">
                {svc.tags.map((tag) => (
                  <span key={tag} className="service-chip">{tag}</span>
                ))}
              </div>

              <div className="service-card-action">
                <Link to="/contact" className="service-action-link">
                  <span>Request Service</span>
                  <ArrowRight size={15} className="link-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showPlansCta && (
          <div className="services-plans-cta reveal-up">
            <div>
              <span className="studio-eyebrow">Not sure what you need?</span>
              <p>Tell us about your goals, and we'll help you identify the right solution.</p>
            </div>
            <Link to="/plans" className="services-plans-button">Explore our plans <ArrowUpRight size={16} /></Link>
          </div>
        )}

      </div>
    </section>
  );
}
