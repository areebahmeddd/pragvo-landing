import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Aggregate Transaction Value", value: "₹10,000 Cr+" },
  { label: "Advisory Experience", value: "85+ Yrs" },
  { label: "Successful IB & HR Engagements", value: "150+" },
  { label: "Indian Markets Covered", value: "100%" },
];

function StatCard({ stat }: { stat: { label: string; value: string } }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const parseValue = (val: string) => {
    if (val.includes("₹")) {
      const num = parseInt(val.replace(/[₹,Cr+\s]/g, ""));
      return { num, prefix: "₹", suffix: " Cr+" };
    }
    if (val.includes("Yrs")) {
      const num = parseInt(val.replace(/[+Yrs\s]/g, ""));
      return { num, prefix: "", suffix: "+ Yrs" };
    }
    if (val.includes("+")) {
      const num = parseInt(val.replace(/[+\s]/g, ""));
      return { num, prefix: "", suffix: "+" };
    }
    if (val.includes("%")) {
      const num = parseInt(val.replace(/[%\s]/g, ""));
      return { num, prefix: "", suffix: "%" };
    }
    return { num: 0, prefix: "", suffix: "" };
  };

  const { num, prefix, suffix } = parseValue(stat.value);

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      viewport={{ once: true }}
      className="glass-light group border-brand-green/20 hover:border-brand-green/40 relative flex cursor-default flex-col justify-center overflow-hidden rounded-2xl border-2 bg-white/40 p-8 text-center transition-all duration-500"
    >
      <div className="relative z-10">
        <div className="text-brand-blue mb-3 text-3xl leading-none font-black tracking-tighter md:text-4xl">
          {hasAnimated ? (
            <CountUpNumber
              end={num}
              prefix={prefix}
              suffix={suffix}
              duration={2500}
              formatted={stat.value.includes("₹")}
            />
          ) : (
            stat.value
          )}
        </div>
        <div className="text-brand-light-blue/70 text-xs leading-tight font-bold tracking-widest uppercase">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

function CountUpNumber({
  end,
  prefix,
  suffix,
  duration,
  formatted,
}: {
  end: number;
  prefix: string;
  suffix: string;
  duration: number;
  formatted: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(startValue + (end - startValue) * easeOut);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, duration]);

  const displayValue = formatted
    ? count.toLocaleString("en-IN")
    : count.toString();

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className="relative overflow-hidden bg-transparent py-16"
    >
      <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-brand-teal/70 decoration-brand-green mb-4 block text-xs font-bold tracking-[0.5em] uppercase underline decoration-2 underline-offset-8">
            Our Scale
          </span>
          <h2 className="text-brand-blue text-4xl leading-tight font-extrabold tracking-tighter md:text-6xl">
            Proven Results,
            <br />
            Nationwide Presence.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
