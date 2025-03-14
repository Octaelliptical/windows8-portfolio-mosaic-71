
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Layout, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
  link: string;
  icon: React.ReactNode;
}

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern online store built with React and Node.js',
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      color: '#0078D7',
      link: '#',
      icon: <Monitor />,
    },
    {
      id: 2,
      title: 'Fitness App',
      description: 'Mobile app for tracking workouts and nutrition',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      color: '#5DC21E',
      link: '#',
      icon: <Smartphone />,
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description: 'Comprehensive dashboard for data visualization',
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      color: '#E81123',
      link: '#',
      icon: <Layout />,
    },
    {
      id: 4,
      title: 'API Integration',
      description: 'Backend service for social media integration',
      category: 'backend',
      image: 'https://via.placeholder.com/600x400',
      color: '#FFB900',
      link: '#',
      icon: <Code />,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio for a designer showcasing their work',
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      color: '#00B7C3',
      link: '#',
      icon: <Monitor />,
    },
    {
      id: 6,
      title: 'Travel Planner',
      description: 'Interactive app for planning trips and adventures',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      color: '#6B69D6',
      link: '#',
      icon: <Smartphone />,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Design' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'backend', label: 'Backend' },
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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="win8-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 font-light text-center"
            variants={itemVariants}
          >
            My <span className="font-normal text-win8-blue">Projects</span>
          </motion.h2>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-3 rounded-sm transition-colors ${
                  activeCategory === category.value
                    ? 'bg-win8-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                custom={index}
              >
                <div 
                  className="h-48 relative flex items-center justify-center" 
                  style={{ backgroundColor: project.color }}
                >
                  <div className="text-white text-6xl">{project.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-win8-blue hover:underline"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
