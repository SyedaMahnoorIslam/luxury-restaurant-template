import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testinomialData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Testimonials = ({
  title = 'Guest Impressions',
  subtitle = 'Words from discerning guests who have experienced our dining sanctuary — their stories define us.',
}) => {
  return (
    <section id="testimonials" className="bg-[#0F0F0F] py-24 lg:py-32 text-white relative overflow-hidden">

      {/* Ambient gold glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Testimonials" title={title} description={subtitle} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 lg:grid-cols-3 md:grid-cols-2"
        >
          {testimonials.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <TestimonialCard review={review} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#B3B3B3] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Join hundreds of satisfied guests who made Luxury their choice
          </p>
          <a href="#reservation" className="btn-primary">
            Make a Reservation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
