import { useRef, useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollTrigger';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [searchParams] = useSearchParams();
  const initialPlan = ['starter', 'professional', 'custom', 'cyber-test'].includes(searchParams.get('plan')) ? searchParams.get('plan') : '';
  const [form, setForm] = useState({ fullName: '', email: '', company: '', plan: initialPlan, projectType: '', budget: '', description: '' });
  const [submitted, setSubmitted] = useState(false);
  useScrollAnimation(sectionRef);

  const updateField = (event) => {
    setSubmitted(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitInquiry = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
  };

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

          <form className="project-inquiry-form reveal-stagger-item" onSubmit={submitInquiry} noValidate>
            <div className="inquiry-form-head">
              <span className="studio-eyebrow">Project inquiry</span>
              <h2>Tell us about your project</h2>
              <p>Share the essentials below. This form prepares your inquiry; it is not delivered until you send it through WhatsApp.</p>
            </div>

            <div className="inquiry-fields">
              <label>Full Name<input name="fullName" value={form.fullName} onChange={updateField} required autoComplete="name" /></label>
              <label>Email Address<input type="email" name="email" value={form.email} onChange={updateField} required autoComplete="email" /></label>
              <label>Company or Business Name <span>(optional)</span><input name="company" value={form.company} onChange={updateField} autoComplete="organization" /></label>
              <label>Selected Plan<select name="plan" value={form.plan} onChange={updateField} required><option value="">Select a plan</option><option value="starter">Starter</option><option value="professional">Professional</option><option value="custom">Custom Solution</option><option value="cyber-test">Website Cyber Test</option></select></label>
              <label>Project Type<select name="projectType" value={form.projectType} onChange={updateField} required><option value="">Select project type</option><option>Website</option><option>Web application</option><option>E-commerce</option><option>UI/UX design</option><option>Custom software</option><option>Website optimization</option></select></label>
              <label>Estimated Budget <span>(optional)</span><input name="budget" value={form.budget} onChange={updateField} placeholder="Your preferred range" /></label>
              <label className="inquiry-field-full">Project Description<textarea name="description" value={form.description} onChange={updateField} required rows="5" placeholder="Goals, scope, pages, features, or anything helpful" /></label>
            </div>
            <button type="submit" className="inquiry-submit">Send project inquiry <ArrowUpRight size={16} /></button>
            {submitted && <div className="inquiry-success" role="status">Your inquiry is prepared but has not been delivered. Send it through <a href="https://wa.me/923272707981" target="_blank" rel="noopener noreferrer">WhatsApp</a> to start the conversation.</div>}
          </form>

        </div>

      </div>
    </section>
  );
}
