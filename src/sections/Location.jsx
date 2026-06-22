import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Location = ({
  address = 'Shahi Road, Officers Colony, Rahim Yar Khan',
  phone = '+92 300 1234567',
  hours = 'Mon – Sun: 12:00 PM – 1:00 AM',
  mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.483637728339!2d70.33848297555568!3d28.420251682439333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921d095220cb8eb%3A0xc3403cb2f9f0519f!2sOfficers%20Colony%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
}) => {
  const infoItems = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4 text-[#D4AF37]" />,
      label: 'Address',
      value: address,
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4 text-[#D4AF37]" />,
      label: 'Phone',
      value: phone,
    },
    {
      icon: <FaClock className="w-4 h-4 text-[#D4AF37]" />,
      label: 'Opening Hours',
      value: hours,
    },
  ];

  return (
    <section id="location" className="bg-[#0F0F0F] py-24 lg:py-32 text-white relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block h-px w-8 bg-[#D4AF37]" />
            <p className="eyebrow-text">Location</p>
            <span className="block h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="heading-section text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Us at Bonfire
          </h2>
          <p className="body-text text-[#B3B3B3]">
            Experience refined dining in the heart of Rahim Yar Khan, where classic luxury meets warm local hospitality.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">

          {/* Map */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden border border-white/6 relative min-h-[400px]"
          >
            <iframe
              title="Bonfire Restaurant Location"
              src={mapSrc}
              className="w-full h-full min-h-[400px] border-0 grayscale brightness-75 contrast-125"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay border */}
            <div className="absolute inset-0 border border-[#D4AF37]/15 pointer-events-none" />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between bg-[#171717] border border-white/6 p-8 space-y-8"
          >
            <div>
              <p className="text-lg font-bold text-white mb-8"
                 style={{ fontFamily: "'Playfair Display', serif" }}>
                Visit Us
              </p>

              <div className="space-y-7">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1.5"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.label}
                      </p>
                      <p className="text-sm text-[#B3B3B3] leading-6"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="h-px bg-white/6 mb-6" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-4"
                 style={{ fontFamily: "'Inter', sans-serif" }}>
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-4 py-2.5 text-xs text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/20"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-4 py-2.5 text-xs text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/20"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
