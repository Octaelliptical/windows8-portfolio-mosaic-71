
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Navbar = ({ onNavigate, currentSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="win8-container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-bold text-2xl text-win8-blue"
            onClick={() => handleNavigate('home')}
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavigate(item.section)}
                className={`px-3 py-2 text-lg transition-colors duration-200 relative ${
                  currentSection === item.section
                    ? 'text-win8-blue'
                    : 'text-gray-600 hover:text-win8-blue'
                }`}
              >
                {item.name}
                {currentSection === item.section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-win8-blue" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-win8-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavigate(item.section)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base ${
                  currentSection === item.section
                    ? 'bg-win8-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
