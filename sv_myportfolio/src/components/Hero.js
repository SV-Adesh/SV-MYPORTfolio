import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20">
      {/* Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            S V Adesh
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Iam a Computer Science Engineer from Sahyadri College of Engineering and Management, Mangaluru, with a CGPA of 8.8 and a strong foundation in both theoretical and practical aspects of computing. During my academic journey, I actively worked on several full-stack and machine learning projects that enhanced my problem-solving abilities and deepened my understanding of real-world applications. I'm passionate about building solutions that are not only functional but also impactful and user-centric.
            </motion.p>
            
            {/* Social links */}
            <motion.div 
              className="flex justify-center md:justify-start space-x-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-3xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-3xl"
              >
                <FaTwitter />
              </a>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-500/30 hover:scale-105 text-xl"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border-2 border-yellow-400 text-yellow-400 font-medium px-10 py-4 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black text-xl"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-yellow-400/50 group-hover:shadow-xl z-10">
                <img 
                  src={process.env.PUBLIC_URL + '/img/dp.jpg'} 
                  alt="S V Adesh" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
              </div>
              <div className="absolute -inset-0.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
