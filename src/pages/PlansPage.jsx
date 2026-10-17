import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './PageBanner.css';
import './PlansPage.css';

const plans = [
  {
    key: 'starter',
    number: '01',
    name: 'Starter',
    audience: 'Personal websites, portfolios, and small businesses.',
    features: ['Responsive website design', 'Up to 5 pages', 'Mobile and desktop optimization', 'Contact form UI', 'Basic on-page SEO setup', 'Testing before delivery', 'One round of revisions'],
    label: 'Choose Starter'
  },
  {
    key: 'professional',
    number: '02',
    name: 'Professional',
    audience: 'Growing businesses that need more functionality.',
    features: ['Everything in Starter, where applicable', 'Up to 10 pages', 'Custom UI and branding direction', 'Interactive website features', 'Integration of agreed third-party services', 'Enhanced on-page SEO setup', 'Two rounds of revisions', 'Additional testing and refinement'],
    label: 'Choose Professional',
    recommended: true
  },
  {
    key: 'custom',
    number: '03',
    name: 'Custom Solution',
    audience: 'E-commerce stores, web applications, and tailored software.',
    features: ['Custom project scope', 'E-commerce or web application functionality', 'Database integration when required', 'Custom features based on requirements', 'Third-party integrations where applicable', 'Project-specific testing', 'Agreed delivery milestones'],
    label: 'Discuss Custom Project'
  },
  {
    key: 'cyber-test',
    number: '04',
    name: 'Website Cyber Test',
    audience: 'Existing websites that need a focused security review.',
    features: ['Focused website security assessment', 'Common vulnerability checks', 'Exposed configuration review', 'OWASP-aligned checks', 'Practical hardening guidance', 'Clear security report'],
    label: 'Request Cyber Test'
  }
];

export default function PlansPage() {
  return (
    <div className="page-plans">
      <PageHero
        eyebrow="Find the right solution"
        title="A Plan for Your Next Big Idea."
        description="Choose a starting point for your project. Explore our plans, compare what's included, and contact H.O.W. to discuss your requirements."
        index="04"
        note="Every scope is confirmed before work begins."
      />

      <section className="plans-section">
        <div className="studio-container">
          <div className="plans-intro">
            <p>Final quotes depend on project scope and complexity.</p>
            <Link to="/contact" className="plans-discuss-link">Let's discuss your project <ArrowUpRight size={16} /></Link>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article key={plan.key} className={`plan-card ${plan.recommended ? 'plan-card--recommended' : ''}`}>
                {plan.recommended && <span className="plan-recommended">Recommended</span>}
                <span className="plan-number">Plan {plan.number}</span>
                <h2>{plan.name}</h2>
                <p className="plan-audience">Best for: {plan.audience}</p>
                <p className="plan-quote">Custom quote</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
                </ul>
                <Link to={`/contact?plan=${plan.key}`} className="plan-select-button">{plan.label} <ArrowUpRight size={16} /></Link>
              </article>
            ))}
          </div>

          <p className="plans-disclaimer">Hosting, domain registration, paid APIs, premium plugins, and third-party service fees are excluded unless explicitly included in the agreed proposal.</p>
        </div>
      </section>
    </div>
  );
}
