import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-transparent py-12">
      <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-blue mb-6 text-4xl leading-[0.95] font-extrabold tracking-tighter md:text-6xl">
              Senior attention. <br /> Uncompromised.
            </h2>
            <p className="text-brand-light-blue/80 text-base leading-relaxed font-light md:text-lg">
              We operate at the intersection of capital strategy and human
              talent, delivering the direct attention of seasoned partners to
              every IB transaction and HR advisory engagement.
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-default"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="border-brand-green flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm transition-all duration-300"
                  >
                    <span className="text-brand-green text-xl font-black">
                      {idx + 1}
                    </span>
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-brand-blue mb-2 text-base font-black tracking-widest uppercase">
                      {item.title}
                    </h4>
                    <p className="text-brand-light-blue/70 text-base leading-relaxed font-light">
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
