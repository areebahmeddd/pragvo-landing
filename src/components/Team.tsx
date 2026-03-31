import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import SectionBackdrop from "./SectionBackdrop";

type Member = {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  variant: "leadership" | "advisor";
};

const members: Member[] = [
  {
    name: "Hanish Dewan",
    role: "Leadership",
    variant: "leadership",
    bio: "He is a seasoned Human Resources leader with over two decades of experience in driving strategic HR initiatives, organizational culture, and talent development across a broad spectrum of industries. He is instrumental in championing an employee-first culture and spearheading transformative learning and development programs that align with business growth. His career spans leadership roles at renowned organizations including Times Network, KPMG, and Wipro, where he led critical functions within the people domain. His tenure at innovative start-ups like Lenskart has further enriched his expertise, offering a unique blend of corporate structure and start-up agility in managing people and business growth. Throughout his career, Hanish has made significant contributions in business thought leadership, employer branding, talent acquisition, employee experience, and performance management.",
  },
  {
    name: "Palak Matta",
    role: "Leadership",
    variant: "leadership",
    bio: "She is an accomplished Talent Acquisition leader with over 15 years of experience driving strategic recruitment and building high-performing talent strategies. She has partnered with global clients across industries such as Renewable Energy, Manufacturing, Higher Education, I-NGOs, Real Estate, BFSI, Technology, Consulting and Market Research, overseeing hundreds of hires annually. She has been instrumental in enhancing candidate experience and ensuring seamless workforce planning to support organizational growth. Her career includes roles at Sannam S4 and TMF Group, where she executed end-to-end talent acquisition strategies, optimized hiring processes, and consistently delivered on key performance metrics. Palak is passionate about leveraging talent insights to help organizations achieve their strategic goals.",
  },
  {
    name: "Kavita Mathur",
    role: "Strategic advisor",
    variant: "advisor",
    bio: "Human Resource Specialist with over 35 years of experience across management consulting and senior leadership roles in corporates like Aon Hewitt, EY, Grant Thornton, Convergys and Trilegal. She has developed deep expertise in understanding issues faced by organizations in strengthening the leadership pipeline and has made significant breakthroughs with her strategic approach to leadership assessment and development, and organization development work through culture transformation. She is a practitioner with the ability to create OD interventions based on client needs and combine them with institutional knowledge of various tools and approaches.",
  },
];

function PortraitPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`from-brand-blue via-brand-teal to-brand-green relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br ring-1 ring-white/30 ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%220.08%22 d=%22M0 30h60M30 0v60%22/%3E%3C/svg%3E')] absolute inset-0 opacity-30 mix-blend-soft-light" />
      <UserRound
        className="relative z-[1] size-[22%] max-h-16 text-white/25 sm:size-[26%]"
        strokeWidth={1}
      />
    </div>
  );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  if (member.variant === "leadership") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className="group surface-glass-tile flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/40"
      >
        <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-slate-950/20">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <PortraitPlaceholder className="h-full min-h-0 w-full" />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <span className="text-brand-green/90 mb-2 text-[10px] font-bold tracking-[0.35em] uppercase">
            {member.role}
          </span>
          <h3 className="text-brand-blue mb-3 text-xl font-black tracking-tight md:text-2xl">
            {member.name}
          </h3>
          <p className="text-brand-light-blue/88 text-sm leading-relaxed md:text-base">
            {member.bio}
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group surface-glass-tile relative flex flex-col overflow-hidden rounded-2xl ring-1 ring-white/40 md:flex-row md:items-stretch"
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-slate-950/20 md:w-[min(38%,240px)] md:max-w-[260px]">
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={member.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <PortraitPlaceholder className="h-full w-full" />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-5 md:px-7 md:py-8">
        <span className="text-brand-green/90 mb-2 text-[10px] font-bold tracking-[0.35em] uppercase">
          {member.role}
        </span>
        <h3 className="text-brand-blue mb-3 text-xl font-black tracking-tight md:text-2xl">
          {member.name}
        </h3>
        <p className="text-brand-light-blue/88 text-sm leading-relaxed md:text-base">
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}

export default function Team() {
  const leadership = members.filter((m) => m.variant === "leadership");
  const advisors = members.filter((m) => m.variant === "advisor");

  return (
    <section id="team" className="relative overflow-hidden py-14 md:py-20">
      <SectionBackdrop
        imageSrc="/assets/photos/partnership.jpg"
        strength="clear"
        readableTint="content"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="text-brand-lime decoration-brand-green mb-4 block text-xs font-bold tracking-[0.45em] uppercase underline decoration-2 underline-offset-8">
            People
          </span>
          <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl">
            Leadership &amp;
            <br />
            <span className="text-white/88">strategic advisors.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Senior practitioners who have led this work inside large companies,
            professional firms, and growth-stage businesses, supported by our
            advisor bench.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-brand-lime/95 mb-5 text-[11px] font-black tracking-[0.35em] uppercase">
            Leadership team
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {leadership.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-brand-lime/95 mb-5 text-[11px] font-black tracking-[0.35em] uppercase">
            Strategic advisors
          </h3>
          <div className="space-y-6">
            {advisors.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                index={i + leadership.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
