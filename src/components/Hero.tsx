import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import ContactModal from "./ContactModal";
import SectionBackdrop from "./SectionBackdrop";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 pt-[5.5rem] md:py-32 md:pt-28">
        <SectionBackdrop
          imageSrc="/assets/photos/hero-city.jpg"
          strength="clear"
          readableTint="hero"
        />
        <div className="absolute right-0 bottom-0 left-0 z-[2] h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-5xl text-center text-5xl leading-[1.1] font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            <span className="text-white">Strategic Capital &</span>
            <br />
            <span className="relative inline-block text-white">
              HR Advisory
              <span
                className="bg-brand-lime absolute bottom-2 left-0 h-2.5 w-full rounded-full opacity-90"
                aria-hidden
              />
            </span>
            <br />
            <span className="text-white">for India&apos;s Growth Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed font-normal text-white/85 md:text-xl"
          >
            Strategic advisory for high-stakes capital transactions and human
            capital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group from-brand-green to-brand-lime relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r px-7 py-3 text-base font-bold tracking-tight text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get in touch</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
          <p className="mt-8 text-center text-xs leading-tight font-bold tracking-[0.3em] text-white/70 uppercase md:mt-10">
            Together Towards Tomorrow
          </p>
        </div>
      </section>
    </>
  );
}
