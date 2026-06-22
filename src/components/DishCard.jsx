import React from 'react';
import { motion } from 'framer-motion';

const DishCard = ({ dish }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden bg-[#171717] border border-white/6 hover:border-[#D4AF37]/25 transition-colors duration-500 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transformOrigin: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/20 to-transparent" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-[#D4AF37] px-3 py-1.5">
          <span className="text-[11px] font-semibold tracking-[0.15em] text-[#0F0F0F] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}>
            {dish.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-5">
        {/* Gold accent line */}
        <div className="w-8 h-px bg-[#D4AF37] mb-4 transition-all duration-300 group-hover:w-14" />

        <h3 className="text-xl font-bold text-white mb-3 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          {dish.name}
        </h3>

        <p className="text-sm leading-7 text-[#B3B3B3]"
           style={{ fontFamily: "'Inter', sans-serif" }}>
          {dish.description}
        </p>
      </div>

      {/* Bottom hover glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.article>
  );
};

export default DishCard;
