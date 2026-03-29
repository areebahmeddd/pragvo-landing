import { motion } from "framer-motion";
import SectionBackdrop from "./SectionBackdrop";

export default function WhyPragvo() {
  const features = [
    {
      title: "Conflict-Free",
      text: "Independence is our core asset. Our advice is aligned solely with your objectives on each IB or HR engagement.",
    },
    {
      title: "No Delegation",
      text: "We do not delegate execution to junior staff. IB transactions and HR advisory work are partner-led end to end.",
    },
    {
      title: "Global Intel",
      text: "Cross-border reach with deep local regulatory and cultural nuance.",
    },
    {
      title: "Execution Speed",
      text: "Lean structure designed for rapid turnaround and transaction velocity.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12">
      <SectionBackdrop
        imageSrc="/assets/photos/hero-city.jpg"
        strength="clear"
        readableTint="content"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl leading-[0.95] font-extrabold tracking-tighter text-white md:text-6xl">
              Senior attention. <br /> Uncompromised.
            </h2>
            <p className="text-base leading-relaxed font-normal text-white/85 md:text-lg">
              We operate at the intersection of capital strategy and human
              talent, delivering the direct attention of seasoned partners to
              every IB transaction and HR advisory engagement.
            </p>
          </motion.div>

          <div className="space-y-3">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="surface-glass-tile group ring-brand-blue/12 cursor-default rounded-xl p-4 ring-1 md:p-5"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="border-brand-lime ring-brand-blue/10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 bg-gradient-to-br from-white to-slate-200/90 shadow-md ring-1"
                  >
                    <span className="text-brand-green text-lg font-black md:text-xl">
                      {idx + 1}
                    </span>
                  </motion.div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h4 className="text-brand-blue mb-1.5 text-sm font-black tracking-widest uppercase md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-brand-light-blue/85 text-sm leading-relaxed md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
