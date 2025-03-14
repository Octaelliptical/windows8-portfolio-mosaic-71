
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import TileGrid from '../components/TileGrid';
import Tile from '../components/Tile';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import { User, Briefcase, Phone, Mail, Code, Layout, Settings, ArrowDown } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={scrollToSection} currentSection={currentSection} />

      {/* Hero Section */}
      <section 
        id="home" 
        ref={sectionRefs.home}
        className="pt-32 pb-24 min-h-screen flex items-center"
      >
        <div className="win8-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                Hello, I'm <span className="font-normal text-win8-blue">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI/UX Designer & Front-end Developer
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-3 bg-win8-blue text-white hover:bg-win8-blue/90 transition-colors"
                >
                  About Me
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 border border-win8-blue text-win8-blue hover:bg-win8-blue/10 transition-colors"
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
                <Tile color="#0078D7" title="About Me" icon={<User />} delay={0} onClick={() => scrollToSection('about')} />
                <Tile color="#5DC21E" title="Projects" icon={<Briefcase />} delay={1} onClick={() => scrollToSection('projects')} />
                <Tile color="#00B7C3" title="Skills" icon={<Code />} delay={2} size={2} onClick={() => scrollToSection('about')} />
                <Tile color="#E81123" title="Contact" icon={<Mail />} delay={3} onClick={() => scrollToSection('contact')} />
                <Tile color="#FFB900" title="Experience" icon={<Layout />} delay={4} size={2} onClick={() => scrollToSection('about')} />
                <Tile color="#6B69D6" title="Services" icon={<Settings />} delay={5} onClick={() => scrollToSection('about')} />
              </TileGrid>
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-gray-500 hover:text-win8-blue transition-colors"
            >
              <span className="mb-2">Scroll Down</span>
              <ArrowDown className="animate-bounce" />
            </button>
          </motion.div>
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
      <footer className="bg-win8-blue text-white py-8">
        <div className="win8-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 John Doe. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
