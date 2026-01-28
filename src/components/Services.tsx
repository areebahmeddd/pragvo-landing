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
    desc: 'End-to-end recruitment solutions spanning executive search, specialist hiring, and volume recruitment, supported by employer branding and DEI-focused sourcing strategies.',
    subServices: ['EXECUTIVE SEARCH', 'SPECIALIST HIRING', 'VOLUME RECRUITMENT'],
    details: [
      'Executive search for C-suite and senior leadership roles',
      'Specialist hiring across technical and domain expertise',
      'Volume recruitment programs with scalable sourcing',
      'Employer branding strategy and implementation',
      'DEI-focused talent sourcing and pipeline development',
    ],
  },
  {
    icon: <GraduationCap />,
    title: 'Talent Development',
    desc: 'Leadership development, role-based learning pathways, coaching, and succession planning programs that build future-ready capabilities.',
    subServices: ['LEADERSHIP PROGRAMS', 'COACHING & MENTORING', 'SUCCESSION PLANNING'],
    details: [
      'Customized leadership development frameworks',
      'Role-based competency mapping and learning paths',
      'Executive coaching and mentoring programs',
      'Succession planning and talent pipeline development',
      'Capability building for digital transformation',
    ],
  },
  {
    icon: <Layout />,
    title: 'Organization Design',
    desc: 'Design of operating models, organizational structures, role architecture, and governance frameworks to enable strategy execution and growth.',
    subServices: ['OPERATING MODELS', 'ROLE ARCHITECTURE', 'GOVERNANCE FRAMEWORKS'],
    details: [
      'Operating model design and optimization',
      'Organizational structure alignment with strategy',
      'Role architecture and job design',
      'Governance framework development',
      'Span of control and reporting structure optimization',
    ],
  },
  {
    icon: <Settings />,
    title: 'HRIS Implementation Support',
    desc: 'Comprehensive support across HR system selection, configuration, data migration, testing, deployment, and user adoption.',
    subServices: ['SYSTEM SELECTION', 'CONFIGURATION & MIGRATION', 'DEPLOYMENT & TRAINING'],
    details: [
      'HRIS vendor evaluation and selection',
      'System configuration and customization',
      'Data migration and integration support',
      'Testing, quality assurance, and deployment',
      'Change management and user adoption programs',
    ],
  },
  {
    icon: <Target />,
    title: 'Performance Management',
    desc: 'Continuous performance frameworks aligning individual goals with business priorities through OKRs, feedback cycles, and calibration processes.',
    subServices: ['OKR FRAMEWORKS', 'FEEDBACK SYSTEMS', 'CALIBRATION PROCESSES'],
    details: [
      'OKR framework design and implementation',
      'Continuous feedback and review systems',
      'Performance calibration and rating processes',
      'Goal alignment and cascading mechanisms',
      'Performance analytics and insights',
    ],
  },
  {
    icon: <Award />,
    title: 'Compensation & Rewards',
    desc: 'Market-aligned compensation philosophies covering benchmarking, pay equity, incentive design, and total rewards governance.',
    subServices: ['BENCHMARKING', 'INCENTIVE DESIGN', 'TOTAL REWARDS'],
    details: [
      'Market benchmarking and pay structure design',
      'Pay equity analysis and remediation',
      'Variable incentive and bonus frameworks',
      'Total rewards strategy and communication',
      'Compensation governance and compliance',
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-black mb-3">
                {service.title}
              </h2>
              <p className="text-base md:text-lg text-black/70 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-brand-green flex-shrink-0"
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
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-sm font-bold text-blue-900/80 uppercase tracking-wider border border-blue-100"
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
                  <span className="text-base text-black/60 font-light leading-relaxed">
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
            className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none"
          >
            Core Domains.
          </motion.h2>

          <div className="inline-flex bg-white p-1.5 rounded-full shadow-md border border-black/10">
            <button
              onClick={() => setActiveTab('IB')}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-300 tracking-[0.15em] ${
                activeTab === 'IB'
                  ? 'bg-brand-green text-black shadow-md'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              INVESTMENT BANKING
            </button>
            <button
              onClick={() => setActiveTab('HR')}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-300 tracking-[0.15em] ${
                activeTab === 'HR'
                  ? 'bg-brand-green text-black shadow-md'
                  : 'text-black/60 hover:text-black'
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
              className="text-lg md:text-xl text-black/70 font-light leading-relaxed"
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
                  range={[i * 0.25, 1]}
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
