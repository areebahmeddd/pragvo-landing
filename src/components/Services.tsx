import { useState, useRef, cloneElement, type ReactNode, type ReactElement } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  GraduationCap,
  Layout,
  Settings,
  Target,
  Award,
  IndianRupee,
  Globe,
  Briefcase,
  Users,
  Heart,
  TrendingUp,
} from 'lucide-react';

interface ServiceItem {
  icon: ReactNode;
  title: string;
  desc: string;
  subServices: string[];
  details?: string[];
}

const hrServices: ServiceItem[] = [
  {
    icon: <Search />,
    title: 'Talent Acquisition',
    desc: 'End-to-end recruitment solutions spanning executive search, specialist hiring, and scalable volume programs, aligned to business strategy and diversity goals.',
    subServices: ['EXECUTIVE SEARCH', 'SPECIALIST HIRING', 'VOLUME RECRUITMENT'],
    details: [
      'Executive search for C-suite and senior leadership roles',
      'Specialist hiring across technical and domain expertise',
      'Scalable volume recruitment programs',
      'Employer branding strategy and implementation',
      'DEI-focused sourcing and talent pipeline development',
      'Structured interviews, scorecards, and quality-of-hire analytics',
    ],
  },
  {
    icon: <GraduationCap />,
    title: 'Talent Development',
    desc: 'Leadership development, role-based learning pathways, and succession frameworks that build future-ready capabilities across all levels.',
    subServices: ['LEADERSHIP PROGRAMS', 'COACHING & MENTORING', 'SUCCESSION PLANNING'],
    details: [
      'Leadership development frameworks for emerging to senior leaders',
      'First-time manager and mid-level leadership tracks',
      'Executive coaching and mentoring programs',
      'Role-based competency mapping and learning pathways',
      '9-box talent reviews and critical role identification',
      'Individual development plans and succession pipeline design',
    ],
  },
  {
    icon: <Layout />,
    title: 'Organization Design',
    desc: 'Design of operating models, structures, and governance frameworks to enable strategy execution, clarity, and scalable growth.',
    subServices: ['OPERATING MODELS', 'ROLE ARCHITECTURE', 'GOVERNANCE FRAMEWORKS'],
    details: [
      'Operating model design and optimization',
      'Organizational structure alignment with business strategy',
      'Role architecture and job family standardization',
      'Span of control and reporting structure optimization',
      'RACI matrix and decision-rights clarity',
      'Strategic workforce planning and change enablement',
    ],
  },
  {
    icon: <Settings />,
    title: 'HRIS Implementation Support',
    desc: 'End-to-end HR system transformation across vendor selection, configuration, data migration, deployment, and user adoption.',
    subServices: ['SYSTEM SELECTION', 'CONFIGURATION & MIGRATION', 'DEPLOYMENT & TRAINING'],
    details: [
      'HRIS vendor evaluation and solution architecture design',
      'System configuration and workflow customization',
      'Data migration, cleansing, and integration support',
      'UAT, payroll parallel runs, and security validation',
      'Go-live execution and hypercare support',
      'Change management and user adoption programs',
    ],
  },
  {
    icon: <Target />,
    title: 'Performance Management',
    desc: 'Continuous performance frameworks aligning individual goals with business priorities through OKRs, feedback systems, and structured calibration.',
    subServices: ['OKR FRAMEWORKS', 'FEEDBACK SYSTEMS', 'CALIBRATION PROCESSES'],
    details: [
      'OKR and KPI framework design and rollout',
      'Goal cascading and alignment mechanisms',
      'Continuous feedback and structured review systems',
      'Performance calibration and rating governance',
      'Manager enablement and process playbooks',
      'Performance analytics and pay-for-performance linkage',
    ],
  },
  {
    icon: <Award />,
    title: 'Compensation & Rewards',
    desc: 'Market-aligned compensation strategies covering benchmarking, pay equity, incentive design, and total rewards governance.',
    subServices: ['BENCHMARKING', 'INCENTIVE DESIGN', 'TOTAL REWARDS'],
    details: [
      'Market benchmarking and salary band architecture',
      'Job leveling and internal equity frameworks',
      'Variable pay and incentive plan design (STI/LTI)',
      'Pay equity audits and remediation planning',
      'Total rewards strategy and communication',
      'Governance, compliance, and annual cycle management',
    ],
  },
  {
    icon: <Users />,
    title: 'Leadership, Coaching & Mentoring',
    desc: 'Structured leadership acceleration and coaching ecosystems that build confident leaders and embed a performance-driven culture.',
    subServices: ['LEADERSHIP ACCELERATION', 'EXECUTIVE COACHING', 'MENTORSHIP ECOSYSTEMS'],
    details: [
      'Senior leadership and high-potential acceleration programs',
      '1:1 executive and transition coaching',
      '360° leadership assessments and behavioral diagnostics',
      'Leaders-as-coaches capability building',
      'Structured mentor–mentee program design',
      'Women leadership pipeline and reverse mentoring initiatives',
    ],
  },
  {
    icon: <Heart />,
    title: 'Culture Transformation',
    desc: 'Strategic culture design that aligns leadership behavior, systems, and employee experience to drive sustainable performance.',
    subServices: ['CULTURE DIAGNOSTICS', 'BEHAVIORAL ALIGNMENT', 'STRATEGIC CHANGE'],
    details: [
      'Culture diagnostics and engagement analysis',
      'Leadership alignment with strategic vision',
      'Behavioral frameworks embedded into performance systems',
      'DEI strategy and inclusive workplace design',
      'Women leadership acceleration programs',
      'Health, wellbeing, and resilience integration initiatives',
    ],
  },
  {
    icon: <TrendingUp />,
    title: 'Organizational Effectiveness',
    desc: 'Targeted interventions that enhance accountability, leadership alignment, and overall organizational capability.',
    subServices: ['LEADERSHIP ALIGNMENT', 'TALENT ASSESSMENT', 'EMPLOYEE EXPERIENCE'],
    details: [
      'Leadership alignment and strategic clarity workshops',
      'Talent assessment and capability gap analysis',
      'Employee experience design and engagement improvement',
      'Accountability and ownership frameworks',
      'Cross-functional collaboration enhancement',
      'Structured interventions to improve performance outcomes',
    ],
  },
];

const ibServices: ServiceItem[] = [
  {
    icon: <IndianRupee />,
    title: 'Debt Capital Markets',
    desc: 'Advisory and execution across bonds, private credit, syndicated loans, hybrid capital, and ESG-linked financing structures.',
    subServices: ['BONDS & PRIVATE CREDIT', 'SYNDICATED LOANS', 'ESG-LINKED FINANCING'],
    details: [
      'Corporate bonds and structured debt instruments',
      'Private credit and direct lending solutions',
      'Syndicated loan structuring and execution',
      'Hybrid capital and mezzanine financing',
      'ESG-linked financing and sustainability bonds',
      'Liability management and refinancing advisory',
    ],
  },
  {
    icon: <Globe />,
    title: 'Equity Capital Markets',
    desc: 'End-to-end execution for IPOs, follow-on offerings, block trades, PIPEs, convertibles, and cross-border listings.',
    subServices: ['IPO ADVISORY', 'FOLLOW-ON OFFERINGS', 'CROSS-BORDER LISTINGS'],
    details: [
      'IPO planning, structuring, and execution',
      'Follow-on public offerings and rights issues',
      'Block trades and secondary market transactions',
      'PIPE transactions and private placements',
      'Convertible bond and equity-linked structures',
      'Cross-border listing and dual-listing advisory',
    ],
  },
  {
    icon: <Briefcase />,
    title: 'Mergers & Acquisitions',
    desc: 'Buy-side, sell-side, carve-outs, cross-border transactions, and special situations advisory focused on value maximization and deal certainty.',
    subServices: ['BUY-SIDE ADVISORY', 'SELL-SIDE ADVISORY', 'CROSS-BORDER TRANSACTIONS'],
    details: [
      'Buy-side M&A strategy and target identification',
      'Sell-side process management and value maximization',
      'Carve-out and divestiture advisory',
      'Cross-border transaction structuring and execution',
      'Special situations and distressed M&A',
      'Deal negotiation, due diligence, and closing support',
    ],
  },
];

const ServiceCard = ({
  service,
  index,
  progress,
  range,
  targetScale,
}: {
  service: ServiceItem;
  index: number;
  progress: any;
  range: number[];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="min-h-[45vh] flex items-center justify-center sticky px-6"
      style={{ top: `calc(80px + ${index * 20}px)` }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="flex flex-col relative w-full max-w-6xl rounded-[2.5rem] p-8 md:p-10 origin-top bg-white text-black shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] border border-slate-200"
      >
        {/* Header Section */}
        <div className="mb-4 relative">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-brand-blue mb-3">
                {service.title}
              </h2>
              <p className="text-base md:text-lg text-brand-light-blue/80 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-brand-teal flex-shrink-0"
            >
              {cloneElement(service.icon as ReactElement<{ size?: number }>, { size: 32 })}
            </motion.div>
          </div>
        </div>

        {/* Sub-services Tags - Compact */}
        <div className="mb-4 flex flex-wrap gap-2">
          {service.subServices.map((subService: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="px-3 py-1.5 rounded-lg bg-brand-green/10 text-sm font-bold text-brand-green uppercase tracking-wider border border-brand-green/30"
            >
              {subService}
            </motion.div>
          ))}
        </div>

        {/* Detailed Points */}
        {service.details && (
          <div className="pt-4 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.details.map((detail: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  className="flex items-start gap-2.5 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-base text-brand-light-blue/70 font-light leading-relaxed">
                    {detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<'HR' | 'IB'>('IB');
  const currentServices = activeTab === 'HR' ? hrServices : ibServices;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="services" className="bg-transparent relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter mb-4 leading-none"
          >
            Core Domains.
          </motion.h2>

          <div className="inline-flex bg-white p-1.5 rounded-full shadow-md border border-brand-light-blue/20">
            <button
              onClick={() => setActiveTab('IB')}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-300 tracking-[0.15em] ${
                activeTab === 'IB'
                  ? 'bg-gradient-to-r from-brand-green to-brand-lime text-white shadow-md'
                  : 'text-brand-light-blue/70 hover:text-brand-blue'
              }`}
            >
              INVESTMENT BANKING
            </button>
            <button
              onClick={() => setActiveTab('HR')}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-300 tracking-[0.15em] ${
                activeTab === 'HR'
                  ? 'bg-gradient-to-r from-brand-green to-brand-lime text-white shadow-md'
                  : 'text-brand-light-blue/70 hover:text-brand-blue'
              }`}
            >
              HR ADVISORY
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl text-brand-light-blue/80 font-light leading-relaxed"
            >
              {activeTab === 'HR'
                ? 'Strategic HR and talent solutions designed to build high-performing, scalable organizations.'
                : 'Senior-led advisory delivering certainty of execution across complex capital and strategic transactions.'}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div ref={container} className="pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentServices.map((service, i) => {
              const targetScale = 1 - (currentServices.length - i) * 0.05;
              return (
                <ServiceCard
                  key={`${activeTab}-${i}`}
                  service={service}
                  index={i}
                  progress={scrollYProgress}
                  range={[i * 0.1, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
