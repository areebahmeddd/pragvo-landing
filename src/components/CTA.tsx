import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Mail, Linkedin, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-brand-charcoal to-black text-white pt-20 pb-8 rounded-t-[3rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-charcoal/40 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-[0.95]">
            Let's plan your next move.
          </h2>
          <a
            href="#contact"
            className="group relative px-6 py-2.5 bg-brand-green text-black text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 pb-6 text-center md:text-left">
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
              Location
            </h3>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-base font-semibold mb-0.5">Bangalore</p>
                <p className="text-white/50 text-sm">Office Park</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
              Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919311142495"
                  className="text-base hover:text-brand-green transition-colors"
                >
                  +91 93111-42495
                </a>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@pragvo.in"
                  className="text-base hover:text-brand-green transition-colors"
                >
                  info@pragvo.in
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
              Connect
            </h3>
            <div className="flex items-center gap-3 justify-center md:justify-start">
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
                href="https://instagram.com/pragvo-advisors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
              Legal
            </h3>
            <div className="flex flex-col items-center md:items-start">
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
  );
}
