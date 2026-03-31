import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ADVISORY_SERVICE_GROUPS } from "../data/advisoryServiceCatalog";

const navItemClass =
  "relative shrink-0 text-[10px] font-bold uppercase tracking-wide text-brand-light-blue/80 hover:text-brand-green transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full md:text-xs md:tracking-widest lg:text-sm";

const navBarSurfaceClass =
  "glass-strong shadow-2xl shadow-black/12 ring-1 ring-black/[0.06]";

const MENU_WIDTH = 320;
/** Above sticky nav (100), below modals (200). */
const MENU_Z = 160;

type MenuBox = { top: number; left: number; width: number };

export default function Navbar() {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuBox, setMenuBox] = useState<MenuBox | null>(null);

  const navSurfaceRef = useRef<HTMLDivElement>(null);
  const triggerWrapRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeServices = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(false);
  }, []);

  const openServices = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
      closeTimerRef.current = null;
    }, 200);
  }, []);

  const placeMenu = useCallback(() => {
    const el = triggerWrapRef.current;
    if (!el) return;
    const width = Math.min(MENU_WIDTH, window.innerWidth - 24);
    const isMobile = window.innerWidth < 768;
    const anchorRect = isMobile
      ? (navSurfaceRef.current?.getBoundingClientRect() ??
        el.getBoundingClientRect())
      : el.getBoundingClientRect();
    const left = Math.max(
      12,
      Math.min(
        anchorRect.left + anchorRect.width / 2 - width / 2,
        window.innerWidth - width - 12,
      ),
    );
    const top = anchorRect.bottom + 8;
    setMenuBox({ top, left, width });
  }, []);

  useLayoutEffect(() => {
    if (!servicesOpen) {
      setMenuBox(null);
      return;
    }
    placeMenu();
    const onWin = () => placeMenu();
    window.addEventListener("resize", onWin);
    window.addEventListener("scroll", onWin, true);
    return () => {
      window.removeEventListener("resize", onWin);
      window.removeEventListener("scroll", onWin, true);
    };
  }, [servicesOpen, placeMenu]);

  useEffect(() => {
    if (!servicesOpen) return;
    let removeDoc: (() => void) | undefined;
    const frame = requestAnimationFrame(() => {
      const onDoc = (e: PointerEvent) => {
        const t = e.target as Node;
        if (triggerWrapRef.current?.contains(t)) return;
        if (menuPanelRef.current?.contains(t)) return;
        closeServices();
      };
      document.addEventListener("pointerdown", onDoc);
      removeDoc = () => document.removeEventListener("pointerdown", onDoc);
    });
    return () => {
      cancelAnimationFrame(frame);
      removeDoc?.();
    };
  }, [servicesOpen, closeServices]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeServices();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen, closeServices]);

  const goService = (serviceId: string) => {
    closeServices();
    navigate({ pathname: "/", hash: `#service-${serviceId}` });
  };

  const menuLayout = menuBox ?? {
    top: 72,
    left: 12,
    width:
      typeof window !== "undefined"
        ? Math.min(MENU_WIDTH, window.innerWidth - 24)
        : MENU_WIDTH,
  };

  const servicesMenu =
    servicesOpen &&
    createPortal(
      <div
        ref={menuPanelRef}
        className="surface-glass-panel fixed max-h-[min(38rem,75vh)] overflow-y-auto rounded-2xl py-2 shadow-2xl"
        style={{
          zIndex: MENU_Z,
          top: menuLayout.top,
          left: menuLayout.left,
          width: menuLayout.width,
        }}
        role="menu"
        onMouseEnter={openServices}
        onMouseLeave={scheduleCloseServices}
      >
        {ADVISORY_SERVICE_GROUPS.map((group, gi) => (
          <div
            key={group.category}
            className={
              gi > 0 ? "border-brand-light-blue/10 mt-1 border-t pt-1" : ""
            }
          >
            <div className="text-brand-teal px-3 py-2 text-[10px] font-bold tracking-wider">
              {group.category}
            </div>
            {group.services.map((s) => (
              <button
                key={s.id}
                type="button"
                role="menuitem"
                className="text-brand-blue hover:bg-brand-green/10 hover:text-brand-green block w-full px-4 py-2 text-left text-xs font-semibold tracking-normal normal-case transition-colors"
                onClick={() => goService(s.id)}
              >
                {s.title}
              </button>
            ))}
          </div>
        ))}
      </div>,
      document.body,
    );

  return (
    <nav
      className="fixed top-3 right-0 left-0 z-[100] flex justify-center px-3 md:top-6 md:px-0"
      aria-label="Main"
    >
      {servicesMenu}
      <motion.div
        ref={navSurfaceRef}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className={`flex max-w-full flex-row items-center justify-between gap-2 rounded-full py-2 pr-3 pl-3 md:gap-7 md:py-2 md:pr-5 md:pl-5 ${navBarSurfaceClass}`}
      >
        <Link
          to="/"
          className="border-brand-blue/40 flex min-w-0 shrink items-center gap-2 md:gap-2.5 md:border-r md:pr-4"
          onClick={closeServices}
        >
          <img
            src="/assets/logo.svg"
            alt=""
            className="h-8 w-8 shrink-0 rounded-full md:h-10 md:w-10"
            decoding="async"
          />
          <span className="text-brand-blue max-w-[5.5rem] truncate text-xs font-bold tracking-tighter uppercase sm:max-w-none md:text-lg">
            <span className="md:hidden">Pragvo</span>
            <span className="hidden md:inline">Pragvo Advisors</span>
          </span>
        </Link>

        <div className="flex max-w-[calc(100vw-8.5rem)] min-w-0 shrink-0 items-center gap-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:max-w-none md:gap-5 lg:gap-7 [&::-webkit-scrollbar]:hidden">
          <Link
            to={{ pathname: "/", hash: "#about" }}
            className={`shrink-0 whitespace-nowrap ${navItemClass}`}
            onClick={closeServices}
          >
            About
          </Link>

          <div
            className="relative flex shrink-0 items-center"
            ref={triggerWrapRef}
            onMouseEnter={() => {
              if (
                window.matchMedia("(hover: hover) and (min-width: 768px)")
                  .matches
              ) {
                openServices();
              }
            }}
            onMouseLeave={() => {
              if (
                window.matchMedia("(hover: hover) and (min-width: 768px)")
                  .matches
              ) {
                scheduleCloseServices();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() =>
                setServicesOpen((open) => {
                  const next = !open;
                  if (next) {
                    if (closeTimerRef.current) {
                      clearTimeout(closeTimerRef.current);
                      closeTimerRef.current = null;
                    }
                  }
                  return next;
                })
              }
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
          </div>

          <Link
            to={{ pathname: "/", hash: "#team" }}
            className={`shrink-0 whitespace-nowrap ${navItemClass}`}
            onClick={closeServices}
          >
            Team
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
