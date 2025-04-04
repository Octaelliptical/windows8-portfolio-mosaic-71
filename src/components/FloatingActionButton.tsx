
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={onClick}
      aria-label="Download CV"
    >
      <DownloadCloud size={24} />
    </motion.button>
  );
};

export default FloatingActionButton;
