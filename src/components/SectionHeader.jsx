import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mb-16 ${isLeft ? 'text-left' : 'mx-auto max-w-3xl text-center'}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${isLeft ? '' : 'justify-center'}`}>
          <span className="block h-px w-8 bg-[#D4AF37]" />
          <p className="eyebrow-text">{eyebrow}</p>
          <span className="block h-px w-8 bg-[#D4AF37]" />
        </div>
      )}

      <h2 className="heading-section text-white mb-5">
        {title}
      </h2>

      {description && (
        <p className="body-text max-w-2xl leading-8 text-[#B3B3B3] mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
