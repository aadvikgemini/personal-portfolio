import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToHash } from '../lib/scroll';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        type="button"
        onClick={() => scrollToHash('#hero')}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0e131d]/90 hover:bg-[#141b27] border border-sky-500/30 text-sky-400 hover:text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Back to top of page"
      >
        <ArrowUp className="size-4" />
      </motion.button>
    </AnimatePresence>
  );
}
