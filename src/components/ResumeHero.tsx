
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const ResumeHero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
                KARAN DUBEY
              </h1>
              <div className="text-xl text-primary font-medium mt-2">Computer Science Student & Web Developer</div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              A passionate developer focused on creating modern, responsive web applications 
              with a strong foundation in computer science and algorithms.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="https://github.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:karandubey2122@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
                <span>karandubey2122@gmail.com</span>
              </a>
              <a href="tel:+917067299313" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} />
                <span>+91 7067299313</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="relative max-w-lg w-full mx-auto my-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative z-10 bg-card rounded-2xl border border-border/50 shadow-xl p-6 overflow-hidden">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="font-mono text-sm">
              <div className="flex">
                <span className="text-primary mr-2">$</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 2 }}
                  className="block overflow-hidden whitespace-nowrap"
                >
                  npm run portfolio
                </motion.span>
              </div>
              <div className="mt-2">
                <span className="text-green-500">✓</span> Computer Science Student
              </div>
              <div className="mt-2">
                <span className="text-blue-500">i</span> Web Developer & Algorithm Enthusiast
              </div>
              <div className="mt-2">
                <span className="text-yellow-500">$</span> Open to Opportunities
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl border border-primary/30 -z-10 translate-x-5 translate-y-5"></div>
        </motion.div>
        
        {/* About Me section */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="text-md text-muted-foreground rounded-lg border border-border/50 p-6 bg-card/50">
            <p className="mb-4">
              I'm a dedicated programmer with expertise in full-stack development, specializing in React, TypeScript, and modern web frameworks.
            </p>
            <p className="mb-4">
              My goal is to build elegant, user-friendly applications that solve real-world problems. I'm constantly learning new technologies and refining my skills to stay at the cutting edge of web development.
            </p>
            <p>
              Let's create something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeHero;
