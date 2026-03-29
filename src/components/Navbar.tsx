import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ADVISORY_SERVICE_GROUPS } from "../data/advisoryServiceCatalog";

const navItemClass =
  "relative text-xs md:text-sm font-bold uppercase tracking-widest text-brand-light-blue/80 hover:text-brand-green transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const close = (e: MouseEvent) => {
      if (
        servicesWrapRef.current &&
        !servicesWrapRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", close);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <nav
      className={`fixed top-6 right-0 left-0 z-50 flex justify-center transition-all duration-500`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`flex flex-col items-center gap-4 rounded-full px-6 py-3 transition-all duration-500 md:flex-row md:gap-10 md:px-8 md:py-3.5 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-black/15"
            : "glass-light shadow-xl shadow-black/8"
        }`}
      >
        <div className="border-brand-blue/40 flex items-center gap-3 md:border-r md:pr-6">
          <img
            src="/assets/logo.svg"
            alt="Pragvo Logo"
            className="h-10 w-10 rounded-full md:h-12 md:w-12"
          />
          <span className="text-brand-blue text-lg font-bold tracking-tighter uppercase md:text-xl">
            Pragvo Advisors
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-8">
          <div
            className="relative"
            ref={servicesWrapRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left ${navItemClass} ${
                servicesOpen ? "!text-brand-green after:!w-full" : ""
              }`}
            >
              Services
              <ChevronDown
                className={`size-[0.85em] shrink-0 opacity-80 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden
                strokeWidth={2.5}
              />
            </button>

            {servicesOpen && (
              <div
                className="z-[60] max-md:fixed max-md:inset-x-4 max-md:top-[7.75rem] max-md:w-auto max-md:pt-0 md:absolute md:top-full md:left-1/2 md:w-80 md:-translate-x-1/2 md:pt-3"
                role="presentation"
              >
                <div
                  className="border-brand-light-blue/20 max-h-[min(38rem,75vh)] overflow-y-auto rounded-2xl border bg-white/95 py-2 shadow-2xl backdrop-blur-md"
                  role="menu"
                >
                  {ADVISORY_SERVICE_GROUPS.map((group, gi) => (
                    <div
                      key={group.category}
                      className={
                        gi > 0
                          ? "border-brand-light-blue/10 mt-1 border-t pt-1"
                          : ""
                      }
                    >
                      <div className="text-brand-teal/80 px-3 py-2 text-[10px] font-bold tracking-wider">
                        {group.category}
                      </div>
                      {group.services.map((s) => (
                        <a
                          key={s.id}
                          href={`#service-${s.id}`}
                          role="menuitem"
                          className="text-brand-blue hover:bg-brand-green/10 hover:text-brand-green block px-4 py-2 text-left text-xs font-semibold tracking-normal normal-case transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#track-record" className={navItemClass}>
            Track Record
          </a>
          <a href="#contact" className={navItemClass}>
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
