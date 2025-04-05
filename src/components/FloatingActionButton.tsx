
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadCloud, Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
    setIsOpen(false);
  };

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const buttonVariants = {
    closed: { scale: 1 },
    open: { scale: 1.1 }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 items-end"
            variants={menuVariants}
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-3 items-end">
              <ActionItem 
                icon={<DownloadCloud size={20} />} 
                label="Download CV" 
                onClick={handleDownload} 
                color="bg-blue-500"
              />
              <ActionItem 
                icon={theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} 
                label={theme === 'dark' ? "Light Mode" : "Dark Mode"} 
                onClick={toggleTheme} 
                color="bg-purple-500"
              />
              <ActionItem 
                icon={<Github size={20} />} 
                label="GitHub" 
                onClick={() => window.open('https://github.com/karanrana097', '_blank')}
                color="bg-gray-700" 
              />
              <ActionItem 
                icon={<Linkedin size={20} />} 
                label="LinkedIn" 
                onClick={() => window.open('https://www.linkedin.com/in/karan-rana-69b2a21a9/', '_blank')}
                color="bg-blue-600" 
              />
              <ActionItem 
                icon={<Mail size={20} />} 
                label="Email" 
                onClick={() => window.open('mailto:karanarora097@gmail.com', '_blank')}
                color="bg-red-500" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`p-4 rounded-full bg-primary text-primary-foreground shadow-lg ${isOpen ? 'shadow-xl' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: isOpen ? 45 : 0 }}
        transition={{ delay: 0.5 }}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        variants={buttonVariants}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </div>
  );
};

const ActionItem = ({ icon, label, onClick, color }: { 
  icon: React.ReactNode, 
  label: string, 
  onClick: (e: React.MouseEvent) => void,
  color: string
}) => {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card border border-border/30 shadow-md px-3 py-2 rounded-lg text-sm"
      >
        {label}
      </motion.div>
      <motion.div
        className={`${color} text-white p-3 rounded-full shadow-md flex items-center justify-center`}
        onClick={onClick}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default FloatingActionButton;
