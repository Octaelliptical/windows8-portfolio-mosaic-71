
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-primary font-medium">Full-Stack Development</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
                Crafting<br />
                <span className="text-gradient">Interactive</span> Experiences
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg text-text-secondary max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Showcasing modern web development with React, TypeScript, and beautiful animations. Explore the latest in web technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="btn-primary flex items-center gap-2">
                View Projects <ArrowDown size={18} />
              </button>
              <button className="btn-outline">Contact Me</button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative z-10 bg-background-light rounded-2xl border border-border/50 shadow-xl p-6 overflow-hidden">
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
                  <span className="text-green-500">✓</span> Compiled successfully!
                </div>
                <div className="mt-2">
                  <span className="text-blue-500">i</span> Showcasing animations, components & more
                </div>
                <div className="flex mt-4">
                  <span className="text-primary mr-2">$</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="relative"
                  >
                    _<motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="absolute inset-0"
                    >|</motion.span>
                  </motion.span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl border border-primary/30 -z-10 translate-x-5 translate-y-5"></div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-text-secondary text-sm mb-2">Scroll to explore</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
