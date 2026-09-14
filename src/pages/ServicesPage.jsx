import { useEffect } from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import { animatePageEntry } from '../utils/animeAnimations';
import './PageBanner.css';

export default function ServicesPage() {
  useEffect(() => {
    animatePageEntry('.studio-page-header');
  }, []);

  return (
    <div className="page-services">
      <PageHero
        eyebrow="Our expertise"
        title="What We Build"
        description="From modern responsive websites to complex cloud-backed SaaS platforms, we engineer digital products that solve real business problems."
        index="02"
        note="Strategy, design and engineering — connected from day one."
      />

      <Services />
      <Process />
      <TechMarquee />
    </div>
  );
}
