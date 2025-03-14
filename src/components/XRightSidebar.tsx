
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const XRightSidebar = () => {
  const trends = [
    { id: 1, category: 'Front-end', title: 'React', posts: '120K' },
    { id: 2, category: 'Back-end', title: 'Node.js', posts: '85K' },
    { id: 3, category: 'UI/UX', title: 'Design Systems', posts: '42K' },
    { id: 4, category: 'Mobile', title: 'React Native', posts: '56K' },
  ];

  return (
    <aside className="x-right-sidebar">
      <div className="bg-card rounded-2xl p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-4">
          Front-end developer passionate about creating beautiful, responsive web applications with modern technologies.
        </p>
        <div className="flex space-x-3 mt-4">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:email@example.com"
            className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Trending Skills</h2>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div key={trend.id} className="hover:bg-muted p-2 rounded-lg transition-colors">
              <p className="text-xs text-muted-foreground">{trend.category}</p>
              <p className="font-bold">{trend.title}</p>
              <p className="text-xs text-muted-foreground">{trend.posts} posts</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default XRightSidebar;
