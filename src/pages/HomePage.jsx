import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Hero40 from '../components/Hero40';
import TechMarquee from '../components/TechMarquee';
import { RollingText } from '../components/v1/skiper27';
import SpotlightFrames from '../components/SpotlightFrames';
import { SkiperTextRevealH } from '../components/v1/skiper72';
import Capabilities from '../components/Capabilities';
import Services from '../components/Services';
import Process from '../components/Process';
import Values from '../components/Values';
import Team from '../components/Team';
import '../components/v1/ExpandCardsSection.css';

// Curated projects for the Spotlight Frames gallery.
const showcaseProjects = [
  {
    src: "/images/FurEver_image.png",
    alt: "FurEverCare",
    code: "# 01",
    title: "FurEverCare",
    category: "Pet Care & Adoption Platform",
    tagline: "Pet care and adoption platform featuring responsive layouts, listing cards and a seamless user experience.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    projectKey: "furevercare",
  },
  {
    src: "/images/collage-tree.jpg",
    alt: "Travel Smart",
    code: "# 02",
    title: "Travel Smart",
    category: "Interactive Travel Guide",
    tagline: "Interactive travel guide featuring tour packages, destination pages and trip itineraries with fluid animations.",
    tags: ["React", "GSAP", "Tailwind CSS"],
    projectKey: "travel-smart",
  },
  {
    src: "/images/collage-leaf.jpg",
    alt: "Picnic Games",
    code: "# 03",
    title: "Picnic Games",
    category: "Interactive Discovery",
    tagline: "Outdoor and indoor games discovery website with custom UI and JavaScript-driven interactive browsing.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    projectKey: "picnic-games",
  },
  {
    src: "/images/collage-car.jpg",
    alt: "Veloce Mobility",
    code: "# 04",
    title: "Veloce Mobility",
    category: "Automotive Telematics",
    tagline: "High-performance automotive telematics interface with real-time vehicle diagnostics and 3D visualization.",
    tags: ["WebGL", "Three.js", "TypeScript"],
    projectKey: "veloce-mobility",
  },
  {
    src: "/images/collage-city.jpg",
    alt: "Nexus Ecosystem",
    code: "# 05",
    title: "Nexus Ecosystem",
    category: "Enterprise Cloud Hub",
    tagline: "Unified infrastructure orchestrator and real-time observability platform for distributed engineering teams.",
    tags: ["Next.js", "GraphQL", "Framer"],
    projectKey: "nexus-fintech",
  },
];

export default function HomePage() {
  return (
    <div className="page-home">
      {/* Hero 40 Luxury Section with Skiper27 RollingText */}
      <Hero40 />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Skiper72 Horizontal Word-by-Word Scroll Text Reveal — Section 1 */}
      <section className="home-manifesto-section">
        <div className="studio-container">
          <div className="manifesto-eyebrow">
            <span className="manifesto-dot" />
            <span>STUDIO PHILOSOPHY</span>
          </div>
          <SkiperTextRevealH highlight="unforgettable">
            Every detail matters. Small interactions shape perception, build trust, and transform ordinary digital experiences into unforgettable ones.
          </SkiperTextRevealH>
        </div>
      </section>

      {/* Spotlight Frames interactive featured-work showcase */}
      <section className="home-expand-cards-section" id="featured-work">
        <div className="expand-cards-header-wrap">
          <div className="expand-cards-head">
            <div>
              <div className="expand-badge">
                <span className="expand-pulse-dot" />
                <span>FEATURED WORK</span>
              </div>
              <h2 className="expand-title">
                <RollingText text="Selected Works & Systems" delay={0.1} />
              </h2>
              <p className="expand-subtitle">
                Move across the frame rail to spotlight a project. Select an open frame to inspect the work.
              </p>
            </div>

            <div className="expand-controls-hint">
              <Sparkles size={16} color="#dddbff" />
              <span>Hover a frame • Click to inspect</span>
            </div>
          </div>
        </div>

        {/* Spotlight Frames component */}
        <div className="expand-cards-body">
          <SpotlightFrames
            items={showcaseProjects}
          />
        </div>

        {/* Bottom Explorer Action Bar */}
        <div className="expand-cards-footer-bar">
          <span style={{ fontSize: '13px', color: '#565371' }}>
            Interactive Spotlight Frames • Built with Framer Motion
          </span>
          <Link to="/work" className="expand-explore-link">
            <span>Explore All 8+ Works</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Skiper72 Kinetic Quote Section — Section 2 */}
      <section className="home-kinetic-quote-section">
        <div className="studio-container">
          <div className="manifesto-eyebrow">
            <span className="manifesto-dot" />
            <span>ARCHITECTURAL PRINCIPLE</span>
          </div>
          <SkiperTextRevealH highlight="extraordinary">
            We bridge visionary visual craft with resilient engineering. Transforming complex systems into intuitive, extraordinary products that endure.
          </SkiperTextRevealH>
        </div>
      </section>

      {/* Core Capabilities */}
      <Capabilities />

      {/* Comprehensive Services */}
      <Services />

      {/* Methodology / Process */}
      <Process />

      {/* Values & Principles */}
      <Values />

      {/* Studio Team */}
      <Team />

    </div>
  );
}
