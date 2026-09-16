import { useRef } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

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

        {/* Direct WhatsApp channels */}
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

        </div>

      </div>
    </section>
  );
}
