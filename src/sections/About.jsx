import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const pillars = [
  {
    icon: '✦',
    title: 'Atmosphere',
    desc: 'Warm, intimate seating with premium finishes and subtle ambient lighting that sets the perfect mood.',
  },
  {
    icon: '✦',
    title: 'Cuisine',
    desc: 'Signature dishes inspired by local heritage, elevated with global luxury dining standards.',
  },
  {
    icon: '✦',
    title: 'Service',
    desc: 'Attentive staff who anticipate your needs while preserving a calm, luxurious dining rhythm.',
  },
  {
    icon: '✦',
    title: 'Legacy',
    desc: 'Over a decade of refined hospitality rooted in authenticity, elegance, and passion.',
  },
];

const About = ({
  title = 'A Refined Dining Experience',
  description = 'Bonfire Restaurant blends contemporary luxury with rich local flavors, delivering unforgettable hospitality in Rahim Yar Khan.',
}) => {
  return (
    <section id="about" className="bg-[#0F0F0F] py-24 lg:py-32 text-white relative overflow-hidden">

      {/* Decorative vertical gold line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="About Us" title={title} description={description} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left — Story */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                  alt="Bonfire Restaurant elegant interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 hidden lg:block bg-[#D4AF37] p-6 text-center shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
                <p className="text-3xl font-bold text-[#0F0F0F]" style={{ fontFamily: "'Playfair Display', serif" }}>12+</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#0F0F0F]/80 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Years of Excellence</p>
              </div>
            </div>

            {/* Story text below image */}
            <div className="mt-10 pr-0 lg:pr-8">
              <p className="body-text leading-8 text-[#B3B3B3] mb-6">
                At Bonfire Restaurant, every dish is crafted with premium ingredients, expert technique, and a dedication to authenticity. Our menu is designed for guests who seek an elevated culinary journey rooted in refined presentation and timeless elegance.
              </p>
              <p className="body-text leading-8 text-[#B3B3B3]">
                From reserved seating to personalized menu recommendations, every moment is tailored to create memories that linger long after the last course.
              </p>
            </div>
          </motion.div>

          {/* Right — Pillars */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-1"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: 'easeOut' }}
                className="group flex items-start gap-5 p-6 border border-transparent hover:border-[#D4AF37]/15 hover:bg-[#171717] transition-all duration-400 cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <span className="text-[#D4AF37] text-sm">✦</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#B3B3B3]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-6 px-6">
              <a href="#reservation" className="btn-primary">
                Book Your Experience
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
