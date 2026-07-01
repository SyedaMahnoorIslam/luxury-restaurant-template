import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import galleryData from '../data/galleryData';
import SectionHeader from '../components/SectionHeader';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Gallery = ({
  title = 'Photo Gallery',
  subtitle = 'A glimpse of our signature dishes and the elevated dining experience that awaits you.',
}) => {
  const [hoveredId, setHoveredId] = useState(null);

  // Layout: first item spans 2 cols, 2nd and 3rd are tall, rest are regular
  const getSpanClass = (index) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2';
    if (index === 3) return 'md:col-span-2';
    return '';
  };

  return (
    <section id="gallery" className="bg-[#171717] py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Top & bottom gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Gallery" title={title} description={subtitle} />

        {/* Desktop Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden md:grid grid-cols-4 grid-rows-3 gap-3 h-[640px]"
        >
          {galleryData.slice(0, 7).map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative overflow-hidden cursor-pointer ${getSpanClass(index)}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hoveredId === item.id ? 'scale(1.08)' : 'scale(1.01)',
                }}
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent" />

              {/* Hover overlay */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0F0F0F]/50"
                  />
                )}
              </AnimatePresence>

              {/* Caption */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-1"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      Luxury Signature
                    </p>
                    <h3 className="text-lg font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Always-visible label for large item */}
              {index === 0 && hoveredId !== item.id && (
                <div className="absolute bottom-5 left-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                    Featured
                  </p>
                  <h3 className="text-xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                </div>
              )}

              {/* Gold border on hover */}
              <div
                className="absolute inset-0 border-2 border-[#D4AF37]/0 transition-all duration-400"
                style={{
                  borderColor: hoveredId === item.id ? 'rgba(212,175,55,0.4)' : 'transparent',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="rounded-none"
          >
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-1"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      Signature
                    </p>
                    <h3 className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </section>
  );
};

export default Gallery;
