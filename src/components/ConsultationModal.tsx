import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ChevronDown,
  Mail,
  MessageSquareText,
  Phone,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ADVISORY_SERVICE_GROUPS } from "../data/advisoryServiceCatalog";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!isOpen) {
      setIsDropdownOpen(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!isDropdownOpen) return;
      const target = e.target as HTMLElement;
      if (!target.closest(".service-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, isDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not specified",
        services:
          formData.services.length > 0
            ? allServices
                .filter((s) => formData.services.includes(s.value))
                .map((s) => s.label)
                .join(", ")
            : "Not specified",
        message: formData.message || "No additional message provided",
        submission_date: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "short",
        }),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const serviceCategories = ADVISORY_SERVICE_GROUPS.map((g) => ({
    category: g.category,
    services: g.services.map((s) => ({ value: s.id, label: s.title })),
  }));

  const allServices = serviceCategories.flatMap((cat) => cat.services);

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
          <div
            className="relative flex min-h-0 flex-1 justify-center overflow-y-auto overscroll-y-contain px-4 pt-28 pb-12 sm:pt-32"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="surface-elevated border-brand-light-blue/25 relative my-auto w-full max-w-md overflow-visible rounded-3xl p-6 shadow-xl backdrop-blur-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className="text-brand-light-blue/60 hover:text-brand-blue absolute top-4 right-4 z-10 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-5">
                <h3
                  id="consultation-modal-title"
                  className="text-brand-blue mb-1 text-2xl font-bold"
                >
                  Schedule Consultation
                </h3>
                <p className="text-brand-light-blue/70 text-xs font-light">
                  We usually reply within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="text-brand-light-blue/60 pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="surface-input text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg py-2.5 pr-3 pl-10 text-sm transition-colors"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="text-brand-light-blue/60 pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="surface-input text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg py-2.5 pr-3 pl-10 text-sm transition-colors"
                      placeholder="email@company.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="text-brand-light-blue/60 pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="surface-input text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg py-2.5 pr-3 pl-10 text-sm transition-colors"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
                  >
                    Company
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="text-brand-light-blue/60 pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="surface-input text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg py-2.5 pr-3 pl-10 text-sm transition-colors"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="service-dropdown relative">
                  <label className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase">
                    Services of Interest *
                  </label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="surface-input text-brand-blue flex min-h-[42px] w-full cursor-pointer items-center overflow-x-auto rounded-lg px-3 py-2.5 text-sm transition-colors"
                  >
                    <div className="flex-1 overflow-x-auto pr-2">
                      {formData.services.length === 0 ? (
                        <span className="text-brand-light-blue/40">
                          Select services
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {formData.services.map((serviceValue) => (
                            <span
                              key={serviceValue}
                              className="bg-brand-green/10 border-brand-green/30 text-brand-green inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs font-semibold"
                            >
                              {
                                allServices.find(
                                  (s) => s.value === serviceValue,
                                )?.label
                              }
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleService(serviceValue);
                                }}
                                className="hover:text-brand-green/70"
                              >
                                <X size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ChevronDown
                      size={18}
                      className="text-brand-light-blue/60 pointer-events-none flex-shrink-0"
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="surface-glass-popover absolute top-full right-0 left-0 z-20 mt-1 max-h-56 overflow-y-auto overscroll-contain rounded-lg shadow-lg ring-1 ring-black/10">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={category.category}>
                          <div className="text-brand-teal/70 px-3 py-2 text-xs font-bold tracking-wider uppercase">
                            {category.category}
                          </div>
                          {category.services.map((service) => (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => toggleService(service.value)}
                              className="hover:bg-brand-green/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2 pl-6 text-left text-sm transition-colors"
                            >
                              <span className="border-brand-green/40 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border">
                                {formData.services.includes(service.value) && (
                                  <span className="bg-brand-green block h-2.5 w-2.5 rounded-sm" />
                                )}
                              </span>
                              <span className="text-brand-blue">
                                {service.label}
                              </span>
                            </button>
                          ))}
                          {categoryIndex < serviceCategories.length - 1 && (
                            <div className="border-brand-light-blue/10 my-1 border-t" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquareText
                      size={16}
                      className="text-brand-light-blue/60 pointer-events-none absolute top-4 left-3 z-10"
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="surface-input text-brand-blue placeholder:text-brand-light-blue/40 min-h-[5.5rem] w-full resize-none rounded-lg py-2.5 pr-3 pl-10 text-sm transition-colors"
                      placeholder="Brief description of your requirements"
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Request submitted. We will get back to you shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    Something went wrong. Please try again or email
                    info@pragvo.in
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="from-brand-green to-brand-lime hover:shadow-brand-green/30 mt-2 w-full rounded-full bg-gradient-to-r py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
