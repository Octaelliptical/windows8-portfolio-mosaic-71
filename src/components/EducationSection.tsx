
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const EducationSection = () => {
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
    <section id="education" className="py-20 bg-muted/30">
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
            <GraduationCap size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
                </CardTitle>
                <span className="text-sm text-muted-foreground">Nov 2021 – June 2025</span>
              </CardHeader>
              <CardContent>
                <p className="font-medium">B.Tech in Computer Science</p>
                <p className="text-muted-foreground mt-2">CGPA: 7.54</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
