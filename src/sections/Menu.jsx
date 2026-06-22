import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import menuData from '../data/menuData';
import MenuCard from '../components/MenuCard';
import SectionHeader from '../components/SectionHeader';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const Menu = ({
  title = 'Dining Menu',
  subtitle = 'Curated plates designed for an elevated culinary experience — each dish a testament to our craft.',
}) => {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || 'bbq');

  const activeItems = useMemo(() => {
    return menuData.find((c) => c.id === activeCategory)?.items || [];
  }, [activeCategory]);

  return (
    <section id="menu" className="bg-[#0F0F0F] py-24 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Menu" title={title} description={subtitle} />

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {menuData.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-[#0F0F0F] bg-[#D4AF37]'
                  : 'text-[#B3B3B3] border border-white/10 hover:border-[#D4AF37]/40 hover:text-white bg-transparent'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category.title}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#D4AF37] -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {activeItems.map((item) => (
              <motion.div key={item.id} variants={cardReveal}>
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
