import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Location', href: '#location' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      {/* Upper CTA Banner */}
      <div className="relative border-b border-white/6">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <p className="eyebrow-text mb-4">Begin Your Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready for an Unforgettable
                <span className="text-[#D4AF37] italic block">Dining Experience?</span>
              </h2>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
              <a href="#reservation" className="btn-primary">
                Reserve a Table
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="btn-outline">
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2C12 2 8 7 8 12a4 4 0 008 0c0-5-4-10-4-10z" />
                  <path d="M12 12v8" /><path d="M9 18h6" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bonfire
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Restaurant
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-[#B3B3B3] mb-8 max-w-xs"
               style={{ fontFamily: "'Inter', sans-serif" }}>
              A premium dining destination in Rahim Yar Khan, offering curated culinary experiences with elegant service and timeless hospitality.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://wa.me/923001234567', icon: <FaWhatsapp className="w-4 h-4" />, label: 'WhatsApp' },
                { href: 'https://instagram.com', icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
               style={{ fontFamily: "'Inter', sans-serif" }}>
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B3B3B3] transition-colors duration-200 hover:text-white flex items-center gap-2 group"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
               style={{ fontFamily: "'Inter', sans-serif" }}>
              Contact
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />,
                  text: 'Shahi Road, Officers Colony, Rahim Yar Khan',
                },
                {
                  icon: <FaPhoneAlt className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />,
                  text: '+92 300 1234567',
                },
                {
                  icon: <FaClock className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />,
                  text: 'Open till 1 AM daily',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.icon}
                  <p className="text-sm text-[#B3B3B3] leading-6"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
               style={{ fontFamily: "'Inter', sans-serif" }}>
              Hours
            </p>
            <div className="space-y-3">
              {[
                { day: 'Mon – Thu', time: '12 PM – 12 AM' },
                { day: 'Fri – Sat', time: '12 PM – 1 AM' },
                { day: 'Sunday', time: '12 PM – 1 AM' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b border-white/5 pb-3">
                  <span className="text-[#B3B3B3]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.day}
                  </span>
                  <span className="text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.time}
                  </span>
                </div>
              ))}
              <a href="#reservation" className="btn-outline w-full text-center mt-4 text-xs py-3">
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#B3B3B3]/60"
             style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Bonfire Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-[#B3B3B3]/40"
             style={{ fontFamily: "'Inter', sans-serif" }}>
            Crafted for premium dining experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
