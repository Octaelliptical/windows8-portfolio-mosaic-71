
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dices, Plus, Minus, Shuffle, RotateCcw, Maximize, Minimize, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimationShowcase = () => {
  const [activeDemo, setActiveDemo] = useState('hover');
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = () => {
    if (items.length > 1) {
      setItems(items.slice(0, -1));
    }
  };

  const shuffleItems = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  const resetItems = () => {
    setItems(['Item 1', 'Item 2', 'Item 3']);
  };

  return (
    <section className="section bg-background py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Framer Motion <span className="text-gradient">Animation Showcase</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Explore the power of Framer Motion with these interactive animation examples
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4"
          >
            <div className="bg-background-light p-6 rounded-lg border border-border/50 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Demos</h3>
              <ul className="space-y-2">
                {['hover', 'counter', 'list', 'modal'].map((demo) => (
                  <li key={demo}>
                    <button
                      onClick={() => setActiveDemo(demo)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeDemo === demo
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-background-dark'
                      }`}
                    >
                      {demo.charAt(0).toUpperCase() + demo.slice(1)} Effects
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/4"
          >
            <div className="bg-background-light p-8 rounded-lg border border-border/50 min-h-[500px] flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {activeDemo.charAt(0).toUpperCase() + activeDemo.slice(1)} Animation
              </h3>

              {activeDemo === 'hover' && (
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-background p-6 rounded-lg border border-border/50 flex flex-col items-center justify-center h-48 cursor-pointer"
                    >
                      <h4 className="text-lg font-medium mb-2">Scale on Hover</h4>
                      <p className="text-text-secondary text-center">Hover over me to see the effect</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ rotate: 5, boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
                      className="bg-background p-6 rounded-lg border border-border/50 flex flex-col items-center justify-center h-48 cursor-pointer"
                    >
                      <h4 className="text-lg font-medium mb-2">Rotation on Hover</h4>
                      <p className="text-text-secondary text-center">Hover over me to see the effect</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ 
                        backgroundColor: "rgba(132, 204, 22, 0.1)",
                        borderColor: "rgba(132, 204, 22, 0.5)"
                      }}
                      className="bg-background p-6 rounded-lg border border-border/50 flex flex-col items-center justify-center h-48 cursor-pointer"
                    >
                      <h4 className="text-lg font-medium mb-2">Color Change</h4>
                      <p className="text-text-secondary text-center">Hover over me to see the effect</p>
                    </motion.div>

                    <div 
                      className="bg-background p-6 rounded-lg border border-border/50 flex flex-col items-center justify-center h-48 relative overflow-hidden cursor-pointer"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/10 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <MousePointer className="text-primary h-10 w-10" />
                        </motion.div>
                      </motion.div>
                      <h4 className="text-lg font-medium mb-2">Reveal Effect</h4>
                      <p className="text-text-secondary text-center">Hover over me to see the effect</p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-center">
                    These effects use the <code>whileHover</code> and <code>whileTap</code> properties from Framer Motion
                  </p>
                </div>
              )}

              {activeDemo === 'counter' && (
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-background p-8 rounded-lg border border-border/50 flex flex-col items-center"
                  >
                    <h4 className="text-xl font-medium mb-6">Animated Counter</h4>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCount(count - 1)}
                        className="h-12 w-12 rounded-full bg-background-dark flex items-center justify-center"
                      >
                        <Minus className="h-5 w-5" />
                      </motion.button>
                      
                      <div className="h-24 w-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={count}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-4xl font-bold"
                          >
                            {count}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCount(count + 1)}
                        className="h-12 w-12 rounded-full bg-background-dark flex items-center justify-center"
                      >
                        <Plus className="h-5 w-5" />
                      </motion.button>
                    </div>
                    
                    <p className="text-text-secondary text-center">
                      This counter uses <code>AnimatePresence</code> for enter/exit animations
                    </p>
                  </motion.div>
                </div>
              )}

              {activeDemo === 'list' && (
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <div className="w-full max-w-lg">
                    <div className="bg-background p-6 rounded-lg border border-border/50 mb-6">
                      <div className="flex gap-2 mb-6 flex-wrap">
                        <Button onClick={addItem} size="sm" className="flex items-center gap-1">
                          <Plus className="h-4 w-4" /> Add
                        </Button>
                        <Button onClick={removeItem} size="sm" variant="outline" className="flex items-center gap-1">
                          <Minus className="h-4 w-4" /> Remove
                        </Button>
                        <Button onClick={shuffleItems} size="sm" variant="secondary" className="flex items-center gap-1">
                          <Shuffle className="h-4 w-4" /> Shuffle
                        </Button>
                        <Button onClick={resetItems} size="sm" variant="ghost" className="flex items-center gap-1">
                          <RotateCcw className="h-4 w-4" /> Reset
                        </Button>
                      </div>
                      
                      <ul className="space-y-2 min-h-[300px]">
                        <AnimatePresence>
                          {items.map((item, index) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-background-dark p-4 rounded-md border border-border/50"
                              layoutId={item}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>
                    </div>
                    
                    <p className="text-text-secondary text-center">
                      This list demonstrates <code>AnimatePresence</code> and <code>layoutId</code> for list transitions
                    </p>
                  </div>
                </div>
              )}

              {activeDemo === 'modal' && (
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-background p-8 rounded-lg border border-border/50 flex flex-col items-center max-w-md mx-auto"
                  >
                    <h4 className="text-xl font-medium mb-4">Modal Animation</h4>
                    <p className="text-text-secondary text-center mb-6">
                      Click the button below to see a smoothly animated modal dialog
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(true)}
                      className="btn-primary"
                    >
                      Open Modal
                    </motion.button>
                  </motion.div>

                  <AnimatePresence>
                    {isOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsOpen(false)}
                          className="fixed inset-0 bg-black"
                          style={{ zIndex: 50 }}
                        />
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.75, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.75, y: 20 }}
                          transition={{ type: "spring", bounce: 0.3 }}
                          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-8 rounded-xl border border-border/50 shadow-2xl max-w-md w-full"
                          style={{ zIndex: 51 }}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold">Animated Modal</h3>
                            <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-primary">
                              <Minimize className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <p className="text-text-secondary mb-4">
                            This modal uses Framer Motion's <code>AnimatePresence</code> for smooth enter/exit animations.
                          </p>
                          
                          <div className="p-4 bg-background-dark rounded-lg mb-6">
                            <p className="text-sm">
                              Animation properties include scale, opacity, and position transforms with a spring type for natural motion.
                            </p>
                          </div>
                          
                          <div className="flex justify-end">
                            <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimationShowcase;
