
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="win8-container">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 font-light text-center"
            variants={itemVariants}
          >
            Get in <span className="font-normal text-win8-blue">Touch</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-win8-blue mr-4" />
                  <span className="text-gray-700">hello@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-win8-green mr-4" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-win8-red mr-4" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>

              <h3 className="text-2xl font-light mb-6">Social Media</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-sm bg-win8-blue flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-sm bg-gray-800 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-sm bg-win8-teal flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-win8-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-win8-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-win8-blue"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-win8-blue text-white px-8 py-3 hover:bg-win8-blue/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
