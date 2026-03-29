import { motion } from "framer-motion";
import SectionBackdrop from "./SectionBackdrop";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden py-12">
      <SectionBackdrop
        imageSrc="/assets/photos/team-collaboration.jpg"
        strength="clear"
        readableTint="content"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-brand-lime decoration-brand-green mb-6 block text-xs font-bold tracking-[0.4em] uppercase underline decoration-2 underline-offset-8">
              Our Identity
            </span>
            <h2 className="mb-10 text-4xl leading-none font-bold tracking-tighter text-white md:text-5xl">
              Senior attention, <br /> uncompromised <br /> independence.
            </h2>
            <div className="from-brand-lime/70 hidden h-24 w-px bg-gradient-to-b to-transparent lg:block"></div>
          </div>

          <div className="space-y-10 lg:col-span-7">
            <p className="text-lg leading-relaxed font-normal text-white/88 md:text-xl">
              Pragvo Advisors operates at the intersection of capital strategy
              and human talent. We are built for institutions that require the
              direct, uninterrupted attention of seasoned partners.
            </p>

            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/20 lg:mb-10">
              <img
                src="/assets/photos/strategy-session.jpg"
                alt=""
                className="h-52 w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="grid gap-12 pt-8 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="surface-glass-tile group ring-brand-blue/10 cursor-default rounded-2xl p-6 ring-1"
              >
                <div className="from-brand-green to-brand-teal/80 mb-6 h-0.5 w-12 bg-gradient-to-r transition-all duration-500 group-hover:w-20"></div>
                <h4 className="text-brand-blue mb-3 text-base font-bold tracking-widest uppercase">
                  Conflict-Free
                </h4>
                <p className="text-base leading-relaxed text-slate-600">
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
                className="surface-glass-tile group ring-brand-blue/10 cursor-default rounded-2xl p-6 ring-1"
              >
                <div className="from-brand-green to-brand-teal/80 mb-6 h-0.5 w-12 bg-gradient-to-r transition-all duration-500 group-hover:w-20"></div>
                <h4 className="text-brand-blue mb-3 text-base font-bold tracking-widest uppercase">
                  No Delegation
                </h4>
                <p className="text-base leading-relaxed text-slate-600">
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
