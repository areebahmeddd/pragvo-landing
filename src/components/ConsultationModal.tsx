import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, User, Mail, Phone, Briefcase, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    message: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isDropdownOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest('.service-dropdown')) {
          setIsDropdownOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, isDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not specified',
        services:
          formData.services.length > 0
            ? allServices
                .filter(s => formData.services.includes(s.value))
                .map(s => s.label)
                .join(', ')
            : 'Not specified',
        message: formData.message || 'No additional message provided',
        submission_date: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short',
        }),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', services: [], message: '' });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const serviceCategories = [
    {
      category: 'Investment Banking',
      services: [
        { value: 'debt-capital', label: 'Debt Capital Markets' },
        { value: 'equity-capital', label: 'Equity Capital Markets' },
        { value: 'ma', label: 'Mergers & Acquisitions' },
      ],
    },
    {
      category: 'HR Advisory',
      services: [
        { value: 'talent-acquisition', label: 'Talent Acquisition' },
        { value: 'talent-development', label: 'Talent Development' },
        { value: 'org-design', label: 'Organization Design' },
        { value: 'hris', label: 'HRIS Implementation' },
        { value: 'performance-mgmt', label: 'Performance Management' },
        { value: 'compensation', label: 'Compensation & Rewards' },
      ],
    },
  ];

  const allServices = serviceCategories.flatMap(cat => cat.services);

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
            className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-md w-full p-6 relative shadow-2xl my-8 overflow-x-hidden border border-black/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-black/60 hover:text-black transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-5">
                <h3 className="text-2xl font-bold text-black mb-1">Schedule Consultation</h3>
                <p className="text-black/60 text-xs font-light">
                  We'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
                      size={16}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-black/10 outline-none transition-colors text-sm text-black placeholder:text-black/30"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
                      size={16}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-black/10 outline-none transition-colors text-sm text-black placeholder:text-black/30"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
                      size={16}
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-black/10 outline-none transition-colors text-sm text-black placeholder:text-black/30"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5"
                  >
                    Company
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
                      size={16}
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-black/10 outline-none transition-colors text-sm text-black placeholder:text-black/30"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="relative service-dropdown">
                  <label className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5">
                    Services of Interest *
                  </label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-3 py-2.5 rounded-lg border border-black/10 outline-none cursor-pointer transition-colors text-sm text-black bg-white min-h-[42px] flex items-center justify-between overflow-x-auto"
                  >
                    <div className="flex-1 overflow-x-auto">
                      {formData.services.length === 0 ? (
                        <span className="text-black/30">Select services</span>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {formData.services.map(serviceValue => (
                            <span
                              key={serviceValue}
                              className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-black/20 text-black rounded text-xs"
                            >
                              {allServices.find(s => s.value === serviceValue)?.label}
                              <button
                                type="button"
                                onClick={e => {
                                  e.stopPropagation();
                                  toggleService(serviceValue);
                                }}
                                className="hover:text-black/70"
                              >
                                <X size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-black/60 flex-shrink-0 ml-2 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-black/10 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={category.category}>
                          <div className="px-3 py-2 text-xs font-bold text-black/50 uppercase tracking-wider">
                            {category.category}
                          </div>
                          {category.services.map(service => (
                            <div
                              key={service.value}
                              onClick={() => toggleService(service.value)}
                              className="px-3 py-2 hover:bg-black/5 cursor-pointer transition-colors flex items-center gap-2 text-sm pl-6"
                            >
                              <div className="w-4 h-4 border border-black/20 rounded flex items-center justify-center">
                                {formData.services.includes(service.value) && (
                                  <div className="w-2.5 h-2.5 bg-black rounded-sm" />
                                )}
                              </div>
                              <span className="text-black">{service.label}</span>
                            </div>
                          ))}
                          {categoryIndex < serviceCategories.length - 1 && (
                            <div className="border-t border-black/5 my-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold text-black/70 uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-black/40" size={16} />
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-black/10 outline-none transition-colors text-sm text-black placeholder:text-black/30 resize-none"
                      placeholder="Brief description of your requirements"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                    Request submitted successfully! We'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                    Failed to submit. Please try again or email us directly at info@pragvo.in
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="w-full bg-black text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-black/90 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
