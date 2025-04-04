
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string[];
  tech: string[];
  link: string;
  color: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Craftify- AI powered Resume Optimizer',
      date: 'Jan 2024',
      description: [
        'An AI-driven resume optimization platform that enhanced the compatibility of resumes to ATS by 85%.',
        'Designed & implemented an authentication system using Firebase, increasing security and access efficiency.',
        'Used Python, Streamlit, and NLP libraries (Spacy, NLTK) for high-performance analysis.',
        'Achieved 83% faster processing with a streamlined interface and 95% user satisfaction.'
      ],
      tech: ['Python', 'Streamlit', 'NLP', 'Firebase'],
      link: '#',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Sorting Algorithm Visualizer',
      date: 'Nov 2023',
      description: [
        'Built real-time visualizations for 5 popular sorting algorithms, integrating features that significantly improved understanding of the working of algorithms for users, increasing knowledge retention by 50%.',
        'Focused on clean, intuitive UI/UX, increasing session duration by 27% and achieving 90% user satisfaction.'
      ],
      tech: ['JavaScript', 'HTML', 'CSS', 'Algorithms'],
      link: '#',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Route Shortest Path',
      date: 'Sept 2023',
      description: [
        'Developed a python application that calculated the shortest route between 60+ locations, optimizing routes by 35% using Dijkstra\'s algorithm.',
        'Integrated voice recognition and manual typing, enhancing user accessibility by 40% and improving overall user interaction.'
      ],
      tech: ['Python', 'Graph Algorithms', 'Voice Recognition'],
      link: '#',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Pomodoro Productivity App',
      date: 'Aug 2023',
      description: [
        'Designed and implemented a customizable 25/5 Pomodoro timer with adjustable intervals and audio notifications resulting in 20% increase in daily usage',
        'Implemented mobile-first design using Tailwind CSS, optimized the build process with Vite, reducing build times by 60% and achieving 80% positive response.'
      ],
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: '#',
      color: 'bg-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <Code size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`h-2 ${project.color}`}></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.description.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <p className="text-sm">{point}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-background rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:underline mt-4"
                    >
                      View Project <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
