import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative flex min-h-0 flex-1 justify-center overflow-y-auto overscroll-y-contain px-4 pt-28 pb-12 sm:pt-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="surface-elevated relative my-auto w-full max-w-sm rounded-3xl p-6 backdrop-blur-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className="text-brand-light-blue/60 hover:text-brand-blue absolute top-4 right-4 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <h3 className="text-brand-blue mb-1 text-2xl font-bold">
                  Let's Connect
                </h3>
                <p className="text-brand-light-blue/70 text-xs font-light">
                  Reach out to discuss your next strategic move.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+919311142495"
                  className="surface-glass-tile group ring-brand-blue/12 hover:ring-brand-green/35 flex items-center gap-3 rounded-xl p-3 ring-1 transition-all duration-300"
                >
                  <div className="bg-brand-green/10 flex h-9 w-9 items-center justify-center rounded-full">
                    <Phone size={16} className="text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-light-blue/60 text-[10px] font-bold tracking-wider uppercase">
                      Phone
                    </div>
                    <div className="text-brand-blue text-sm font-semibold">
                      +91 93111-42495
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@pragvo.in"
                  className="surface-glass-tile group ring-brand-blue/12 hover:ring-brand-green/35 flex items-center gap-3 rounded-xl p-3 ring-1 transition-all duration-300"
                >
                  <div className="bg-brand-green/10 flex h-9 w-9 items-center justify-center rounded-full">
                    <Mail size={16} className="text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-light-blue/60 text-[10px] font-bold tracking-wider uppercase">
                      Email
                    </div>
                    <div className="text-brand-blue text-sm font-semibold">
                      info@pragvo.in
                    </div>
                  </div>
                </a>

                <div className="surface-glass-tile ring-brand-blue/12 flex items-center gap-3 rounded-xl p-3 ring-1">
                  <div className="bg-brand-green/10 flex h-9 w-9 items-center justify-center rounded-full">
                    <MapPin size={16} className="text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-light-blue/60 text-[10px] font-bold tracking-wider uppercase">
                      Location
                    </div>
                    <div className="text-brand-blue text-sm font-semibold">
                      New Delhi, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-black/10 pt-4">
                <p className="text-center text-[10px] leading-relaxed text-black/50">
                  We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
