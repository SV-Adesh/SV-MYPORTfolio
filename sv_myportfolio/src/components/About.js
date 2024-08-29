import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-8 bg-gradient-to-r from-gray-800 to-black">
      <div className="text-center">
        <h3 className="text-5xl font-bold text-center mb-8 hover:text-yellow-400 transition-transform duration-500 hover:scale-105">Technical Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4">
       
        
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">HTML & CSS</li>
         
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">React.js</li>

          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Node.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Express.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">MongoDB</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Cloud</li>
         
         
          
         
        </ul>
      </div>
    </section>
  );
}

export default About;
