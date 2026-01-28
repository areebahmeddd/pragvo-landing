import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import WhyPragvo from '../components/WhyPragvo';
import TrackRecord from '../components/TrackRecord';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyPragvo />
      <TrackRecord />
      <CTA />
    </main>
  );
}
