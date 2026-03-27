import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  Mail,
  MessageSquare,
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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isDropdownOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest(".service-dropdown")) {
          setIsDropdownOpen(false);
        }
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
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="border-brand-light-blue/20 relative my-8 w-full max-w-md overflow-x-hidden rounded-3xl border bg-white/95 p-6 shadow-2xl backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="text-brand-light-blue/60 hover:text-brand-blue absolute top-4 right-4 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-5">
                <h3 className="text-brand-blue mb-1 text-2xl font-bold">
                  Schedule Consultation
                </h3>
                <p className="text-brand-light-blue/70 text-xs font-light">
                  We'll get back to you within 24 hours.
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
                      className="text-brand-teal/60 absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg border bg-white/50 py-2.5 pr-3 pl-10 text-sm transition-colors outline-none"
                      placeholder="Your name"
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
                      className="text-brand-teal/60 absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg border bg-white/50 py-2.5 pr-3 pl-10 text-sm transition-colors outline-none"
                      placeholder="email@company.com"
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
                      className="text-brand-teal/60 absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg border bg-white/50 py-2.5 pr-3 pl-10 text-sm transition-colors outline-none"
                      placeholder="+91 00000 00000"
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
                    <Briefcase
                      className="text-brand-teal/60 absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue placeholder:text-brand-light-blue/40 w-full rounded-lg border bg-white/50 py-2.5 pr-3 pl-10 text-sm transition-colors outline-none"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="service-dropdown relative">
                  <label className="text-brand-light-blue/80 mb-1.5 block text-[10px] font-bold tracking-wider uppercase">
                    Services of Interest *
                  </label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue flex min-h-[42px] w-full cursor-pointer items-center justify-between overflow-x-auto rounded-lg border bg-white/50 px-3 py-2.5 text-sm transition-colors outline-none"
                  >
                    <div className="flex-1 overflow-x-auto">
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
                      size={16}
                      className={`text-brand-teal/70 ml-2 flex-shrink-0 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="border-brand-light-blue/20 absolute top-full right-0 left-0 z-10 mt-1 max-h-[min(22rem,55vh)] overflow-y-auto rounded-lg border bg-white shadow-lg">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={category.category}>
                          <div className="text-brand-teal/70 px-3 py-2 text-xs font-bold tracking-wider uppercase">
                            {category.category}
                          </div>
                          {category.services.map((service) => (
                            <div
                              key={service.value}
                              onClick={() => toggleService(service.value)}
                              className="hover:bg-brand-green/5 flex cursor-pointer items-center gap-2 px-3 py-2 pl-6 text-sm transition-colors"
                            >
                              <div className="border-brand-green/40 flex h-4 w-4 items-center justify-center rounded border">
                                {formData.services.includes(service.value) && (
                                  <div className="bg-brand-green h-2.5 w-2.5 rounded-sm" />
                                )}
                              </div>
                              <span className="text-brand-blue">
                                {service.label}
                              </span>
                            </div>
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
                    <MessageSquare
                      className="text-brand-teal/60 absolute top-3 left-3"
                      size={16}
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-brand-light-blue/20 focus:border-brand-green/40 text-brand-blue placeholder:text-brand-light-blue/40 w-full resize-none rounded-lg border bg-white/50 py-2.5 pr-3 pl-10 text-sm transition-colors outline-none"
                      placeholder="Brief description of your requirements"
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Request submitted successfully! We'll get back to you within
                    24 hours.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    Failed to submit. Please try again or email us directly at
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
        </>
      )}
    </AnimatePresence>
  );
}
