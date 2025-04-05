
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  tiltAmount?: number;
  glareAmount?: number;
  perspective?: number;
  glowColor?: string;
}

const TiltCard = ({ 
  children, 
  className = '', 
  glareColor = 'rgba(255,255,255,0.4)', 
  tiltAmount = 10,
  glareAmount = 0.5,
  perspective = 1000,
  glowColor = 'rgba(66, 245, 111, 0.4)' // Default glow color using primary green
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setRotateX((0.5 - y) * tiltAmount);
    setRotateY((x - 0.5) * tiltAmount);
    setGlarePosition({ x: x * 100, y: y * 100 });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        boxShadow: isHovered 
          ? `0 0 30px ${glowColor}`
          : '0 0 0 rgba(0,0,0,0)'
      }}
    >
      {children}
      
      {isHovered && (
        <>
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, rgba(255,255,255,0) 70%)`,
              opacity: glareAmount,
              transform: 'translateZ(1px)'
            }}
          />
          
          <motion.div
            className="absolute inset-0 pointer-events-none border-2 border-primary/40 rounded-[inherit] opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(1px)' }}
          />
        </>
      )}
    </motion.div>
  );
};

export default TiltCard;
