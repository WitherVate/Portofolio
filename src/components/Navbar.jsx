import React, { useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineUser,
  HiMenu,
  HiX,
  HiCode,
} from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false); // supaya menu tutup pas klik di mobile

  return (
    <header className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="transition-all rounded-full p-3 bg-yellow-400 text-black">
              <HiCode className="text-2xl rounded" />
            </div>
            <div>
              <h3 className="text-sm">Muhammad Irsyaad Fadhillah</h3>
              <p className="text-sm text-gray-400">Web Developer</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2 bg-gray-600/30 rounded-full px-3 py-2 outline-1 outline-gray-700">
            <a
              href="#hero"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineHome />
              Home
            </a>
            <a
              href="#about"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineUser />
              About
            </a>
            <a
              href="#experience"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineBriefcase />
              Experience
            </a>
            <a
              href="#skills"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineCode />
              Skills
            </a>
            <a
              href="#projects"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineFolder />
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleClick}
              className="flex items-center gap-1 hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded-full transition"
            >
              <HiOutlineMail />
              Contact
            </a>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-600/30 outline-1 outline-gray-700 rounded-full md:hidden flex items-center justify-center w-10 h-10"
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="#hero"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineHome />
              Home
            </a>
            <a
              href="#about"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineUser />
              About
            </a>
            <a
              href="#experience"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineBriefcase />
              Experience
            </a>
            <a
              href="#skills"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineCode />
              Skills
            </a>
            <a
              href="#projects"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineFolder />
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleClick}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
            >
              <HiOutlineMail />
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
