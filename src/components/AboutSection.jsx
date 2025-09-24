import React from "react";
import gjImage from '../assets/gj.png';

const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate student learning frontend development with a love for creating beautiful,
            functional web experiences. My journey in web development started with curiosity and has evolved
            into a dedication to learning how to craft digital solutions that make a difference.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            When I'm not coding, you'll find me exploring new technologies, following online tutorials,
            contributing to small projects, or learning about the latest trends in web development.
            I believe in continuous learning and pushing the boundaries of what's possible on the web.
          </p>
          <p className="text-lg text-gray-300">
            My goal is to grow as a developer and build user experiences that are both visually
            appealing and highly functional.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-2 mt-10">
            <div>
              <p className="text-xl font-bold text-yellow-400">Student</p>
              <p className="text-sm text-gray-400">Status</p>
            </div>
            <div>
              <p className="text-xl font-bold text-purple-400">15+</p>
              <p className="text-sm text-gray-400">Mini Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-400">2021–Now</p>
              <p className="text-sm text-gray-400">Learning Journey</p>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={gjImage}
            alt="Profile"
            className="w-80 h- rounded-2xl border border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
