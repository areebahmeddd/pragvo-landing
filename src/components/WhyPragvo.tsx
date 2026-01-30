import { motion } from 'framer-motion';

export default function WhyPragvo() {
  const features = [
    {
      title: 'Conflict-Free',
      text: 'Independence is our core asset. Our advice is aligned solely with your mandate.',
    },
    {
      title: 'No Delegation',
      text: 'We do not delegate execution to junior staff. Mandates are partner-handled.',
    },
    {
      title: 'Global Intel',
      text: 'Cross-border reach with deep local regulatory and cultural nuance.',
    },
    {
      title: 'Execution Speed',
      text: 'Lean structure designed for rapid turnaround and transaction velocity.',
    },
  ];

  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue tracking-tighter leading-[0.95] mb-6">
              Senior attention. <br /> Uncompromised.
            </h2>
            <p className="text-base md:text-lg text-brand-light-blue/80 font-light leading-relaxed">
              We operate at the intersection of capital strategy and human talent, delivering the
              direct attention of seasoned partners to every mandate.
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
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-green bg-white shadow-sm flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-xl font-black text-brand-green">{idx + 1}</span>
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-base font-black text-brand-blue uppercase tracking-widest mb-2">
                      {item.title}
                    </h4>
                    <p className="text-base text-brand-light-blue/70 font-light leading-relaxed">
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
