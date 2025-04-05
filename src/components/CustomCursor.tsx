
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const mouseDownHandler = () => setIsActive(true);
    const mouseUpHandler = () => setIsActive(false);

    const checkCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement) : null;
      setIsPointer(computedStyle?.cursor === 'pointer');
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    
    const interval = setInterval(checkCursorType, 100);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      clearInterval(interval);
    };
  }, [position]);

  // Don't show custom cursor on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed w-5 h-5 rounded-full bg-primary/30 z-50 pointer-events-none mix-blend-difference"
        style={{
          left: position.x - 10,
          top: position.y - 10
        }}
        animate={{
          scale: isActive ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <motion.div
        className="fixed w-10 h-10 rounded-full border-2 border-primary z-50 pointer-events-none mix-blend-difference"
        style={{
          left: position.x - 20,
          top: position.y - 20
        }}
        animate={{
          scale: isPointer ? 1.5 : isActive ? 0.8 : 1,
          opacity: isPointer ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 28
        }}
      />
    </>
  );
};

export default CustomCursor;
