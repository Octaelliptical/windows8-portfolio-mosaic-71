
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TileGridProps {
  children: ReactNode;
}

const TileGrid = ({ children }: TileGridProps) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TileGrid;
