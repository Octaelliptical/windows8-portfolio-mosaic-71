
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <motion.button
    className={`x-nav-item ${active ? 'font-bold' : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    <span className="text-2xl">{icon}</span>
    <span>{label}</span>
  </motion.button>
);

interface XSidebarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const XSidebar = ({ currentSection, onNavigate }: XSidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { label: 'Home', section: 'home', icon: <Home /> },
    { label: 'About', section: 'about', icon: <User /> },
    { label: 'Projects', section: 'projects', icon: <Briefcase /> },
    { label: 'Contact', section: 'contact', icon: <Mail /> },
  ];

  return (
    <aside className="x-sidebar">
      <div className="px-4 mb-8">
        <motion.div 
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.div>
      </div>

      <nav className="flex-1 space-y-2 px-2">
        {navItems.map((item) => (
          <NavItem
            key={item.section}
            icon={item.icon}
            label={item.label}
            active={currentSection === item.section}
            onClick={() => onNavigate(item.section)}
          />
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <div className="flex items-center space-x-2 p-3">
          <button
            className="p-2 rounded-full hover:bg-muted transition-colors"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <span className="text-sm text-muted-foreground">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </div>
        
        <motion.button
          className="x-button w-full mt-4"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          Download CV
        </motion.button>
      </div>
    </aside>
  );
};

export default XSidebar;
