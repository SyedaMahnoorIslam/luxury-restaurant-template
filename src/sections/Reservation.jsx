import React from 'react';
import { motion } from 'framer-motion';

const inputClass = `
  w-full bg-[#0F0F0F] border border-white/10 text-white text-sm
  px-5 py-4 outline-none transition-all duration-300
  placeholder:text-[#B3B3B3]/40 appearance-none
  focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/15
`;

const FormField = ({ label, htmlFor, children }) => (
  <div className="space-y-2.5">
    <label
      htmlFor={htmlFor}
      className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B3B3B3]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {label}
    </label>
    {children}
  </div>
);

const Reservation = ({
  title = 'Reserve Your Table',
  subtitle = 'Experience impeccable hospitality and an unforgettable evening at Bonfire Restaurant.',
}) => {
  return (
    <section id="reservation" className="bg-[#171717] py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Background ambient */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/4 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          {/* Left — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-[#D4AF37]" />
              <p className="eyebrow-text">Reservation</p>
            </div>

            <h2 className="heading-section text-white mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              {title}
            </h2>

            <p className="body-text text-[#B3B3B3] leading-8 mb-12">
              {subtitle}
            </p>

            {/* Info blocks */}
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Opening Hours',
                  value: 'Mon – Sun: 12 PM – 1 AM',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Shahi Road, Officers Colony\nRahim Yar Khan',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Contact',
                  value: '+92 300 1234567',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1.5"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </p>
                    <p className="text-sm text-[#B3B3B3] whitespace-pre-line leading-6"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-[#0F0F0F] border border-white/6 p-8 sm:p-10"
          >
            <p className="text-lg font-bold text-white mb-8"
               style={{ fontFamily: "'Playfair Display', serif" }}>
              Book Your Table
            </p>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Full Name" htmlFor="res-name">
                  <input id="res-name" name="name" type="text" placeholder="Your full name" className={inputClass} />
                </FormField>
                <FormField label="Phone Number" htmlFor="res-phone">
                  <input id="res-phone" name="phone" type="tel" placeholder="03xx xxx xxxx" className={inputClass} />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Date" htmlFor="res-date">
                  <input id="res-date" name="date" type="date" className={inputClass} />
                </FormField>
                <FormField label="Time" htmlFor="res-time">
                  <input id="res-time" name="time" type="time" className={inputClass} />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Number of Guests" htmlFor="res-guests">
                  <select id="res-guests" name="guests" className={inputClass}>
                    <option value="" disabled>Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </FormField>
                <FormField label="Occasion" htmlFor="res-occasion">
                  <select id="res-occasion" name="occasion" className={inputClass}>
                    <option value="" disabled>Select occasion</option>
                    <option value="dinner">Fine Dining</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="other">Other</option>
                  </select>
                </FormField>
              </div>

              <FormField label="Special Requests" htmlFor="res-request">
                <textarea
                  id="res-request"
                  name="request"
                  rows="3"
                  placeholder="Seating preferences, dietary needs, or any special arrangements…"
                  className={inputClass}
                />
              </FormField>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full mt-2"
              >
                Confirm Reservation
              </motion.button>

              <p className="text-center text-[10px] text-[#B3B3B3]/60 tracking-wide"
                 style={{ fontFamily: "'Inter', sans-serif" }}>
                We will confirm your reservation within 1 hour
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </section>
  );
};

export default Reservation;
