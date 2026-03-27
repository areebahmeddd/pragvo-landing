import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrackRecord from "../components/TrackRecord";
import WhoWeAre from "../components/WhoWeAre";
import WhyPragvo from "../components/WhyPragvo";

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
