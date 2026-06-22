import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import DishCard from '../components/DishCard';
import signatureDishesData from '../data/signatureDishesData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const SignatureDishes = ({
  title = 'Signature Dishes',
  subtitle = 'A selection of our most acclaimed culinary creations — crafted for those who seek the extraordinary.',
}) => {
  return (
    <section className="bg-[#171717] py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Decorative gold gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Signature" title={title} description={subtitle} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {signatureDishesData.map((dish) => (
            <motion.div key={dish.id} variants={cardVariants}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-14"
        >
          <a href="#menu" className="btn-outline">
            View Full Menu
          </a>
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </section>
  );
};

export default SignatureDishes;
