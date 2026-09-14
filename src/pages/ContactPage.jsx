import { useEffect } from 'react';
import Contact from '../components/Contact';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import { animatePageEntry } from '../utils/animeAnimations';
import './PageBanner.css';

export default function ContactPage() {
  useEffect(() => {
    animatePageEntry('.studio-page-header');
  }, []);

  return (
    <div className="page-contact">
      <PageHero
        eyebrow="Direct communication"
        title="Contact Our Studio"
        description="No middle management. No generic ticketing queues. Speak directly with the founding engineers who will build your product."
        index="05"
        note="A clear first conversation is where good work begins."
      />

      <Contact />
      <TechMarquee />
    </div>
  );
}
