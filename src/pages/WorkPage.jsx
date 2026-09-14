import { useEffect } from 'react';
import Projects from '../components/Projects';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import { animatePageEntry } from '../utils/animeAnimations';
import './PageBanner.css';

export default function WorkPage() {
  useEffect(() => {
    animatePageEntry('.studio-page-header');
  }, []);

  return (
    <div className="page-work">
      <PageHero
        eyebrow="Selected portfolio"
        title="Our Recent Work"
        description="A selection of production-grade digital products, web platforms, and interactive software engineered by H.O.W."
        index="03"
        note="Useful, expressive and ready for the real world."
      />

      <Projects />
      <TechMarquee />
    </div>
  );
}
