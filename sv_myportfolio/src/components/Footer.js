import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Footer() {
  const formRef = useRef();

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show loading indicator or disable button here if desired
    
    emailjs.sendForm(
      'service_h92eils', 
      'template_41lk10y',
      formRef.current,
      'XYYRfSDq3CUud1Zjn'
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('Message sent successfully!');
      formRef.current.reset();
    }, (error) => {
      console.log('FAILED...', error.text, error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <footer id="contact" className="py-16 px-8 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Contact Me</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            className="glass-card p-8 rounded-xl"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-400 mr-4 text-xl" />
                <span>Mangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-4 text-xl" />
                <a href="mailto:adeshshetty3333@gmail.com" className="hover:text-yellow-400 transition-colors">adeshshetty3333@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-yellow-400 mr-4 text-xl" />
                <a href="tel:+918147186372" className="hover:text-yellow-400 transition-colors">+91 8147186372</a>
              </li>
            </ul>
            
            <div className="mt-8 flex space-x-5">
              <motion.a 
                href="https://www.linkedin.com/in/s-v-adesh-29a78a239" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-yellow-400 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://github.com/SV-Adesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-yellow-400 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-8 rounded-xl"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Send Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Your Name" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="reply_to"
                  placeholder="Your Email" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-medium px-6 py-3 rounded-lg w-full shadow-lg transition-all duration-300 hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} S V Adesh. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
