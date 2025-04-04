
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <Briefcase size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl font-bold">
                    Web Developer Intern
                  </CardTitle>
                  <p className="text-primary font-medium">The Sparks Foundation</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">May 2024 - June 2024</span>
                  <p className="text-sm text-muted-foreground">Remote</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <ArrowUpRight size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <p>Developed and maintained web applications using React, HTML, CSS, JavaScript, resulting in a 30% increase in user engagement.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <p>Assisted 10+ peers with their projects, leading to a 15% improvement in overall project outcomes.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <p>Optimized front-end code, reducing load times by 25% and boosting website performance by 20%.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
