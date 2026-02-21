import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-transparent pt-28">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/assets/logo.svg"
            alt=""
            className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.16] object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-brand-blue">Strategic Capital &</span>
            <br />
            <span className="text-brand-blue relative inline-block">
              HR Advisory
              <span className="absolute bottom-2 left-0 w-full h-6 bg-brand-green/30 -z-10"></span>
            </span>
            <br />
            <span className="text-brand-blue">for India's Growth Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-light-blue/90 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Strategic advisory for high-stakes capital transactions and human capital
            transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group relative bg-gradient-to-r from-brand-green to-brand-lime text-white px-7 py-3 flex items-center gap-3 text-base font-bold tracking-tight transition-all duration-300 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-green/30 overflow-hidden"
            >
              <span className="relative z-10">Get in touch</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-3 max-w-[200px] md:max-w-none text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-light-blue/60 uppercase leading-tight">
            Together Towards Tomorrow
          </span>
        </div>
      </section>
    </>
  );
}
