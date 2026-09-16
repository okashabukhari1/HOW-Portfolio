import Contact from '../components/Contact';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import './PageBanner.css';

export default function ContactPage() {
  return (
    <div className="page-contact">
      <PageHero
        eyebrow="Direct communication"
        title="Contact Our Studio"
        description="Start a direct WhatsApp conversation with the founding engineers who will build your product."
        index="05"
        note="A clear first conversation is where good work begins."
      />

      <Contact />
      <TechMarquee />
    </div>
  );
}
