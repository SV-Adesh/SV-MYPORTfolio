import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="py-16 px-8 bg-gradient-to-r from-gray-800 to-black text-center">
      <h2 className="text-4xl font-bold text-center mb-8 hover:text-yellow-400 transition-transform duration-500 hover:scale-105">Contact Me</h2>
      <p className="mb-4">Check out my GitHub for more projects and coding experience. Connect with me on LinkedIn to follow my professional journey and updates.</p>
      <div className="space-x-4">
        <a href="https://www.linkedin.com/in/s-v-adesh-29a78a239" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500 text-4xl"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/SV-Adesh" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500 text-4xl"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
