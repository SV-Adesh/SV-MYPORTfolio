import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Tic Tac Toe Multiplayer',
    description: 'A real-time multiplayer Tic Tac Toe game built using React and WebSockets. Players can create or join rooms and play seamlessly across devices.',
    imageUrl: `${process.env.PUBLIC_URL}/img/pro5.png`,
    link: 'https://sv-tic-tac-toe-frontend.onrender.com/'
  },

  {
    title: 'Watch Together',
    description: 'A collaborative video-watching platform where users can sync video playback with friends in real time using Socket.IO and modern React features.',
    imageUrl: `${process.env.PUBLIC_URL}/img/pro4.png`,
    link: 'https://watchtogether-tawny.vercel.app/'
  },
  {
    title: 'Predictive Modeling for Early Detection of Disease',
    description: 'Accurate image detection in machine learning relies on the quality and alignment of input images.',
    imageUrl: `${process.env.PUBLIC_URL}/img/pro2.jpg`,
    
  },
  {
    title: 'Secure Portal for Company',
    description: 'A secure portal using React.js and Express.js, addressing the need for a content management system.',
    imageUrl: `${process.env.PUBLIC_URL}/img/pro6.png`,
   
  },
 
  {
    title: 'Insurance Management System',
    description: 'Designed a super helpful tool for insurance companies to keep track of policies, claims, and customer info all in one place.',
    imageUrl: `${process.env.PUBLIC_URL}/img/pro3.png`,
   
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-gradient-to-r from-gray-900 to-black">
      <motion.h2 
        className="text-5xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-gray-800 backdrop-blur-lg bg-opacity-30 p-6 rounded-xl shadow-xl 
                     hover:shadow-2xl hover:shadow-yellow-400/20 transform transition duration-300 
                     hover:-translate-y-2 border border-gray-700 hover:border-yellow-500/50"
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-end">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg
                        transition-all duration-300 hover:bg-yellow-400 transform hover:scale-105"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
