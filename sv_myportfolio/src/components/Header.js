import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-black p-6">
      <nav className="max-w-7xl mx-auto flex justify-center items-center space-x-12">
        <ul className="flex space-x-8 text-xl lg:text-2xl text-white font-semibold">
          <li>
            <a href="#hero" className="hover:text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110">
              Contact
            </a>
          </li>
          <li>
            <a href="/SV-resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110">
              <FaFileAlt style={{ fontSize: '2em', color: '#ffcc00' }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
