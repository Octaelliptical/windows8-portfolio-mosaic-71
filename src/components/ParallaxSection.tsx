
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface ParallaxItem {
  id: number;
  title: string;
  description: string;
  depth: number;
}

const items: ParallaxItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive and engaging user interfaces with modern frameworks",
    depth: 0.2,
  },
  {
    id: 2,
    title: "Backend Architecture",
    description: "Building scalable server-side applications and APIs",
    depth: 0.4,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences",
    depth: 0.6,
  },
  {
    id: 4,
    title: "DevOps",
    description: "Streamlining deployment and infrastructure management",
    depth: 0.8,
  },
];

const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Expertise Areas</h2>
        
        <div className="max-w-4xl mx-auto relative">
          {items.map((item) => (
            <ParallaxCard 
              key={item.id} 
              item={item} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/30"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-primary/20"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          }}
        />
      </div>
    </section>
  );
};

const ParallaxCard = ({ 
  item, 
  progress 
}: { 
  item: ParallaxItem; 
  progress: any;
}) => {
  const y = useTransform(
    progress, 
    [0, 1], 
    [100 * item.depth, -100 * item.depth]
  );
  
  return (
    <motion.div 
      className="mb-8"
      style={{ y }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ParallaxSection;
