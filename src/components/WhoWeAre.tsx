import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="py-12 bg-transparent relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.4em] text-black/50 uppercase mb-6 block decoration-brand-green-dark underline underline-offset-8 decoration-2">
              Our Identity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter leading-none mb-10">
              Senior attention, <br /> uncompromised <br /> independence.
            </h2>
            <div className="h-24 w-[2px] bg-gradient-to-b from-brand-green to-transparent hidden lg:block"></div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <p className="text-lg md:text-xl text-black/70 font-light leading-snug">
              Pragvo Advisors operates at the intersection of capital strategy and human talent. We
              are built for institutions that require the direct, uninterrupted attention of
              seasoned partners.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-default"
              >
                <div className="h-[2px] w-12 bg-brand-green/60 group-hover:w-20 group-hover:bg-brand-green transition-all duration-500 mb-6"></div>
                <h4 className="text-base font-bold text-black uppercase tracking-widest mb-3">
                  Conflict-Free
                </h4>
                <p className="text-base text-black/60 font-light leading-relaxed">
                  Independence is our core asset. We ensure every piece of advice is aligned solely
                  with your long-term mandate.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="group cursor-default"
              >
                <div className="h-[2px] w-12 bg-brand-green/60 group-hover:w-20 group-hover:bg-brand-green transition-all duration-500 mb-6"></div>
                <h4 className="text-base font-bold text-black uppercase tracking-widest mb-3">
                  No Delegation
                </h4>
                <p className="text-base text-black/60 font-light leading-relaxed">
                  Mandates are handled exclusively by partners. We do not delegate execution to
                  junior staff.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-brand-green"></div>
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent"></div>
        <div className="w-2 h-2 rounded-full bg-brand-green"></div>
      </div>
    </section>
  );
}
