import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-500`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`flex flex-col md:flex-row items-center gap-4 md:gap-10 px-6 md:px-8 py-3 md:py-3.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-2xl shadow-black/15'
            : 'glass-light shadow-xl shadow-black/8'
        }`}
      >
        <div className="md:pr-6 md:border-r border-brand-blue/40 flex items-center gap-2">
          <img
            src="/assets/logo.svg"
            alt="Pragvo Logo"
            className="w-6 h-6 md:w-7 md:h-7 rounded-full"
          />
          <span className="text-brand-blue font-bold text-sm md:text-base tracking-tighter uppercase">
            Pragvo Advisors
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-brand-light-blue/80 uppercase tracking-widest">
          <a
            href="#services"
            className="relative hover:text-brand-green transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </a>
          <a
            href="#track-record"
            className="relative hover:text-brand-green transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Track Record
          </a>
          <a
            href="#contact"
            className="relative hover:text-brand-green transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
