
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import FloatingActionButton from '../components/FloatingActionButton';
import { useToast } from '../hooks/use-toast';
import ResumeHero from '../components/ResumeHero';
import EducationSection from '../components/EducationSection';
import LeetCodeSection from '../components/LeetCodeSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import VolunteeringSection from '../components/VolunteeringSection';
import ContactSection from '../components/ContactSection';
import CapabilitiesShowcase from '../components/CapabilitiesShowcase';
import AnimationShowcase from '../components/AnimationShowcase';
import InteractiveBackground from '../components/InteractiveBackground';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [isHacking, setIsHacking] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate hacking animation for a shorter time (1.5 seconds)
    const timer = setTimeout(() => {
      setIsHacking(false);
      setShowConfetti(true);
      toast({
        title: "Welcome to Karan's Portfolio",
        description: "Explore my projects, skills, and experience",
        variant: "default",
      });
      
      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }, 1500);
    
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {!isHacking && <InteractiveBackground />}
      
      <AnimatePresence mode="wait">
        {isHacking ? (
          <PageTransition key="hacking">
            <HackingAnimation />
          </PageTransition>
        ) : (
          <PageTransition key="main">
            <main className="relative z-20">
              <ResumeHero />
              <EducationSection />
              <LeetCodeSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <CertificationsSection />
              <VolunteeringSection />
              <AnimationShowcase />
              <CapabilitiesShowcase />
              <ContactSection />
              <FloatingActionButton onClick={handleDownloadCV} />
              
              {showConfetti && <Confetti />}
            </main>
          </PageTransition>
        )}
      </AnimatePresence>
    </div>
  );
};

const HackingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = [
    'Loading portfolio...',
    'Compiling experience...',
    'Gathering projects...',
    'Ready to showcase. Welcome.'
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
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl h-80 bg-background-light border border-primary/50 rounded-md p-6 overflow-hidden shadow-2xl"
      >
        <div className="font-mono text-primary whitespace-pre-line text-lg">
          {text}
          <span className="animate-pulse">_</span>
        </div>
      </motion.div>
    </div>
  );
};

const Confetti = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-50"
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            ease: "easeOut",
            delay: Math.random() * 0.5
          }}
          className="absolute"
        >
          <div
            className="w-3 h-3"
            style={{
              backgroundColor: [
                "#FF5E5B", "#D8D8D8", "#FFFFEA", "#00CECB", "#FFED66", 
                "#3A86FF", "#FF006E", "#FFBE0B", "#FB5607", "#8338EC"
              ][Math.floor(Math.random() * 10)],
              borderRadius: Math.random() > 0.5 ? "50%" : "0"
            }}
          />
        </motion.div>
      ))}
      
      {Array.from({ length: 40 }).map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            scale: 0
          }}
          animate={{
            y: window.innerHeight + 20,
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeOut",
            delay: Math.random() * 0.5,
            repeat: Math.round(Math.random() * 2),
            repeatType: "reverse"
          }}
          className="absolute text-yellow-400"
        >
          <Sparkles size={24} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Index;
