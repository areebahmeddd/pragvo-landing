import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CalendarRange,
  Gift,
  Globe,
  GraduationCap,
  Heart,
  IndianRupee,
  Layout,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  cloneElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import { useLocation } from "react-router-dom";
import { ADVISORY_SERVICE_GROUPS } from "../data/advisoryServiceCatalog";
import SectionBackdrop from "./SectionBackdrop";

interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  desc: string;
  subServices: string[];
  details?: string[];
}

function tabForServiceHash(hash: string): "HR" | "IB" | null {
  const m = hash.match(/^#service-(.+)$/);
  if (!m) return null;
  const serviceId = m[1];
  const group = ADVISORY_SERVICE_GROUPS.find((g) =>
    g.services.some((s) => s.id === serviceId),
  );
  return group?.tab ?? null;
}

function initialServicesTab(): "HR" | "IB" {
  if (typeof window === "undefined") return "IB";
  return tabForServiceHash(window.location.hash) ?? "IB";
}

function orderServicesByCatalog(
  cards: ServiceItem[],
  tab: "HR" | "IB",
): ServiceItem[] {
  const catalog = ADVISORY_SERVICE_GROUPS.find((g) => g.tab === tab)!.services;
  const byId = new Map(cards.map((s) => [s.id, s]));
  return catalog.map((c) => {
    const item = byId.get(c.id);
    if (!item) {
      throw new Error(
        `Services.tsx: add a Core Domains card for catalog id "${c.id}" (${c.title}).`,
      );
    }
    return { ...item, title: c.title };
  });
}

const _hrServiceCards: ServiceItem[] = [
  {
    id: "talent-acquisition",
    icon: <Search />,
    title: "Talent Acquisition",
    desc: "End-to-end recruitment solutions spanning executive search, specialist hiring, and scalable volume programs, aligned to business strategy and diversity goals.",
    subServices: [
      "EXECUTIVE SEARCH",
      "SPECIALIST HIRING",
      "VOLUME RECRUITMENT",
      "Cross-border / International Recruitment",
    ],
    details: [
      "Executive search for C-suite and senior leadership roles",
      "Specialist hiring across technical and domain expertise",
      "Scalable volume recruitment programs",
      "Employer branding strategy and implementation",
      "DEI-focused sourcing and talent pipeline development",
      "Structured interviews, scorecards, and quality-of-hire analytics",
    ],
  },
  {
    id: "talent-development",
    icon: <GraduationCap />,
    title: "Talent Development",
    desc: "Leadership development, role-based learning pathways, and succession frameworks that build future-ready capabilities across all levels.",
    subServices: [
      "LEADERSHIP PROGRAMS",
      "COACHING & MENTORING",
      "SUCCESSION PLANNING",
    ],
    details: [
      "Leadership development frameworks for emerging to senior leaders",
      "First-time manager and mid-level leadership tracks",
      "Executive coaching and mentoring programs",
      "Role-based competency mapping and learning pathways",
      "9-box talent reviews and critical role identification",
      "Individual development plans and succession pipeline design",
    ],
  },
  {
    id: "organization-design",
    icon: <Layout />,
    title: "Organization Design",
    desc: "Design of operating models, structures, and governance frameworks to enable strategy execution, clarity, and scalable growth.",
    subServices: [
      "OPERATING MODELS",
      "ROLE ARCHITECTURE",
      "GOVERNANCE FRAMEWORKS",
    ],
    details: [
      "Operating model design and optimization",
      "Organizational structure alignment with business strategy",
      "Role architecture and job family standardization",
      "Span of control and reporting structure optimization",
      "RACI matrix and decision-rights clarity",
      "Strategic workforce planning and change enablement",
    ],
  },
  {
    id: "hris-implementation-support",
    icon: <Settings />,
    title: "HRIS Implementation Support",
    desc: "End-to-end HR system transformation across vendor selection, configuration, data migration, deployment, and user adoption.",
    subServices: [
      "SYSTEM SELECTION",
      "CONFIGURATION & MIGRATION",
      "DEPLOYMENT & TRAINING",
    ],
    details: [
      "HRIS vendor evaluation and solution architecture design",
      "System configuration and workflow customization",
      "Data migration, cleansing, and integration support",
      "UAT, payroll parallel runs, and security validation",
      "Go-live execution and hypercare support",
      "Change management and user adoption programs",
    ],
  },
  {
    id: "performance-management",
    icon: <Target />,
    title: "Performance Management",
    desc: "Continuous performance frameworks aligning individual goals with business priorities through OKRs, feedback systems, and structured calibration.",
    subServices: [
      "OKR FRAMEWORKS",
      "FEEDBACK SYSTEMS",
      "CALIBRATION PROCESSES",
    ],
    details: [
      "OKR and KPI framework design and rollout",
      "Goal cascading and alignment mechanisms",
      "Continuous feedback and structured review systems",
      "Performance calibration and rating governance",
      "Manager enablement and process playbooks",
      "Performance analytics and pay-for-performance linkage",
    ],
  },
  {
    id: "compensation-rewards",
    icon: <Award />,
    title: "Compensation & Rewards",
    desc: "Market-aligned compensation strategies covering benchmarking, pay equity, incentive design, and total rewards governance.",
    subServices: ["BENCHMARKING", "INCENTIVE DESIGN", "TOTAL REWARDS"],
    details: [
      "Market benchmarking and salary band architecture",
      "Job leveling and internal equity frameworks",
      "Variable pay and incentive plan design (STI/LTI)",
      "Pay equity audits and remediation planning",
      "Total rewards strategy and communication",
      "Governance, compliance, and annual cycle management",
    ],
  },
  {
    id: "leadership-coaching-mentoring",
    icon: <Users />,
    title: "Leadership, Coaching & Mentoring",
    desc: "Structured leadership acceleration and coaching ecosystems that build confident leaders and embed a performance-driven culture.",
    subServices: [
      "LEADERSHIP ACCELERATION",
      "EXECUTIVE COACHING",
      "MENTORSHIP ECOSYSTEMS",
    ],
    details: [
      "Senior leadership and high-potential acceleration programs",
      "1:1 executive and transition coaching",
      "360° leadership assessments and behavioral diagnostics",
      "Leaders-as-coaches capability building",
      "Structured mentor–mentee program design",
      "Women leadership pipeline and reverse mentoring initiatives",
    ],
  },
  {
    id: "culture-transformation",
    icon: <Heart />,
    title: "Culture Transformation",
    desc: "Strategic culture design that aligns leadership behavior, systems, and employee experience to drive sustainable performance.",
    subServices: [
      "CULTURE DIAGNOSTICS",
      "BEHAVIORAL ALIGNMENT",
      "STRATEGIC CHANGE",
    ],
    details: [
      "Culture diagnostics and engagement analysis",
      "Leadership alignment with strategic vision",
      "Behavioral frameworks embedded into performance systems",
      "DEI strategy and inclusive workplace design",
      "Women leadership acceleration programs",
      "Health, wellbeing, and resilience integration initiatives",
    ],
  },
  {
    id: "organizational-effectiveness",
    icon: <TrendingUp />,
    title: "Organizational Effectiveness",
    desc: "Targeted interventions that enhance accountability, leadership alignment, and overall organizational capability.",
    subServices: [
      "LEADERSHIP ALIGNMENT",
      "TALENT ASSESSMENT",
      "EMPLOYEE EXPERIENCE",
    ],
    details: [
      "Leadership alignment and strategic clarity workshops",
      "Talent assessment and capability gap analysis",
      "Employee experience design and engagement improvement",
      "Accountability and ownership frameworks",
      "Cross-functional collaboration enhancement",
      "Structured interventions to improve performance outcomes",
    ],
  },
  {
    id: "corporate-events-leadership-offsites",
    icon: <CalendarRange />,
    title: "Corporate Events & Leadership Offsites",
    desc: "Design and facilitation of corporate events, leadership retreats, strategy offsites, and team engagement programs aimed at strengthening collaboration, alignment, and organizational culture.",
    subServices: [
      "CORPORATE EVENTS",
      "LEADERSHIP RETREATS",
      "STRATEGY OFFSITES",
      "TEAM ENGAGEMENT",
    ],
    details: [
      "End-to-end design and facilitation of corporate events and forums",
      "Leadership retreats and executive alignment sessions",
      "Strategy offsites, workshops, and annual planning convenings",
      "Team engagement programs that build trust and collaboration",
      "Agenda design, stakeholder facilitation, and follow-through planning",
      "Programming grounded in collaboration, strategic alignment, and culture",
    ],
  },
  {
    id: "corporate-gifting-employee-engagement",
    icon: <Gift />,
    title: "Corporate Gifting & Employee Engagement Solutions",
    desc: "Curated corporate gifting solutions and employee recognition initiatives designed to enhance engagement, strengthen employer branding, and celebrate milestones, achievements, and key organizational events.",
    subServices: [
      "CORPORATE GIFTING",
      "EMPLOYEE RECOGNITION",
      "EMPLOYER BRANDING",
      "MILESTONES & CELEBRATIONS",
    ],
    details: [
      "Curated gifting strategies aligned with brand and workforce segments",
      "Recognition programs for performance, tenure, and key milestones",
      "Campaigns that reinforce employer brand and belonging",
      "Celebrations for organizational achievements and landmark events",
      "Vendor curation, logistics, and governance for scale",
      "Inclusive, culturally appropriate programs across locations",
    ],
  },
];

const _ibServiceCards: ServiceItem[] = [
  {
    id: "debt-capital-markets",
    icon: <IndianRupee />,
    title: "Debt Capital Markets",
    desc: "Advisory and execution across bonds, private credit, syndicated loans, hybrid capital, and ESG-linked financing structures.",
    subServices: [
      "BONDS & PRIVATE CREDIT",
      "SYNDICATED LOANS",
      "ESG-LINKED FINANCING",
    ],
    details: [
      "Corporate bonds and structured debt instruments",
      "Private credit and direct lending solutions",
      "Syndicated loan structuring and execution",
      "Hybrid capital and mezzanine financing",
      "ESG-linked financing and sustainability bonds",
      "Liability management and refinancing advisory",
    ],
  },
  {
    id: "equity-capital-markets",
    icon: <Globe />,
    title: "Equity Capital Markets",
    desc: "End-to-end execution for IPOs, follow-on offerings, block trades, PIPEs, convertibles, and cross-border listings.",
    subServices: [
      "IPO ADVISORY",
      "FOLLOW-ON OFFERINGS",
      "CROSS-BORDER LISTINGS",
    ],
    details: [
      "IPO planning, structuring, and execution",
      "Follow-on public offerings and rights issues",
      "Block trades and secondary market transactions",
      "PIPE transactions and private placements",
      "Convertible bond and equity-linked structures",
      "Cross-border listing and dual-listing advisory",
    ],
  },
  {
    id: "mergers-acquisitions",
    icon: <Briefcase />,
    title: "Mergers & Acquisitions",
    desc: "Buy-side, sell-side, carve-outs, cross-border transactions, and special situations advisory focused on value maximization and deal certainty.",
    subServices: [
      "BUY-SIDE ADVISORY",
      "SELL-SIDE ADVISORY",
      "CROSS-BORDER TRANSACTIONS",
    ],
    details: [
      "Buy-side M&A strategy and target identification",
      "Sell-side process management and value maximization",
      "Carve-out and divestiture advisory",
      "Cross-border transaction structuring and execution",
      "Special situations and distressed M&A",
      "Deal negotiation, due diligence, and closing support",
    ],
  },
];

const hrServices = orderServicesByCatalog(_hrServiceCards, "HR");
const ibServices = orderServicesByCatalog(_ibServiceCards, "IB");

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  return (
    <div
      id={`service-${service.id}`}
      className="sticky flex min-h-[45vh] scroll-mt-28 items-start justify-center px-6 py-2 md:py-4"
      style={{ top: `calc(80px + ${index * 20}px)` }}
    >
      <div className="surface-glass-panel ring-brand-blue/15 relative flex h-fit w-full max-w-6xl flex-col self-start overflow-hidden rounded-[2.5rem] text-black ring-1">
        <div
          className="from-brand-lime via-brand-teal to-brand-blue h-1.5 w-full shrink-0 bg-gradient-to-r"
          aria-hidden
        />
        <div className="flex flex-col p-8 md:p-10">
          {/* Header Section */}
          <div className="relative mb-4">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-6">
                <h2 className="text-brand-blue mb-3 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                  {service.title}
                </h2>
                <p className="text-brand-light-blue/80 text-base leading-relaxed font-light md:text-lg">
                  {service.desc}
                </p>
              </div>
              <div className="text-brand-teal flex-shrink-0">
                {cloneElement(service.icon as ReactElement<{ size?: number }>, {
                  size: 32,
                })}
              </div>
            </div>
          </div>

          {/* Sub-services Tags - Compact */}
          <div className="mb-4 flex flex-wrap gap-2">
            {service.subServices.map((subService: string, idx: number) => (
              <div
                key={idx}
                className="bg-brand-green/10 text-brand-green border-brand-green/30 rounded-lg border px-3 py-1.5 text-sm font-bold tracking-wider uppercase"
              >
                {subService}
              </div>
            ))}
          </div>

          {/* Detailed Points */}
          {service.details && (
            <div className="border-brand-blue/10 border-t pt-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {service.details.map((detail: string, idx: number) => (
                  <div key={idx} className="group flex items-start gap-2.5">
                    <div className="bg-brand-green mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"></div>
                    <span className="text-brand-light-blue/70 text-base leading-relaxed font-light">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"HR" | "IB">(initialServicesTab);
  const currentServices = activeTab === "HR" ? hrServices : ibServices;

  useEffect(() => {
    const hash = location.hash;
    const m = hash.match(/^#service-(.+)$/);
    if (!m) return;
    const serviceId = m[1];
    const tab = tabForServiceHash(hash);
    if (!tab) return;

    flushSync(() => {
      setActiveTab(tab);
    });

    const el = document.getElementById(`service-${serviceId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <section id="services" className="relative">
      <SectionBackdrop
        imageSrc="/assets/photos/boardroom.jpg"
        strength="clear"
        readableTint="content"
        fixedCover
      />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-5xl leading-none font-black tracking-tighter text-white md:text-7xl"
        >
          Core Domains.
        </motion.h2>

        <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/12 p-1.5 shadow-lg backdrop-blur-md">
          <button
            onClick={() => setActiveTab("IB")}
            className={`rounded-full px-6 py-2 text-xs font-black tracking-[0.15em] transition-all duration-300 ${
              activeTab === "IB"
                ? "from-brand-green to-brand-lime bg-gradient-to-r text-white shadow-md"
                : "text-white/75 hover:text-white"
            }`}
          >
            INVESTMENT BANKING
          </button>
          <button
            onClick={() => setActiveTab("HR")}
            className={`rounded-full px-6 py-2 text-xs font-black tracking-[0.15em] transition-all duration-300 ${
              activeTab === "HR"
                ? "from-brand-green to-brand-lime bg-gradient-to-r text-white shadow-md"
                : "text-white/75 hover:text-white"
            }`}
          >
            HR ADVISORY
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed font-normal text-white/85 md:text-xl"
          >
            {activeTab === "HR"
              ? "Strategic HR and talent solutions designed to build high-performing, scalable organizations."
              : "Senior-led advisory delivering certainty of execution across complex capital and strategic transactions."}
          </motion.p>
        </AnimatePresence>
      </div>

      <div key={activeTab} className="relative z-10 pb-10 md:pb-16">
        {currentServices.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
        <div
          className="h-[min(18vh,10rem)] shrink-0 md:h-[min(22vh,14rem)]"
          aria-hidden
        />
      </div>
    </section>
  );
}
