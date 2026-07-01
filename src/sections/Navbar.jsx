import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const defaultLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Reservation', href: '#reservation' },
];

/* ─── Animation Variants ─────────────────────────────────────── */
const navbarVariants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

const linkItemVariants = {
  closed: { opacity: 0, x: -18 },
  open: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.065, duration: 0.34, ease: 'easeOut' },
  }),
};

const iconVariants = {
  enter: (dir) => ({ rotate: dir * 90, opacity: 0 }),
  center: { rotate: 0, opacity: 1, transition: { duration: 0.22 } },
  exit: (dir) => ({ rotate: -dir * 90, opacity: 0, transition: { duration: 0.18 } }),
};

/* ─── Flame Icon ─────────────────────────────────────────────── */
const FlameIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="#0F0F0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-4 5.5-4 9.5a4 4 0 0 0 8 0C16 7.5 12 2 12 2z" />
    <path d="M12 13v7" />
    <path d="M9 18h6" />
  </svg>
);

/* ─── Component ──────────────────────────────────────────────── */
const Navbar = ({
  brand = 'Luxury',
  links = defaultLinks,
  whatsappNumber = '+1234567890',
  logoText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const rafRef = useRef(null);

  /* Scroll detection — throttled via rAF */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafRef.current = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      // className={[
      //   'fixed top-0 left-0 right-0 z-50',
      //   'transition-all duration-500 ease-in-out',
      //   scrolled
      //     ? 'bg-black/30 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
      //     // 'bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
      //     : 'bg-transparent border-b border-transparent',
      // ].join(' ')}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent',
      ].join(' ')}
    >
      {/* ── Inner Row ────────────────────────────────────── */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* ── Logo ─────────────────────────────────────── */}
        <a
          href="#home"
          aria-label="Luxury Restaurant — Home"
          className="group flex items-center gap-3 select-none"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.25 }}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
          >
            <FlameIcon />
          </motion.div>

          <div className="leading-none">
            <span
              className="block text-[1.05rem] font-bold tracking-[0.03em] text-white
                         transition-colors duration-300 group-hover:text-[#D4AF37]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {logoText || brand}
            </span>
            <span
              className="hidden sm:block text-[8.5px] font-semibold uppercase
                         tracking-[0.38em] text-[#D4AF37] mt-[3px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Restaurant
            </span>
          </div>
        </a>

        {/* ── Desktop Nav Links ─────────────────────────── */}
        <nav className="hidden lg:flex" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={[
                    'relative px-4 py-2.5 block group',
                    'text-[10.5px] font-semibold uppercase tracking-[0.22em]',
                    'transition-colors duration-300',
                    activeLink === link.href
                      ? 'text-[#D4AF37]'
                      : 'text-[#B3B3B3] hover:text-white',
                  ].join(' ')}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                  {/* Hover / active underline */}
                  {/* <span
                    className={[
                      'absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px',
                      'bg-[#D4AF37] transition-all duration-350',
                      activeLink === link.href ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5',
                    ].join(' ')}
                  /> */}
                  <span
                    className={[
                      'absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px bg-[#D4AF37]',
                      'transition-all duration-300',
                      activeLink === link.href ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5',
                    ].join(' ')}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTAs ──────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Reserve Table */}
          <motion.a
            href="#reservation"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className={[
              'inline-flex items-center justify-center px-6 py-[10px]',
              'border border-[#D4AF37]/55 text-[#D4AF37]',
              'text-[10.5px] font-semibold uppercase tracking-[0.22em]',
              'transition-all duration-300',
              'hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.18)]',
            ].join(' ')}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reserve Table
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact on WhatsApp"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className={[
              'inline-flex items-center gap-2 px-5 py-[10px]',
              'bg-[#22C55E] text-white',
              'text-[10.5px] font-semibold uppercase tracking-[0.18em]',
              'transition-all duration-300',
              'hover:bg-[#16a34a] hover:shadow-[0_4px_20px_rgba(34,197,94,0.35)]',
            ].join(' ')}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <FaWhatsapp className="h-[15px] w-[15px]" />
            WhatsApp
          </motion.a>
        </div>

        {/* ── Mobile Hamburger ──────────────────────────── */}
        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((p) => !p)}
          className={[
            'relative inline-flex h-10 w-10 items-center justify-center lg:hidden',
            'border border-white/10 bg-[#171717]',
            'text-white transition-all duration-300',
            'hover:border-[#D4AF37]/40 hover:text-[#D4AF37]',
          ].join(' ')}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="x"
                custom={1}
                variants={iconVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <HiX className="h-[18px] w-[18px]" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                custom={-1}
                variants={iconVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <HiMenu className="h-[18px] w-[18px]" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden border-t border-white/[0.06] bg-[#0F0F0F]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="px-6 pb-8 pt-3">

              {/* Nav links */}
              <ul className="mb-6 space-y-0.5">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={link.href}
                      onClick={() => { setIsOpen(false); setActiveLink(link.href); }}
                      className={[
                        'flex items-center justify-between py-3.5',
                        'border-b border-white/[0.05]',
                        'text-sm font-medium transition-colors duration-200',
                        activeLink === link.href
                          ? 'text-[#D4AF37]'
                          : 'text-[#B3B3B3] hover:text-white',
                      ].join(' ')}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-colors duration-200 ${activeLink === link.href ? 'text-[#D4AF37]' : 'text-[#B3B3B3]/50'}`}
                        fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTAs */}
              <motion.div
                custom={links.length}
                variants={linkItemVariants}
                initial="closed"
                animate="open"
                className="flex flex-col gap-3"
              >
                <a
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className={[
                    'flex w-full items-center justify-center py-3.5',
                    'border border-[#D4AF37]/55 text-[#D4AF37]',
                    'text-xs font-semibold uppercase tracking-[0.22em]',
                    'transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]',
                  ].join(' ')}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Reserve Table
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={[
                    'flex w-full items-center justify-center gap-2 py-3.5',
                    'bg-[#22C55E] text-white',
                    'text-xs font-semibold uppercase tracking-[0.18em]',
                    'transition-colors duration-300 hover:bg-[#16a34a]',
                  ].join(' ')}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
