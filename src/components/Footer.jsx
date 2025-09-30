import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Irsyaad Fadhillah. All rights reserved.</p>

        <div className="flex space-x-6 text-yellow-400 text-xl">
          <a
            href="https://github.com/irsyaddev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/irsyaddev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:irsyad@example.com"
            aria-label="Email"
            className="hover:text-yellow-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
