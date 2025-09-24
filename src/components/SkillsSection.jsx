import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTailwindcss } from "react-icons/si";
const SkillsSection = () => {
  
  return (
    <section className="max-w-7xl mx-auto text-white py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Skills & <span className="text-yellow-400">Technologies</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaReact className="text-5xl text-cyan-400 mb-4" />
            <p className="text-lg font-medium">React</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <SiNextdotjs className="text-5xl text-white mb-4" />
            <p className="text-lg font-medium">Next.js</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <SiNestjs className="text-5xl text-red-500 mb-4" />
            <p className="text-lg font-medium">NestJS</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaLaravel className="text-5xl text-red-400 mb-4" />
            <p className="text-lg font-medium">Laravel</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <SiTailwindcss className="text-5xl text-cyan-300 mb-4" />
            <p className="text-lg font-medium">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaJsSquare className="text-5xl text-yellow-300 mb-4" />
            <p className="text-lg font-medium">JavaScript</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaHtml5 className="text-5xl text-orange-500 mb-4" />
            <p className="text-lg font-medium">HTML5</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaCss3Alt className="text-5xl text-blue-400 mb-4" />
            <p className="text-lg font-medium">CSS3</p>
          </div>

          <div className="flex flex-col items-center bg-[#222] p-6 rounded-xl hover:bg-[#333] transition">
            <FaNodeJs className="text-5xl text-green-400 mb-4" />
            <p className="text-lg font-medium">Node.js</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
