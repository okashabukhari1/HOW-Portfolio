import { useRef, useEffect } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import { animatePageEntry } from '../utils/animeAnimations';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  useEffect(() => {
    animatePageEntry('.studio-contact-section');
  }, []);

  return (
    <section className="studio-contact-section" id="contact" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Section Head */}
        <div className="contact-head reveal-up">
          <span className="studio-eyebrow">DIRECT COMMUNICATION</span>
          <h1 className="studio-section-title">Have An Idea? Let's Build It.</h1>
          <p className="studio-section-subtitle">
            Skip the middleman. Connect directly with our founding engineering team for architectural strategy, scoping, and timelines.
          </p>
        </div>

        {/* 3-Column Luxury Channel Showcase (NO FORM) */}
        <div className="contact-cards-grid reveal-stagger-group">
          
          {/* Card 1: Direct Founder WhatsApp Channels */}
          <div className="contact-hub-card highlight-card reveal-stagger-item">
            <div className="hub-card-header">
              <div className="hub-icon-wrap whatsapp-theme">
                <MessageCircle size={24} />
              </div>
              <span className="hub-card-tag">Instant WhatsApp</span>
            </div>

            <h2 className="hub-card-title">Chat With Founders</h2>
            <p className="hub-card-desc">
              Prefer direct messaging? Message our engineers directly on WhatsApp for real-time discussions.
            </p>

            <div className="founder-chat-buttons">
              <a 
                href="https://wa.me/923272707981" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="founder-whatsapp-item"
              >
                <div className="founder-meta">
                  <span className="founder-chat-name">Okasha Bukhari</span>
                  <span className="founder-chat-role">Frontend &amp; Design Lead</span>
                </div>
                <div className="founder-action-badge">
                  <span>+92 327 2707981</span>
                  <ArrowUpRight size={15} />
                </div>
              </a>

              <a 
                href="https://wa.me/923218336657" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="founder-whatsapp-item"
              >
                <div className="founder-meta">
                  <span className="founder-chat-name">Hashim Faraz</span>
                  <span className="founder-chat-role">Full Stack &amp; Security Lead</span>
                </div>
                <div className="founder-action-badge">
                  <span>+92 321 8336657</span>
                  <ArrowUpRight size={15} />
                </div>
              </a>

              <a 
                href="https://wa.me/923132412644" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="founder-whatsapp-item"
              >
                <div className="founder-meta">
                  <span className="founder-chat-name">Waleed Ahmed</span>
                  <span className="founder-chat-role">Product &amp; QA Lead</span>
                </div>
                <div className="founder-action-badge">
                  <span>+92 313 2412644</span>
                  <ArrowUpRight size={15} />
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Direct Email & RFPs */}
          <div className="contact-hub-card reveal-stagger-item">
            <div className="hub-card-header">
              <div className="hub-icon-wrap purple-theme">
                <Mail size={24} />
              </div>
              <span className="hub-card-tag">Official Inquiries</span>
            </div>

            <h2 className="hub-card-title">Email Our Studio</h2>
            <p className="hub-card-desc">
              Send us your project scope, wireframes, RFP documentation, or architectural requirements.
            </p>

            <div className="email-action-list">
              <a href="mailto:contact@howstudio.dev" className="email-card-btn">
                <div className="email-info">
                  <span className="email-label">General Studio &amp; Proposals</span>
                  <span className="email-address">contact@howstudio.dev</span>
                </div>
                <ArrowUpRight size={18} />
              </a>

              <a href="mailto:okasha@howstudio.dev" className="email-card-btn">
                <div className="email-info">
                  <span className="email-label">Direct Engineering Lead</span>
                  <span className="email-address">okasha@howstudio.dev</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hub-guarantee-note">
              <Clock size={16} className="note-icon" />
              <span>Guaranteed response within 24 hours</span>
            </div>
          </div>

          {/* Card 3: Location, Global Operations & Booking */}
          <div className="contact-hub-card reveal-stagger-item">
            <div className="hub-card-header">
              <div className="hub-icon-wrap blue-theme">
                <MapPin size={24} />
              </div>
              <span className="hub-card-tag">Headquarters</span>
            </div>

            <h2 className="hub-card-title">Karachi, Pakistan</h2>
            <p className="hub-card-desc">
              Operating in PKT (UTC+5). We work synchronously and asynchronously with founders and brands worldwide.
            </p>

            <div className="location-specs-list">
              <div className="spec-item">
                <Globe2 size={16} className="spec-icon" />
                <span>Global Remote Collaboration</span>
              </div>
              <div className="spec-item">
                <ShieldCheck size={16} className="spec-icon" />
                <span>NDA &amp; Confidential Scoping</span>
              </div>
              <div className="spec-item">
                <CheckCircle2 size={16} className="spec-icon" />
                <span>Currently Taking Q3/Q4 Projects</span>
              </div>
            </div>

            <div className="call-booking-box">
              <div className="booking-info">
                <Calendar size={18} className="booking-icon" />
                <div>
                  <div className="booking-title">Schedule a 20-Min Call</div>
                  <div className="booking-sub">Discuss your project roadmap</div>
                </div>
              </div>
              <a href="https://wa.me/923272707981" target="_blank" rel="noopener noreferrer" className="btn-book-call">
                Schedule <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
