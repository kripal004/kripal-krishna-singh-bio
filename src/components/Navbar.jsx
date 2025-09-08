import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#">
          <img src="../../assets/Bio.jpg" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#work" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Work
          </a>
          <a href="#experience" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Experience
          </a>
          <a href="#achievements" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Achievements
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Skills
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Contact
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="#work" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Work</a>          
          <a href="#experience" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Experience</a>
          <a href="#achievements" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Achievements</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Skills</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-500 font-semibold">Contact</a>
        </div>
      )}
    </nav>
  );
}