import Team from '../components/Team';
import Values from '../components/Values';
import TechMarquee from '../components/TechMarquee';
import PageHero from '../components/PageHero';
import './PageBanner.css';

export default function TeamPage() {
  return (
    <div className="page-team">
      <PageHero
        eyebrow="The founders"
        title="The People Behind H.O.W."
        description="Three engineers and designers. Complementary technical skillsets. Direct communication without account managers."
        index="04"
        note="The people you meet are the people who make the work."
      />

      <Team />
      <Values />
      <TechMarquee />
    </div>
  );
}
