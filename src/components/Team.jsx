import { useRef } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from './SocialIcons';
import { teamData } from '../data/studioData';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Team.css';

export default function Team() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="studio-team-section" id="team" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="team-section-head reveal-up">
          <span className="studio-eyebrow">THE BUILDERS</span>
          <h2 className="studio-section-title">The People Behind H.O.W.</h2>
          <p className="studio-section-subtitle">
            Three engineers and designers. Complementary technical skillsets. One unified vision to craft exceptional digital experiences.
          </p>
        </div>

        {/* 3 Founder Profile Cards */}
        <div className="team-cards-grid reveal-stagger-group">
          {teamData.map((member) => (
            <div key={member.name} className="team-profile-card reveal-stagger-item">
              
              {/* Avatar Bubble */}
              <div className="team-avatar-wrapper">
                <div className="team-avatar-circle">{member.initials}</div>
                <span className="team-verified-pill" title="Verified Founder">
                  <Check size={14} strokeWidth={3} />
                </span>
              </div>

              <h3 className="team-founder-name">{member.name}</h3>
              <div className="team-founder-role">{member.role}</div>
              
              <p className="team-founder-bio">{member.bio}</p>

              {/* Direct Communication Channels */}
              <div className="team-contact-actions">
                <a 
                  href={member.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="team-chat-btn"
                  aria-label={`Chat with ${member.name} on WhatsApp`}
                >
                  <WhatsappIcon size={16} className="whatsapp-icon" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight size={14} />
                </a>

                <div className="team-social-row">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label={`${member.name} GitHub`}
                  >
                    <GithubIcon size={17} />
                  </a>

                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon size={17} />
                  </a>

                  <a 
                    href={`mailto:${member.email}`} 
                    className="social-icon-btn"
                    aria-label={`Email ${member.name}`}
                  >
                    <EmailIcon size={17} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
