import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-900">
          Kripal Singh
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#work" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Work
          </a>
          <a href="#blog" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Blog
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}