
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

const Index = () => {
  const [isHacking, setIsHacking] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate hacking animation for a shorter time (1.5 seconds)
    const timer = setTimeout(() => {
      setIsHacking(false);
      toast({
        title: "Welcome to Karan's Portfolio",
        description: "Explore my projects, skills, and experience",
        variant: "default",
      });
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
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {isHacking ? (
          <PageTransition key="hacking">
            <HackingAnimation />
          </PageTransition>
        ) : (
          <PageTransition key="main">
            <main className="overflow-hidden">
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

export default Index;
