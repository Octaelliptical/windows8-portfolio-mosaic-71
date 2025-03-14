
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <motion.button
      className="fixed bottom-20 right-6 md:bottom-8 md:right-8 bg-terminal-green text-black w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,0,0.5)]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Download size={24} />
    </motion.button>
  );
};

export default FloatingActionButton;
