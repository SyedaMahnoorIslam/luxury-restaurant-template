import React from 'react';
import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden bg-[#0F0F0F] border border-white/6 hover:border-[#D4AF37]/25 transition-colors duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/10 to-transparent" />

        {/* Price */}
        <div className="absolute top-3 right-3 bg-[#D4AF37] px-3 py-1.5">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#0F0F0F] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}>
            {item.price}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="w-6 h-px bg-[#D4AF37] mb-3 transition-all duration-300 group-hover:w-10" />
        <h3 className="text-lg font-bold text-white mb-2 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          {item.name}
        </h3>
        <p className="text-xs leading-6 text-[#B3B3B3]"
           style={{ fontFamily: "'Inter', sans-serif" }}>
          {item.description}
        </p>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.article>
  );
};

export default MenuCard;
