
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Info, GitHub, Mail, X } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (action: string) => {
    if (action === 'cv') {
      onClick();
    }
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-40 right-6 md:bottom-28 md:right-8 flex flex-col items-end space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FloatingOption 
              icon={<Download size={20} />}
              label="Download CV"
              onClick={() => handleOptionClick('cv')}
            />
            <FloatingOption 
              icon={<GitHub size={20} />}
              label="GitHub"
              onClick={() => handleOptionClick('github')}
            />
            <FloatingOption 
              icon={<Info size={20} />}
              label="About Me"
              onClick={() => handleOptionClick('about')}
            />
            <FloatingOption 
              icon={<Mail size={20} />}
              label="Contact"
              onClick={() => handleOptionClick('contact')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed bottom-20 right-6 md:bottom-8 md:right-8 bg-terminal-green text-black w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,0,0.5)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? <X size={24} /> : <Download size={24} />}
      </motion.button>
    </>
  );
};

const FloatingOption = ({ icon, label, onClick }) => {
  return (
    <motion.div
      className="flex items-center cursor-pointer"
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="bg-black/80 text-terminal-green px-3 py-2 rounded-l-md border border-terminal-green/30"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="bg-terminal-green text-black w-9 h-9 rounded-r-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default FloatingActionButton;
