
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TileProps {
  color: string;
  title: string;
  icon?: ReactNode;
  size?: 1 | 2 | 4;
  onClick?: () => void;
  delay?: number;
}

const Tile = ({
  color,
  title,
  icon,
  size = 1,
  onClick,
  delay = 0,
}: TileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.1,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`win8-tile size-${size}`}
      style={{ backgroundColor: color }}
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        {icon && <div className="text-white text-5xl mb-4">{icon}</div>}
        <h3 className="text-white text-xl font-light tracking-tight">
          {title}
        </h3>
      </div>
      <motion.div
        className="absolute inset-0 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Tile;
