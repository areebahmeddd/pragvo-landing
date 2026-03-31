import { motion } from "framer-motion";
import SectionBackdrop from "./SectionBackdrop";

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden py-14 md:py-20">
      <SectionBackdrop
        imageSrc="/assets/photos/strategy-session.jpg"
        strength="clear"
        readableTint="content"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-brand-lime decoration-brand-green mb-5 block text-xs font-bold tracking-[0.45em] uppercase underline decoration-2 underline-offset-8">
              About us
            </span>
            <h2 className="mb-6 text-4xl leading-[1.02] font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl">
              Who we are
            </h2>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="surface-glass-tile rounded-2xl p-6 shadow-xl ring-1 ring-white/40 backdrop-blur-md md:p-8"
            >
              <p className="text-brand-blue text-lg leading-relaxed font-normal md:text-xl">
                We are a bespoke HR consulting and investment banking advisory
                firm. We work with businesses on strategic people, governance,
                and organizational transformation. Our team brings over 80 years
                of combined experience in human resources, with cross-industry
                depth, a clear read on governance, and the ability to execute
                alongside you, not just advise from the sidelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="border-brand-lime/25 rounded-2xl border border-dashed bg-slate-950/35 p-6 backdrop-blur-sm md:p-7"
            >
              <p className="text-base leading-relaxed text-white/88 md:text-lg">
                We focus on quality over volume. We take on work where we can
                add real value: through solid diagnostics, evidence where it
                helps, and solutions that fit how you actually operate. We do
                not roll out standard templates. Each mandate is built around
                your strategy, how mature the organization is, and what you are
                trying to grow toward.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              We keep a cross-border view where it matters, with attention to
              local regulation and how teams actually work on the ground. We
              stay deliberately lean so decisions and follow-through do not get
              stuck in layers.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
