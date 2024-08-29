import React from 'react';

function Hero() {
  return (
    <section id="hero" className="py-20 px-14 bg-gradient-to-r from-gray-800 to-black transition-all duration-700 ease-in-out">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-7xl font-bold text-white mb-6 transition-transform duration-500 hover:scale-105 hover:text-yellow-400">
            S V ADESH
          </h1>
          <h2 className="text-2xl lg:text-3xl font-light text-gray-300 max-w-4xl mx-auto lg:mx-0 transition-all duration-500 ease-in-out">
            I am a Computer Science Engineer with a strong foundation from Sahyadri College of Engineering and Management, Mangaluru, boasting a CGPA of 8.8. I specialize in crafting dynamic and responsive web pages using React.js, Express.js, and MongoDB. My expertise extends across multiple programming languages and frameworks, and I thrive in collaborative environments, committed to delivering user-friendly web applications.
          </h2>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/dp.jpg`}
            alt="Profile"
            className="w-80 h-80 rounded-full border-4 border-yellow-400 shadow-2xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
