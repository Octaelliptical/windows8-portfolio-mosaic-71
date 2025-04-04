
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const VolunteeringSection = () => {
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
    <section id="volunteering" className="py-20">
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
            <Heart size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Volunteering & Responsibility</h2>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Heart size={22} className="text-primary mr-2" />
                  <CardTitle className="text-xl font-bold">
                    Volunteer, WWF (World Wide Fund for Nature)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Assisted in organizing events and promoting conservation efforts, contributing to increased awareness and community engagement.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Users size={22} className="text-primary mr-2" />
                  <CardTitle className="text-xl font-bold">
                    Student Coordinator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organized various competitions such as LAN gaming, poster-making with 400+ participants.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
