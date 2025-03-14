
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, MessageSquare, Share } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  likes: number;
  comments: number;
  link: string;
}

const ProjectCard = ({ id, title, description, image, tags, likes, comments, link }: ProjectCardProps) => {
  return (
    <motion.div 
      className="x-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex space-x-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          {title.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold">{title}</h3>
            <span className="text-muted-foreground text-sm">{`Project #${id}`}</span>
          </div>
          <p className="mt-2 text-foreground">{description}</p>
          
          {image && (
            <div className="mt-3 rounded-2xl overflow-hidden">
              <img src={image} alt={title} className="w-full h-auto object-cover" />
            </div>
          )}
          
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-primary text-sm">#{tag}</span>
            ))}
          </div>
          
          <div className="mt-4 flex justify-between">
            <motion.div 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Heart size={18} />
              <span>{likes}</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare size={18} />
              <span>{comments}</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Share size={18} />
            </motion.div>
            <motion.a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={18} />
              <span>View</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
