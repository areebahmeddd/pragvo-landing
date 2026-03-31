import { motion } from "framer-motion";
import SectionBackdrop from "./SectionBackdrop";

const industries = [
  "Consulting",
  "Media & Entertainment",
  "Retail",
  "Banking & Financial Services",
  "E-commerce & Internet / Startups",
  "Education & EdTech",
  "Manufacturing & Industrial",
  "Legal Services",
  "FMCG (Fast-Moving Consumer Goods)",
  "Pharmaceuticals & Healthcare",
  "Hospitality & Travel",
  "Real Estate",
  "Energy, Power & Utilities",
  "Market Research",
  "Automotive & Auto Components",
  "IT & ITES",
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-14 md:py-20"
    >
      <SectionBackdrop
        imageSrc="/assets/photos/boardroom.jpg"
        strength="clear"
        readableTint="content"
        fixedCover
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <span className="text-brand-lime decoration-brand-green mb-4 block text-xs font-bold tracking-[0.45em] uppercase underline decoration-2 underline-offset-8">
              Industries
            </span>
            <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl">
              Sector depth
              <br />
              <span className="text-white/88">across the economy.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-right md:text-base">
            We have worked across regulated, founder-led, and professional
            services settings. Similar issues show up in different sectors; the
            response still needs to fit your context.
          </p>
        </div>

        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-4">
          {industries.map((label, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.45) }}
              className="mb-3 break-inside-avoid"
            >
              <div className="surface-glass-tile hover:border-brand-lime/40 group hover:ring-brand-lime/30 relative rounded-xl px-4 py-3.5 ring-1 ring-white/35 transition-colors duration-300">
                <div className="from-brand-lime/0 group-hover:from-brand-lime/12 pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="text-brand-blue group-hover:text-brand-green relative text-sm font-semibold tracking-tight transition-colors duration-300 md:text-base">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
