import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Services from "../components/Services";
import Team from "../components/Team";
import TrackRecord from "../components/TrackRecord";
import WhoWeAre from "../components/WhoWeAre";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const raw = location.hash.replace(/^#/, "");
    if (!raw) return;
    const id = decodeURIComponent(raw);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <AboutUs />
      <WhoWeAre />
      <Services />
      <Industries />
      <Team />
      <TrackRecord />
      <CTA />
    </main>
  );
}
