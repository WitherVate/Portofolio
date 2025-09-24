import React from "react";
import { FaReact, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiNestjs } from "react-icons/si";

const ExperienceSection = () => {
  return (
    <section className="max-w-7xl mx-auto text-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-5">
          Experience
        </h2>
        <p className="text-xl">My professional journey in software development</p>
      </div>

        <div className="bg-black/60 rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
            Internship at PT Zegen Solusi Mandiri
          </h3>
          <p className="text-gray-300 mb-6">
            As an intern, I contributed to building and maintaining web
            applications while learning modern frameworks and best
            practices. During this internship, I also helped develop and
            improve a CRM (Customer Relationship Management) website,
            which gave me valuable hands-on experience in real-world projects.
            This experience helped me grow my technical and teamwork skills.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium">
              <FaReact className="text-xl" /> React
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium">
              <SiNextdotjs className="text-xl" /> Next.js
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium">
              <SiNestjs className="text-xl" /> NestJS
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium">
              <FaLaravel className="text-xl" /> Laravel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
