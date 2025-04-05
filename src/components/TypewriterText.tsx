
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  speed = 50,
  delay = 1000,
  loop = false,
  className = '',
  cursorClassName = 'text-primary',
  onComplete
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (isComplete && !loop) {
      onComplete && onComplete();
      return;
    }

    const currentText = texts[currentTextIndex];
    
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && currentIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed + Math.random() * 50);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, speed / 2);
    } else if (!isDeleting && currentIndex >= currentText.length) {
      // Finished typing current text
      if (texts.length === 1 && !loop) {
        setIsComplete(true);
        return;
      }
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, texts, currentTextIndex, speed, delay, loop, isComplete, onComplete]);

  return (
    <motion.div 
      className={`inline-flex ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{displayedText}</span>
      <motion.span 
        className={`${cursorClassName} ml-0.5`}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default TypewriterText;
