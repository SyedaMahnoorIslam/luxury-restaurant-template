import React from 'react';
import { motion } from 'framer-motion';

const StarRating = () => (
  <div className="flex items-center gap-0.5 mb-5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ review }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#171717] border border-white/6 hover:border-[#D4AF37]/20 p-8 transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
    >
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 w-12 h-px bg-[#D4AF37] group-hover:w-20 transition-all duration-500" />

      {/* Opening quote mark */}
      <div className="text-5xl text-[#D4AF37]/20 font-serif leading-none mb-2 select-none"
           style={{ fontFamily: "'Playfair Display', serif" }}>
        "
      </div>

      <StarRating />

      {/* Quote */}
      <p className="text-sm leading-7 text-[#B3B3B3] mb-8 italic"
         style={{ fontFamily: "'Inter', sans-serif" }}>
        {review.quote}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/6 mb-6" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-11 h-11 bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center">
          <span className="text-sm font-bold text-[#D4AF37]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
            {review.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white"
             style={{ fontFamily: "'Playfair Display', serif" }}>
            {review.name}
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B3B3B3]"
             style={{ fontFamily: "'Inter', sans-serif" }}>
            {review.title}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
