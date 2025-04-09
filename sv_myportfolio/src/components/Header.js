import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg backdrop-blur-lg bg-opacity-90 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#hero" 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
           
          </motion.a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-8 text-lg md:text-xl text-white font-medium">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'about', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`relative px-2 py-1 block transition-all duration-300 hover:text-yellow-400 ${activeSection === item.id ? 'text-yellow-400' : 'text-gray-200'}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                        layoutId="underline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
              <li>
                <motion.a 
                  href="https://drive.google.com/file/d/1EvkKfSMhWR36FCEjIeAz-IqLB6uCZ5kd/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-500/30 hover:scale-105 ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt className="mr-2" />
                  Resume
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="flex flex-col space-y-4 text-white font-medium">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'about', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`block py-2 transition-all duration-300 hover:text-yellow-400 ${activeSection === item.id ? 'text-yellow-400' : 'text-gray-200'}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <motion.a 
                  href="https://drive.google.com/file/d/155ccetiVfKAWnCsP30tGXDHSjHCnGWcz/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-500/30 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavClick}
                >
                  <FaFileAlt className="mr-2" />
                  Resume
                </motion.a>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
