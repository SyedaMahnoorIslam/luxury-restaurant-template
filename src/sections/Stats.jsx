import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import statsData from '../data/statsData';

/* ─── Constants ─────────────────────────────────────────────── */
const EASE_CINEMATIC = [0.22, 1, 0.36, 1];
const COUNTUP_DURATION = 2200; // ms
const COUNTUP_FPS      = 60;

/* ─── CountUp Hook ───────────────────────────────────────────── */
/**
 * Animates a number from 0 → end once `trigger` becomes true.
 * Returns the display string (respects decimals).
 */
function useCountUp(end, { decimals = 0, duration = COUNTUP_DURATION, trigger = true } = {}) {
  const [display, setDisplay] = useState('0');
  const rafRef    = useRef(null);
  const startRef  = useRef(null);
  const prevTrigger = useRef(false);

  useEffect(() => {
    if (!trigger || prevTrigger.current) return;
    prevTrigger.current = true;

    const interval = duration / COUNTUP_FPS;
    const steps    = Math.round(duration / interval);
    let   step     = 0;

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * end;

      setDisplay(decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString());

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(decimals > 0 ? end.toFixed(decimals) : end.toString());
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger, end, decimals, duration]);

  return display;
}

/* ─── Single Stat Card ───────────────────────────────────────── */
const StatCard = ({ stat, index, isInView }) => {
  const decimals = stat.isDecimal ? 1 : 0;
  const count    = useCountUp(stat.numericEnd, { decimals, trigger: isInView });
  const displayValue = isInView
    ? `${count}${stat.suffix || ''}`
    : `0${stat.suffix || ''}`;

  /* Icon per card */
  const icons = [
    /* Customers */
    <svg key="c" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>,
    /* Dishes */
    <svg key="d" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
    </svg>,
    /* Rating — star */
    <svg key="r" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    /* Years — clock */
    <svg key="y" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: index * 0.13 }}
      className="group relative flex flex-col items-center justify-center
                 bg-[#171717] border border-white/[0.06]
                 px-8 py-10 text-center
                 overflow-hidden
                 transition-colors duration-500
                 hover:border-[#D4AF37]/28 hover:bg-[#1a1a1a]
                 cursor-default"
    >
      {/* Top gold accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.65, ease: EASE_CINEMATIC, delay: 0.3 + index * 0.13 }}
      />

      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/4 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="mb-5 flex h-11 w-11 items-center justify-center
                      bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]
                      transition-all duration-400
                      group-hover:bg-[#D4AF37]/18 group-hover:border-[#D4AF37]/40">
        {icons[index] || icons[0]}
      </div>

      {/* CountUp number */}
      <p
        className="mb-2 text-[3rem] sm:text-[3.5rem] font-bold leading-none text-[#D4AF37]
                   tabular-nums transition-all duration-300"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-label={stat.label + ': ' + stat.value}
      >
        {displayValue}
      </p>

      {/* Label */}
      <p
        className="text-[10.5px] font-semibold uppercase tracking-[0.3em] text-[#B3B3B3]
                   transition-colors duration-300 group-hover:text-white/70"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
};

/* ─── Stats Section ──────────────────────────────────────────── */
const Stats = () => {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F0F0F] overflow-hidden"
      aria-label="Restaurant statistics"
    >
      {/* Top border rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

      {/* Ambient gold glow — top-left */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full
                      bg-[#D4AF37]/5 blur-[90px] pointer-events-none" aria-hidden="true" />

      {/* Ambient gold glow — bottom-right */}
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full
                      bg-[#D4AF37]/4 blur-[90px] pointer-events-none" aria-hidden="true" />

      {/* ── Header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE_CINEMATIC }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-20 pb-12 text-center"
      >
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="block h-px w-10 bg-[#D4AF37]" />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            By The Numbers
          </p>
          <span className="block h-px w-10 bg-[#D4AF37]" />
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Luxury at Every Turn
        </h2>
        <p
          className="mt-4 mx-auto max-w-xl text-[0.95rem] leading-[1.85] text-[#B3B3B3]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Numbers that reflect the trust and admiration of guests who seek a premium dining destination.
        </p>
      </motion.div>

      {/* ── Cards Grid ─────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-20">
        {/* gap-px + bg creates the grid-line effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Bottom border rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
    </section>
  );
};

export default Stats;
