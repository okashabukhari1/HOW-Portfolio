import { useEffect } from 'react';
import Capabilities from '../components/Capabilities';
import Values from '../components/Values';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import { animatePageEntry } from '../utils/animeAnimations';
import './PageBanner.css';

export default function AboutPage() {
  useEffect(() => {
    animatePageEntry('.studio-page-header');
  }, []);

  return (
    <div className="page-about">
      <PageHero
        eyebrow="Studio manifesto"
        title={<>Three People.<br />One Shared Direction.</>}
        description="H.O.W. is an agile digital product studio founded by Hashim, Okasha and Waleed. We merge software engineering rigor, interface design, and business clarity."
        index="01"
        note="Built around a shared standard for thoughtful digital work."
      />

      <Capabilities />
      <Values />
      <TechMarquee />
    </div>
  );
}
