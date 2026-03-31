import { motion } from "framer-motion";
import SectionBackdrop from "./SectionBackdrop";

const pillars = [
  {
    title: "Trusted",
    text: "You get counsel you can act on. We are direct about trade-offs and what the work will take.",
  },
  {
    title: "Independent",
    text: "We are conflict-free. Our recommendations follow your brief and your long-term interests.",
  },
  {
    title: "Unwavering",
    text: "Senior people stay on the file. You are not handed off to a revolving team mid-stream.",
  },
];

export default function WhoWeAre() {
  return (
    <section id="identity" className="relative overflow-hidden py-14 md:py-20">
      <SectionBackdrop
        imageSrc="/assets/photos/team-collaboration.jpg"
        strength="clear"
        readableTint="content"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <span className="text-brand-lime decoration-brand-green mb-5 block text-xs font-bold tracking-[0.45em] uppercase underline decoration-2 underline-offset-8">
            Our identity
          </span>
          <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl">
            Trusted. Independent. Unwavering.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="max-md:border-b max-md:border-white/15 max-md:pb-10 max-md:last:border-b-0 max-md:last:pb-0"
            >
              <h3 className="text-brand-lime mb-3 text-sm font-black tracking-[0.2em] uppercase">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
