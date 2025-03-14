
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu } from 'lucide-react';

interface XMobileNavProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  toggleMobileMenu: () => void;
}

const XMobileNav = ({ currentSection, onNavigate, toggleMobileMenu }: XMobileNavProps) => {
  const navItems = [
    { label: 'Home', section: 'home', icon: <Home /> },
    { label: 'About', section: 'about', icon: <User /> },
    { label: 'Projects', section: 'projects', icon: <Briefcase /> },
    { label: 'Contact', section: 'contact', icon: <Mail /> },
  ];

  return (
    <nav className="x-mobile-nav">
      {navItems.map((item) => (
        <motion.button
          key={item.section}
          className={`p-3 ${currentSection === item.section ? 'text-primary' : 'text-foreground'}`}
          onClick={() => onNavigate(item.section)}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.button>
      ))}
      <motion.button
        className="p-3"
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.9 }}
      >
        <Menu />
      </motion.button>
    </nav>
  );
};

export default XMobileNav;
