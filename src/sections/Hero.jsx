import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─── Animation Config ───────────────────────────────────────── */
const EASE_CINEMATIC = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0, duration = 0.85) => ({
  initial:   { opacity: 0, y: 44 },
  animate:   { opacity: 1, y: 0,  transition: { duration, ease: EASE_CINEMATIC, delay } },
});

const fadeIn = (delay = 0, duration = 0.7) => ({
  initial:   { opacity: 0 },
  animate:   { opacity: 1, transition: { duration, delay } },
});

/* ─── Sub-components ─────────────────────────────────────────── */

/** Thin horizontal rule with centre dot */
const GoldRule = () => (
  <div className="flex items-center gap-3">
    <span className="block h-px w-12 bg-[#D4AF37]" />
    <span className="block h-1 w-1 rounded-full bg-[#D4AF37]" />
    <span className="block h-px w-6 bg-[#D4AF37]/50" />
  </div>
);

/** Single stat badge inside the hero trust bar */
const HeroStat = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 + index * 0.12, duration: 0.6, ease: EASE_CINEMATIC }}
    className="flex items-center gap-5"
  >
    {index > 0 && (
      <span className="h-7 w-px bg-white/12 flex-shrink-0" />
    )}
    <div>
      <p
        className="text-2xl sm:text-3xl font-bold leading-none text-[#D4AF37]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {value}
      </p>
      <p
        className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[#B3B3B3]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </p>
    </div>
  </motion.div>
);

/** Scroll cue — vertical animated line */
const ScrollCue = () => (
  <motion.div
    {...fadeIn(2.0, 1.0)}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    aria-hidden="true"
  >
    <span
      className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#B3B3B3]/70"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Scroll
    </span>
    <div className="relative h-14 w-px overflow-hidden bg-white/10">
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"
      />
    </div>
  </motion.div>
);

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = ({
  brand           = 'Luxury Restaurant',
  headline        = 'Experience Culinary\nExcellence',
  subtext         = 'Discover premium flavors, exceptional hospitality and unforgettable dining experiences crafted for the most discerning guests.',
  backgroundImage = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=90',
  whatsappNumber  = '+1234567890',
}) => {
  const sectionRef = useRef(null);

  /* Subtle parallax on background */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ['0%', '20%']);

  const [headlineLine1, headlineLine2] = headline.split('\n');

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0F0F0F]"
    >
      {/* ── Background ──────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 will-change-transform"
        aria-hidden="true"
      >
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover object-center"
          fetchpriority="high"
          decoding="async"
        />
        {/* Cinematic overlays — dark vignette layers */}
        <div className="absolute inset-0 bg-[#0F0F0F]/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 via-[#0F0F0F]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-[#0F0F0F]/30" />
      </motion.div>

      {/* ── Vertical gold accent — left ─────────────── */}
      <motion.div
        {...fadeIn(0.4, 1.2)}
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent"
      />

      {/* ── Vertical gold accent — right (desktop) ──── */}
      <motion.div
        {...fadeIn(0.6, 1.2)}
        aria-hidden="true"
        className="absolute right-[5%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent xl:block"
      />

      {/* ── Main Content ────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-[680px]">

          {/* Eyebrow row */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-8 flex items-center gap-3"
          >
            <GoldRule />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D4AF37]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {brand.toUpperCase()}
            </p>
          </motion.div>

          {/* Headline */}
          <h1
            className="mb-8 leading-[1.10] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <motion.span
              {...fadeUp(0.18, 0.88)}
              className="block text-[2.7rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.2rem] font-bold"
            >
              {headlineLine1}
            </motion.span>
            <motion.span
              {...fadeUp(0.30, 0.88)}
              className="block text-[2.7rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.2rem] font-bold italic text-[#D4AF37]"
            >
              {headlineLine2 || ''}
            </motion.span>
          </h1>

          {/* Sub-text */}
          <motion.p
            {...fadeUp(0.44, 0.82)}
            className="mb-12 max-w-[520px] text-[1rem] leading-[1.85] text-[#B3B3B3]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtext}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            {...fadeUp(0.58, 0.78)}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            {/* Primary — Reserve Table */}
            <motion.a
              href="#reservation"
              whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(212,175,55,0.30)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className={[
                'inline-flex items-center justify-center gap-2.5',
                'bg-[#D4AF37] text-[#0F0F0F]',
                'px-9 py-[15px]',
                'text-[10.5px] font-bold uppercase tracking-[0.25em]',
                'transition-colors duration-300 hover:bg-[#E4C248]',
              ].join(' ')}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {/* Fork & knife icon */}
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M3 2v7c0 1.1.9 2 2 2h4M9 2v20M15 2v6c0 2 2 2 2 2v12" />
              </svg>
              Reserve Your Table
            </motion.a>

            {/* Secondary — Explore Menu */}
            <motion.a
              href="#menu"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className={[
                'inline-flex items-center justify-center gap-2',
                'border border-white/18 text-white/85',
                'px-9 py-[15px]',
                'text-[10.5px] font-semibold uppercase tracking-[0.25em]',
                'transition-all duration-300 hover:border-white/35 hover:text-white hover:bg-white/5',
              ].join(' ')}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Menu
              <svg className="h-3 w-3 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Trust Bar ───────────────────────────── */}
          <motion.div
            {...fadeIn(0.75, 0.7)}
            className="mt-16 border-t border-white/8 pt-8"
          >
            <div className="flex flex-wrap items-center gap-y-5">
              {[
                { value: '5,000+', label: 'Happy Customers' },
                { value: '50+',    label: 'Signature Dishes' },
                { value: '4.8 ★',  label: 'Guest Rating'    },
                { value: '10 Yrs', label: 'Of Excellence'   },
              ].map((item, i) => (
                <HeroStat key={i} value={item.value} label={item.label} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Cue ──────────────────────────────── */}
      <ScrollCue />

      {/* ── Bottom gradient fade into next section ─── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent"
      />
    </section>
  );
};

export default Hero;
