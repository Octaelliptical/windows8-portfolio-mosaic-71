
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import TileGrid from '../components/TileGrid';
import Tile from '../components/Tile';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import { User, Briefcase, Phone, Mail, Code, Layout, Settings, X, Search, Home, MessageSquare } from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const height = ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar onNavigate={scrollToSection} currentSection={currentSection} />

      {/* Hero Section */}
      <section 
        id="home" 
        ref={sectionRefs.home}
        className="pt-32 pb-24 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hello, I'm <span className="text-blue-400">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                UI/UX Designer & Front-end Developer
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-3 bg-blue-400 text-white hover:bg-blue-500 rounded-full transition-colors"
                >
                  About Me
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-full transition-colors"
                >
                  View Projects
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TileGrid>
                <Tile color="#1DA1F2" title="About Me" icon={<User />} size="small" delay={0} onClick={() => scrollToSection('about')} />
                <Tile color="#1DA1F2" title="Projects" icon={<Briefcase />} size="small" delay={1} onClick={() => scrollToSection('projects')} />
                <Tile color="#1DA1F2" title="Skills" icon={<Code />} size="small" delay={2} onClick={() => scrollToSection('about')} />
                <Tile color="#1DA1F2" title="Contact" icon={<Mail />} size="small" delay={3} onClick={() => scrollToSection('contact')} />
                <Tile color="#1DA1F2" title="Feed" icon={<MessageSquare />} size="small" delay={4} onClick={() => scrollToSection('about')} />
                <Tile color="#1DA1F2" title="Home" icon={<Home />} size="small" delay={5} onClick={() => scrollToSection('home')} />
              </TileGrid>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={sectionRefs.about}>
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div ref={sectionRefs.projects}>
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <div ref={sectionRefs.contact}>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <X size={18} />
              <p>© 2023 John Doe. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
