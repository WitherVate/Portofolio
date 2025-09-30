import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="max-w-7xl mx-auto text-white py-24 mb-6 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Professional <span className="text-yellow-400">Web Development</span> Services
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Building Modern & <span className="text-yellow-400">Responsive Websites</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Specializing in crafting fast, secure, and user-friendly web solutions using the latest technologies. 
            Every project is designed to provide an engaging experience for your audience.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            From sleek personal portfolios to complex business applications, 
            our goal is to turn your ideas into stunning digital realities that stand out online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
