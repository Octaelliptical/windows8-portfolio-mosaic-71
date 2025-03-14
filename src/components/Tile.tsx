
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TileProps {
  color: string;
  title: string;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'wide' | 'large';
  onClick?: () => void;
  delay?: number;
}

const Tile = ({
  color,
  title,
  icon,
  size = 'small',
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
        duration: 0.3,
        delay: delay * 0.1,
        ease: 'easeOut',
      },
    },
  };

  // Map size to appropriate classes
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1 aspect-square';
      case 'medium':
        return 'col-span-2 row-span-1 aspect-[2/1]';
      case 'wide':
        return 'col-span-2 row-span-1 aspect-[2/1]';
      case 'large':
        return 'col-span-2 row-span-2 aspect-square';
      default:
        return 'col-span-1 row-span-1 aspect-square';
    }
  };

  return (
    <motion.div
      className={`${getSizeClasses()} select-none`}
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-full w-full relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          {icon && <div className="text-white text-4xl mb-2">{icon}</div>}
          <h3 className="text-white text-base font-light tracking-tight mt-auto">
            {title}
          </h3>
        </div>
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default Tile;
