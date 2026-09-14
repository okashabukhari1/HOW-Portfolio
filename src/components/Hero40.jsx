import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import DitherReveal from './DitherReveal';
import './Hero40.css';

function TextRoll({ children, className = '' }) {
  return <span className={className}>{children}</span>;
}

export default function Hero40({
  eyebrow = "H.O.W. — DIGITAL PRODUCT STUDIO",
  titleLine1 = "We Build Digital Products",
  titleLine2 = "That Move Businesses Forward.",
  description = "We design and develop modern digital experiences, websites and software products for ambitious businesses.",
  ctaText = "Start a project",
  ctaLink = "/contact",
  imageSrc = "/white-hands.png",
}) {
  return (
    <section className="originkit-hero-40" id="home">
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-dither-layer" aria-hidden="true">
        <DitherReveal image={{ src: imageSrc, alt: "Interactive Dither Visual" }} />
      </div>

      <div className="hero-main-content" aria-labelledby="hero-title">
        <p className="hero-eyebrow">
          <span className="eyebrow-pulse"></span>
          <TextRoll>{eyebrow}</TextRoll>
        </p>
        <h1 id="hero-title">
          <TextRoll
            center
            className="hero-headline-line hero-headline-line-muted"
          >
            {titleLine1}
          </TextRoll>
          <TextRoll
            center
            className="hero-headline-line"
          >
            {titleLine2}
          </TextRoll>
        </h1>
        <p className="hero-copy">
          {description}
        </p>
        <div className="hero-actions-group">
          <Link to={ctaLink} className="hero-primary-cta" id="journey">
            <span>
              <TextRoll>{ctaText}</TextRoll>
            </span>
            <ArrowUpRight size={16} />
          </Link>
          <Link to="/work" className="hero-secondary-cta">
            <TextRoll>View Selected Work</TextRoll>
          </Link>
        </div>
      </div>

      <footer className="hero-bottom-footer">
        <p>Purpose Over Noise. Designed &amp; Engineered by H.O.W.</p>
        <Link to="/work" className="hero-scroll-cue">
          <span>explore work</span>
          <ArrowDown size={14} />
        </Link>
        <p>
          Hashim • Okasha • Waleed
          <br /> Pakistan &amp; Worldwide (UTC+5)
        </p>
      </footer>
    </section>
  );
}
