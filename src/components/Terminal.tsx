
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface TerminalProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ currentSection, onSectionChange }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to my portfolio. Type "help" to see available commands.']);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, { description: string; action: () => void }> = {
    help: {
      description: 'Show available commands',
      action: () => {
        const commandsText = Object.entries(commands)
          .map(([cmd, { description }]) => `  - ${cmd}: ${description}`)
          .join('\n');
        addToHistory(`Available commands:\n${commandsText}`);
      }
    },
    clear: {
      description: 'Clear terminal history',
      action: () => setHistory([])
    },
    about_me: {
      description: 'Display information about me',
      action: () => onSectionChange('about')
    },
    projects: {
      description: 'Show my projects',
      action: () => onSectionChange('projects')
    },
    contact: {
      description: 'Display contact information',
      action: () => onSectionChange('contact')
    },
    home: {
      description: 'Go to home screen',
      action: () => onSectionChange('home')
    },
    download_cv: {
      description: 'Download my CV',
      action: () => {
        addToHistory('Downloading CV...');
        // Implement download functionality
        console.log('CV download triggered');
      }
    }
  };

  const addToHistory = (text: string) => {
    setHistory(prev => [...prev, text]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const handleCommand = () => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (trimmedInput) {
      addToHistory(`> ${trimmedInput}`);
      
      if (commands[trimmedInput]) {
        commands[trimmedInput].action();
      } else {
        addToHistory(`Command not found: ${trimmedInput}. Type "help" to see available commands.`);
      }
      
      setInput('');
    }
  };

  useEffect(() => {
    // Auto-focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // Ensure input is focused when clicked anywhere in the terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <motion.div 
      className="terminal-container border border-terminal-green/50 rounded-md bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleTerminalClick}
    >
      <div 
        ref={historyRef}
        className="terminal-history p-4 h-[calc(100vh-200px)] overflow-y-auto"
      >
        {history.map((line, index) => (
          <div key={index} className="my-1 text-terminal-green">
            {line}
          </div>
        ))}
        
        <AnimatePresence mode="wait">
          {currentSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="terminal-section my-4 border-l-2 border-terminal-green/50 pl-4"
            >
              <h2 className="text-xl mb-3 text-terminal-green font-bold">[ABOUT_ME]</h2>
              <div className="text-terminal-green font-mono">
                <p>Name: John Doe</p>
                <p>Role: Frontend Developer & UI Designer</p>
                <p>Location: New York, NY</p>
                <p className="my-2">Skills:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>React, TypeScript, Next.js</li>
                  <li>Tailwind CSS, Styled Components</li>
                  <li>Framer Motion, GSAP</li>
                  <li>UI/UX Design, Figma</li>
                </ul>
                <p className="my-2">Experience:</p>
                <p>- Senior Frontend Developer at Tech Corp (2020-Present)</p>
                <p>- UI Designer at Design Studio (2018-2020)</p>
                <p>- Junior Developer at StartUp Inc (2016-2018)</p>
              </div>
            </motion.div>
          )}
          
          {currentSection === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="terminal-section my-4 border-l-2 border-terminal-green/50 pl-4"
            >
              <h2 className="text-xl mb-3 text-terminal-green font-bold">[PROJECTS]</h2>
              <div className="text-terminal-green font-mono space-y-4">
                {[
                  {
                    title: "E-commerce Website",
                    desc: "A modern online store built with React and Node.js",
                    tech: "React, Node.js, MongoDB",
                    link: "#"
                  },
                  {
                    title: "Fitness App",
                    desc: "Mobile app for tracking workouts and nutrition",
                    tech: "React Native, Firebase",
                    link: "#"
                  },
                  {
                    title: "Admin Dashboard",
                    desc: "Comprehensive dashboard for data visualization",
                    tech: "Vue.js, D3.js, Express",
                    link: "#"
                  },
                  {
                    title: "Social Media API",
                    desc: "Backend service for social media integration",
                    tech: "Node.js, GraphQL, MongoDB",
                    link: "#"
                  }
                ].map((project, idx) => (
                  <div key={idx} className="project-item border border-terminal-green/30 p-3 rounded">
                    <div className="font-bold">{project.title}</div>
                    <div>{project.desc}</div>
                    <div className="text-terminal-green/70 text-sm mt-1">Tech: {project.tech}</div>
                    <a href={project.link} className="inline-flex items-center text-terminal-green hover:underline mt-2">
                      View Project <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          {currentSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="terminal-section my-4 border-l-2 border-terminal-green/50 pl-4"
            >
              <h2 className="text-xl mb-3 text-terminal-green font-bold">[CONTACT]</h2>
              <div className="text-terminal-green font-mono">
                <p>Email: hello@johndoe.com</p>
                <p>GitHub: github.com/johndoe</p>
                <p>LinkedIn: linkedin.com/in/johndoe</p>
                <p>Twitter: twitter.com/johndoe</p>
                <p className="mt-4">Feel free to reach out for collaboration or opportunities!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="terminal-input-line flex items-center p-4 border-t border-terminal-green/30">
        <span className="text-terminal-green mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-terminal-green outline-none font-mono"
          placeholder="Type a command (help, about_me, projects, contact...)"
        />
      </div>
    </motion.div>
  );
};

export default Terminal;
