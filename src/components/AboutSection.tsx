
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, BookOpen, Code } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="section-padding bg-white">
      <div className="win8-container">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 font-light text-center"
            variants={itemVariants}
          >
            About <span className="font-normal text-win8-blue">Me</span>
          </motion.h2>

          <motion.div 
            className="flex flex-col md:flex-row gap-8 mb-16"
            variants={itemVariants}
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-md overflow-hidden bg-win8-blue">
                <User className="w-full h-full text-white p-6" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-light mb-4">Hello, I'm <span className="font-normal text-win8-blue">John Doe</span></h3>
              <p className="text-gray-700 mb-4">
                I'm a passionate designer and developer with expertise in creating modern, 
                intuitive digital experiences. With a background in both design and 
                development, I bring a holistic approach to every project I work on.
              </p>
              <p className="text-gray-700">
                I specialize in user interface design, user experience, and front-end development,
                with a particular focus on creating accessible and performant web applications.
              </p>
            </div>
          </motion.div>

          <motion.h3 
            className="text-2xl mb-6 font-light text-center"
            variants={itemVariants}
          >
            My <span className="font-normal text-win8-blue">Skills</span>
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={itemVariants}
          >
            <div className="p-6 border border-gray-200 rounded-md">
              <Code className="w-12 h-12 text-win8-blue mb-4" />
              <h4 className="text-xl font-light mb-2">Front-end Development</h4>
              <p className="text-gray-600">HTML, CSS, JavaScript, React, Vue.js, Tailwind CSS</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md">
              <Award className="w-12 h-12 text-win8-green mb-4" />
              <h4 className="text-xl font-light mb-2">UI/UX Design</h4>
              <p className="text-gray-600">Figma, Adobe XD, Sketch, Prototyping, Wireframing</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md">
              <Briefcase className="w-12 h-12 text-win8-orange mb-4" />
              <h4 className="text-xl font-light mb-2">Project Management</h4>
              <p className="text-gray-600">Agile, Scrum, Jira, Trello, Client Communication</p>
            </div>
          </motion.div>

          <motion.h3 
            className="text-2xl mb-6 font-light text-center"
            variants={itemVariants}
          >
            My <span className="font-normal text-win8-blue">Experience</span>
          </motion.h3>

          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="p-6 border-l-4 border-win8-blue bg-gray-50">
              <h4 className="text-xl font-normal mb-1">Senior Front-end Developer</h4>
              <p className="text-win8-blue mb-2">Tech Company Inc. (2020 - Present)</p>
              <p className="text-gray-600">
                Lead front-end developer for multiple high-profile projects. Responsible for
                architecture decisions, mentoring junior developers, and implementing best practices.
              </p>
            </div>
            <div className="p-6 border-l-4 border-win8-green bg-gray-50">
              <h4 className="text-xl font-normal mb-1">UI/UX Designer</h4>
              <p className="text-win8-green mb-2">Design Studio LLC (2018 - 2020)</p>
              <p className="text-gray-600">
                Created user interfaces and experiences for web and mobile applications.
                Collaborated with clients to understand and implement their vision.
              </p>
            </div>
            <div className="p-6 border-l-4 border-win8-yellow bg-gray-50">
              <h4 className="text-xl font-normal mb-1">Junior Developer</h4>
              <p className="text-win8-yellow mb-2">Startup Innovations (2016 - 2018)</p>
              <p className="text-gray-600">
                Developed and maintained websites and web applications using modern frameworks.
                Worked in an agile environment to deliver features on time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
