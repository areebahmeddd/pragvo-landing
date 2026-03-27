import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import ContactModal from "./ContactModal";

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
      <section className="relative flex items-center justify-center overflow-hidden bg-transparent py-32 pt-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/logo.svg"
            alt=""
            className="h-[600px] w-[600px] object-contain opacity-[0.16] md:h-[800px] md:w-[800px]"
          />
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-brand-blue">Strategic Capital &</span>
            <br />
            <span className="text-brand-blue relative inline-block">
              HR Advisory
              <span className="bg-brand-green/30 absolute bottom-2 left-0 -z-10 h-6 w-full"></span>
            </span>
            <br />
            <span className="text-brand-blue">for India's Growth Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-light-blue/90 mx-auto mb-10 max-w-3xl text-lg leading-relaxed font-medium md:text-xl"
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
              className="group from-brand-green to-brand-lime hover:shadow-brand-green/30 relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r px-7 py-3 text-base font-bold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="relative z-10">Get in touch</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex max-w-[200px] -translate-x-1/2 flex-col items-center gap-2 text-center md:max-w-none md:flex-row md:gap-3">
          <span className="text-brand-light-blue/60 text-xs leading-tight font-bold tracking-[0.3em] uppercase">
            Together Towards Tomorrow
          </span>
        </div>
      </section>
    </>
  );
}
