
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Mail, User, X, Code, MoveRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (action: string) => {
    switch (action) {
      case 'cv':
        onClick();
        toast({
          title: "CV Downloaded",
          description: "Thank you for your interest in my profile!",
          variant: "default",
        });
        break;
      case 'github':
        toast({
          title: "GitHub",
          description: "Redirecting to GitHub profile...",
          variant: "default",
        });
        break;
      case 'about':
        toast({
          title: "About Me",
          description: "Navigating to About section...",
          variant: "default",
        });
        break;
      case 'contact':
        toast({
          title: "Contact",
          description: "Let's get in touch!",
          variant: "default",
        });
        break;
      case 'projects':
        toast({
          title: "Projects",
          description: "Exploring my latest work...",
          variant: "default",
        });
        break;
    }
    setIsOpen(false);
  };

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 md:bottom-28 md:right-8 flex flex-col items-end gap-2"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div variants={item}>
              <FloatingOption 
                icon={<Download size={20} />}
                label="Download CV"
                onClick={() => handleOptionClick('cv')}
              />
            </motion.div>

            <motion.div variants={item}>
              <FloatingOption 
                icon={<Github size={20} />}
                label="GitHub"
                onClick={() => handleOptionClick('github')}
              />
            </motion.div>

            <motion.div variants={item}>
              <FloatingOption 
                icon={<Code size={20} />}
                label="Projects"
                onClick={() => handleOptionClick('projects')}
              />
            </motion.div>

            <motion.div variants={item}>
              <FloatingOption 
                icon={<User size={20} />}
                label="About Me"
                onClick={() => handleOptionClick('about')}
              />
            </motion.div>

            <motion.div variants={item}>
              <FloatingOption 
                icon={<Mail size={20} />}
                label="Contact"
                onClick={() => handleOptionClick('contact')}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed bottom-10 right-6 md:bottom-8 md:right-8 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(132, 204, 22, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
      >
        {isOpen ? <X size={24} /> : <MoveRight size={24} />}
      </motion.button>
    </>
  );
};

const FloatingOption = ({ icon, label, onClick }) => {
  return (
    <motion.div
      className="flex items-center cursor-pointer group"
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="bg-background text-foreground px-3 py-2 rounded-l-md border border-border/30 group-hover:bg-background-light transition-colors"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="bg-primary text-primary-foreground w-9 h-9 rounded-r-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default FloatingActionButton;
