import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ADVISORY_SERVICE_GROUPS } from "../data/advisoryServiceCatalog";

const navItemClass =
  "relative shrink-0 text-[10px] font-bold uppercase tracking-wide text-brand-light-blue/80 hover:text-brand-green transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full md:text-xs md:tracking-widest lg:text-sm";

const navBarSurfaceClass =
  "glass-strong shadow-2xl shadow-black/12 ring-1 ring-black/[0.06]";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement>(null);

  const goToService = (serviceId: string) => {
    setServicesOpen(false);
    navigate({
      pathname: "/",
      search: location.pathname === "/" ? location.search : "",
      hash: `#service-${serviceId}`,
    });
  };

  useEffect(() => {
    if (!servicesOpen) return;

    const closeOnClickOutside = (e: MouseEvent) => {
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

    document.addEventListener("click", closeOnClickOutside);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", closeOnClickOutside);
      window.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <nav
      className="fixed top-3 right-0 left-0 z-[100] flex justify-center px-3 md:top-6 md:px-0"
      aria-label="Main"
    >
      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className={`flex max-w-full flex-row items-center justify-between gap-2 rounded-full py-2 pr-2 pl-3 md:gap-10 md:py-3.5 md:pr-8 md:pl-8 ${navBarSurfaceClass}`}
      >
        <div className="border-brand-blue/40 flex min-w-0 shrink items-center gap-2 md:gap-3 md:border-r md:pr-6">
          <img
            src="/assets/logo.svg"
            alt=""
            className="h-8 w-8 shrink-0 rounded-full md:h-12 md:w-12"
            decoding="async"
          />
          <span className="text-brand-blue max-w-[5.5rem] truncate text-xs font-bold tracking-tighter uppercase sm:max-w-none md:text-xl">
            <span className="md:hidden">Pragvo</span>
            <span className="hidden md:inline">Pragvo Advisors</span>
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 md:gap-8">
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
              className={`inline-flex cursor-pointer items-center gap-0.5 border-0 bg-transparent p-0 text-left whitespace-nowrap ${navItemClass} ${
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
                className="pointer-events-auto z-[110] max-md:fixed max-md:inset-x-3 max-md:top-[calc(env(safe-area-inset-top,0px)+3.75rem)] max-md:w-auto max-md:pt-0 md:absolute md:top-full md:left-1/2 md:w-80 md:-translate-x-1/2 md:pt-3"
                role="presentation"
              >
                <div
                  className="surface-glass-panel max-h-[min(38rem,75vh)] overflow-y-auto rounded-2xl py-2 shadow-2xl"
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
                      <div className="text-brand-teal px-3 py-2 text-[10px] font-bold tracking-wider">
                        {group.category}
                      </div>
                      {group.services.map((s) => (
                        <a
                          key={s.id}
                          href={`#service-${s.id}`}
                          role="menuitem"
                          className="text-brand-blue hover:bg-brand-green/10 hover:text-brand-green block px-4 py-2 text-left text-xs font-semibold tracking-normal normal-case transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            goToService(s.id);
                          }}
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

          <a
            href="#track-record"
            className={`whitespace-nowrap ${navItemClass}`}
            title="Track Record"
          >
            <span className="md:hidden">Track</span>
            <span className="hidden md:inline">Track Record</span>
          </a>
          <a href="#contact" className={`whitespace-nowrap ${navItemClass}`}>
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
