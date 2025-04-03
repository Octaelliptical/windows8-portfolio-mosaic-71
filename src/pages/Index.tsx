
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '../components/Terminal';
import FloatingActionButton from '../components/FloatingActionButton';
import { ThemeProvider } from '../hooks/useTheme';
import PageTransition from '../components/PageTransition';
import CapabilitiesShowcase from '../components/CapabilitiesShowcase';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [isHacking, setIsHacking] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate hacking animation for 3 seconds
    const timer = setTimeout(() => {
      setIsHacking(false);
      toast({
        title: "Access Granted",
        description: "Welcome to the terminal portfolio",
        variant: "default",
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [toast]);

  const handleDownloadCV = () => {
    toast({
      title: "CV Downloaded",
      description: "Thank you for your interest in my profile!",
      variant: "default",
    });
  };

  return (
    <ThemeProvider>
      <div className="terminal-background min-h-screen bg-black text-terminal-green font-mono">
        <AnimatePresence mode="wait">
          {isHacking ? (
            <PageTransition key="hacking">
              <HackingAnimation />
            </PageTransition>
          ) : (
            <PageTransition key="main">
              <div className="container mx-auto px-4 py-8">
                <TerminalHeader />
                <Terminal 
                  currentSection={currentSection}
                  onSectionChange={setCurrentSection}
                />
                {currentSection === 'capabilities' && (
                  <CapabilitiesShowcase />
                )}
                <FloatingActionButton onClick={handleDownloadCV} />
              </div>
            </PageTransition>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

const TerminalHeader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mb-4 border-b border-terminal-green/30 pb-2"
  >
    <div className="flex items-center">
      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
      <div className="flex-1 text-center text-terminal-green text-sm">
        user@portfolio:~
      </div>
    </div>
  </motion.div>
);

const HackingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = [
    'Initializing system...',
    'Connecting to portfolio mainframe...',
    'Bypassing security protocols...',
    'Accessing portfolio data...',
    'Compiling portfolio assets...',
    'Establishing encrypted connection...',
    'Rendering interface...',
    'Complete. Welcome.'
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentPhraseIndex < phrases.length) {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (currentCharIndex < currentPhrase.length) {
          setText(prev => prev + currentPhrase[currentCharIndex]);
          currentCharIndex++;
          timeoutId = setTimeout(typeNextCharacter, 30 + Math.random() * 50);
        } else {
          setText(prev => prev + '\n');
          currentPhraseIndex++;
          currentCharIndex = 0;
          timeoutId = setTimeout(typeNextCharacter, 300);
        }
      }
    };

    timeoutId = setTimeout(typeNextCharacter, 300);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl h-80 bg-black border border-terminal-green/50 rounded-md p-4 overflow-hidden"
      >
        <div className="font-mono text-terminal-green whitespace-pre-line">
          {text}
          <span className="animate-pulse">_</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
