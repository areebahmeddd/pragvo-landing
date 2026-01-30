import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Mail, Linkedin, Twitter, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConsultationModal from './ConsultationModal';

export default function CTA() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <section
        id="contact"
        className="bg-gradient-to-b from-brand-charcoal to-black text-white pt-12 pb-6 rounded-t-[3rem] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-charcoal/40 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight leading-[0.95]">
              Let's plan your next move.
            </h2>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-brand-green to-brand-lime text-white text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-green/30 overflow-hidden"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/10 pt-6 pb-4 text-left">
            <div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold mb-0.5">New Delhi</p>
                  <p className="text-white/50 text-sm">Office Park</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">
                Contact
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+919311142495"
                    className="text-base hover:text-white/80 transition-colors"
                  >
                    +91 93111-42495
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@pragvo.in"
                    className="text-base hover:text-white/80 transition-colors"
                  >
                    info@pragvo.in
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">
                Connect
              </h3>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://linkedin.com/company/pragvo-advisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.a>
                <motion.a
                  href="https://x.com/pragvo-advisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">
                Legal
              </h3>
              <div className="flex flex-col items-start">
                <p className="text-sm text-white/40 mb-2">
                  © {new Date().getFullYear()} Pragvo Advisors LLP
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-white/40 hover:text-white/60 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-of-service"
                    className="text-sm text-white/40 hover:text-white/60 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
