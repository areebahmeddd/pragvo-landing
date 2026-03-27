import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative bg-transparent py-12">
      <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-brand-teal/70 decoration-brand-green mb-6 block text-xs font-bold tracking-[0.4em] uppercase underline decoration-2 underline-offset-8">
              Our Identity
            </span>
            <h2 className="text-brand-blue mb-10 text-4xl leading-none font-bold tracking-tighter md:text-5xl">
              Senior attention, <br /> uncompromised <br /> independence.
            </h2>
            <div className="from-brand-green/40 hidden h-24 w-[2px] bg-gradient-to-b to-transparent lg:block"></div>
          </div>

          <div className="space-y-10 lg:col-span-7">
            <p className="text-brand-light-blue/80 text-lg leading-snug font-light md:text-xl">
              Pragvo Advisors operates at the intersection of capital strategy
              and human talent. We are built for institutions that require the
              direct, uninterrupted attention of seasoned partners.
            </p>

            <div className="grid gap-12 pt-8 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-default"
              >
                <div className="bg-brand-green/40 group-hover:bg-brand-green mb-6 h-[2px] w-12 transition-all duration-500 group-hover:w-20"></div>
                <h4 className="text-brand-blue mb-3 text-base font-bold tracking-widest uppercase">
                  Conflict-Free
                </h4>
                <p className="text-brand-light-blue/70 text-base leading-relaxed font-light">
                  Independence is our core asset. We ensure every piece of
                  advice is aligned solely with your long-term strategic
                  objectives.
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
                <div className="bg-brand-green/40 group-hover:bg-brand-green mb-6 h-[2px] w-12 transition-all duration-500 group-hover:w-20"></div>
                <h4 className="text-brand-blue mb-3 text-base font-bold tracking-widest uppercase">
                  No Delegation
                </h4>
                <p className="text-brand-light-blue/70 text-base leading-relaxed font-light">
                  IB transactions and HR advisory engagements are handled
                  exclusively by partners. We do not delegate execution to
                  junior staff.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
