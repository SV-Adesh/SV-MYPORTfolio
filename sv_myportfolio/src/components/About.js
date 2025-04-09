import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaCloud, FaMobile, FaTools } from 'react-icons/fa';

function About() {
  const skills = [
    { name: 'HTML & CSS', icon: <FaCode /> },
    { name: 'React.js', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaServer /> },
    { name: 'Express.js', icon: <FaServer /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Cloud', icon: <FaCloud /> },
    { name: 'Azure', icon: <FaCloud /> },
    { name: 'Responsive Design', icon: <FaMobile /> },
    { name: 'CI/CD', icon: <FaTools /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Technical Skills</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of the technologies and tools I've worked with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center justify-center text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)'
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400 mb-2 md:mb-4">
                {skill.icon}
              </div>
              <h3 className="text-sm md:text-base font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#projects" 
            className="inline-block px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-400/30 hover:scale-105 text-sm md:text-base"
          >
            See My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
