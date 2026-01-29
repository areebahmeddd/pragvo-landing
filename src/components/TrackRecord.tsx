import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Aggregate Transaction Value', value: '₹35,000 Cr+' },
  { label: 'Advisory Experience', value: '85+ Yrs' },
  { label: 'Successful Mandates', value: '250+' },
  { label: 'Indian Markets Covered', value: '100%' },
];

function StatCard({ stat }: { stat: { label: string; value: string } }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const parseValue = (val: string) => {
    if (val.includes('₹')) {
      const num = parseInt(val.replace(/[₹,Cr+\s]/g, ''));
      return { num, prefix: '₹', suffix: ' Cr+' };
    }
    if (val.includes('Yrs')) {
      const num = parseInt(val.replace(/[+Yrs\s]/g, ''));
      return { num, prefix: '', suffix: '+ Yrs' };
    }
    if (val.includes('+')) {
      const num = parseInt(val.replace(/[+\s]/g, ''));
      return { num, prefix: '', suffix: '+' };
    }
    if (val.includes('%')) {
      const num = parseInt(val.replace(/[%\s]/g, ''));
      return { num, prefix: '', suffix: '%' };
    }
    return { num: 0, prefix: '', suffix: '' };
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
      className="glass-light p-8 rounded-2xl flex flex-col justify-center text-center transition-all duration-500 group cursor-default relative overflow-hidden border-2 border-black/10 hover:border-black/20 bg-white/40"
    >
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-3 leading-none">
          {hasAnimated ? (
            <CountUpNumber
              end={num}
              prefix={prefix}
              suffix={suffix}
              duration={2500}
              formatted={stat.value.includes('₹')}
            />
          ) : (
            stat.value
          )}
        </div>
        <div className="text-xs font-bold text-black/60 uppercase tracking-widest leading-tight">
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

  const displayValue = formatted ? count.toLocaleString('en-IN') : count.toString();

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
    <section id="track-record" className="py-16 bg-transparent overflow-hidden relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.5em] text-black/50 uppercase mb-4 block decoration-black underline underline-offset-8 decoration-2">
            Our Scale
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-black">
            Proven Results,
            <br />
            Nationwide Presence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
