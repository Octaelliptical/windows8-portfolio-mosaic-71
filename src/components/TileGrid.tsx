
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TileGridProps {
  children: ReactNode;
}

const TileGrid = ({ children }: TileGridProps) => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default TileGrid;
