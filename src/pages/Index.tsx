
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import XSidebar from '../components/XSidebar';
import XMobileNav from '../components/XMobileNav';
import XRightSidebar from '../components/XRightSidebar';
import ProjectCard from '../components/ProjectCard';
import FloatingActionButton from '../components/FloatingActionButton';
import { ThemeProvider } from '../hooks/useTheme';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    setCurrentSection(section);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDownloadCV = () => {
    // Implement download functionality
    console.log('Downloading CV...');
    // In a real app, you would link to an actual PDF file
    // window.open('/resume.pdf', '_blank');
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

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern online store built with React and Node.js. Features include product browsing, cart management, and secure checkout.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node', 'MongoDB'],
      likes: 124,
      comments: 16,
      link: '#',
    },
    {
      id: 2,
      title: 'Fitness App',
      description: 'Mobile app for tracking workouts and nutrition. Users can create custom plans and monitor their progress over time.',
      tags: ['React Native', 'Firebase'],
      likes: 87,
      comments: 9,
      link: '#',
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description: 'Comprehensive dashboard for data visualization with real-time updates, customizable widgets, and user management.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Vue', 'Express', 'D3.js'],
      likes: 152,
      comments: 23,
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'Backend service for social media integration. Handles authentication, content delivery, and interaction metrics.',
      tags: ['Node.js', 'GraphQL', 'MongoDB'],
      likes: 68,
      comments: 7,
      link: '#',
    },
  ];

  return (
    <ThemeProvider>
      <div className="x-layout">
        <XSidebar currentSection={currentSection} onNavigate={scrollToSection} />
        
        <main className="x-main">
          <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-x-border p-4">
            <h1 className="text-xl font-bold">Portfolio</h1>
          </header>
          
          <section ref={sectionRefs.home} id="home" className="min-h-screen">
            <div className="p-4 border-b border-x-border">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-[3/1] bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4"
              >
                <div className="text-center px-4">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h1>
                  <p className="text-xl text-muted-foreground">Frontend Developer & UI Designer</p>
                </div>
              </motion.div>
              
              <div className="flex items-center space-x-4 py-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  JD
                </div>
                <div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">@johndoe</p>
                </div>
              </div>
              
              <p className="text-foreground my-4">
                Frontend developer passionate about creating beautiful, responsive web applications. Specialized in React and modern JavaScript.
              </p>
              
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <span>📍 New York, NY</span>
                <span>🔗 github.com/johndoe</span>
                <span>📅 Joined 2021</span>
              </div>
            </div>
            
            {/* Projects Feed */}
            <div>
              {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>
          
          <div ref={sectionRefs.about} id="about" className="min-h-screen">
            {/* About content will be loaded here */}
          </div>
          
          <div ref={sectionRefs.projects} id="projects" className="min-h-screen">
            {/* Projects content will be loaded here */}
          </div>
          
          <div ref={sectionRefs.contact} id="contact" className="min-h-screen">
            {/* Contact content will be loaded here */}
          </div>
        </main>
        
        <XRightSidebar />
        <XMobileNav 
          currentSection={currentSection} 
          onNavigate={scrollToSection} 
          toggleMobileMenu={toggleMobileMenu}
        />
        <FloatingActionButton onClick={handleDownloadCV} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
