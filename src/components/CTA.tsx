import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConsultationModal from "./ConsultationModal";

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
        className="from-brand-charcoal relative overflow-hidden rounded-t-[3rem] bg-gradient-to-b to-black pt-12 pb-6 text-white"
      >
        <div className="from-brand-charcoal/40 absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="mb-3 text-4xl leading-[0.95] font-bold tracking-tight md:text-5xl">
              Let's plan your next move.
            </h2>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="group from-brand-green to-brand-lime hover:shadow-brand-green/30 relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 pb-4 text-left md:grid-cols-4">
            <div>
              <h3 className="mb-2 text-xs font-bold tracking-widest text-white/60 uppercase">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <p className="text-base font-semibold">New Delhi</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-bold tracking-widest text-white/60 uppercase">
                Contact
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <a
                    href="tel:+919311142495"
                    className="text-base transition-colors hover:text-white/80"
                  >
                    +91 93111-42495
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <a
                    href="mailto:info@pragvo.in"
                    className="text-base transition-colors hover:text-white/80"
                  >
                    info@pragvo.in
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-bold tracking-widest text-white/60 uppercase">
                Connect
              </h3>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://linkedin.com/company/pragvo-advisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </motion.a>
                <motion.a
                  href="https://x.com/pragvo-advisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-bold tracking-widest text-white/60 uppercase">
                Legal
              </h3>
              <div className="flex flex-col items-start">
                <p className="mb-2 text-sm text-white/40">
                  © {new Date().getFullYear()} Pragvo Advisors LLP
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-white/40 transition-colors hover:text-white/60"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-of-service"
                    className="text-sm text-white/40 transition-colors hover:text-white/60"
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
