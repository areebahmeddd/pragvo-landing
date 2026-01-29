import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-sm w-full p-6 relative border border-black/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-black/60 hover:text-black transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-black mb-1">Let's Connect</h3>
                <p className="text-black/60 text-xs font-light">
                  Reach out to discuss your next strategic move.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+919311142495"
                  className="flex items-center gap-3 p-3 rounded-xl glass-light border border-black/5 hover:border-black/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
                    <Phone size={16} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-black/50 uppercase tracking-wider">
                      Phone
                    </div>
                    <div className="text-sm font-semibold text-black">+91 93111-42495</div>
                  </div>
                </a>

                <a
                  href="mailto:info@pragvo.in"
                  className="flex items-center gap-3 p-3 rounded-xl glass-light border border-black/5 hover:border-black/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
                    <Mail size={16} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-black/50 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="text-sm font-semibold text-black">info@pragvo.in</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl glass-light border border-black/5">
                  <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
                    <MapPin size={16} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-black/50 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-black">New Delhi, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-[10px] text-black/50 text-center leading-relaxed">
                  We typically respond within 24 hours (Mon - Fri).
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
